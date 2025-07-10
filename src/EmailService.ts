import { EmailRequest, EmailStatus, EmailProvider } from "./types";

export class EmailService {
  private primary: EmailProvider;
  private secondary: EmailProvider;
  private sentEmails = new Map<string, EmailStatus>();
  private rateLimitWindow = 60000; // 1 minute
  private maxEmailsPerWindow = 5;
  private requestTimestamps: number[] = [];

  constructor(primary: EmailProvider, secondary: EmailProvider) {
    this.primary = primary;
    this.secondary = secondary;
  }

  private checkRateLimit(): boolean {
    const now = Date.now();
    this.requestTimestamps = this.requestTimestamps.filter(ts => now - ts < this.rateLimitWindow);
    if (this.requestTimestamps.length >= this.maxEmailsPerWindow) {
      return false;
    }
    this.requestTimestamps.push(now);
    return true;
  }

  private async retryWithExponentialBackoff(
    provider: EmailProvider,
    email: EmailRequest,
    retries: number
  ): Promise<boolean> {
    let delay = 500;
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const result = await provider.send(email);
        if (result) return true;
      } catch (err) {}
      await new Promise((res) => setTimeout(res, delay));
      delay *= 2;
    }
    return false;
  }

  async sendEmail(email: EmailRequest): Promise<EmailStatus> {
    if (this.sentEmails.has(email.idempotencyKey)) {
      return this.sentEmails.get(email.idempotencyKey)!;
    }

    if (!this.checkRateLimit()) {
      const status: EmailStatus = {
        provider: "RateLimiter",
        status: "FAILED",
        attempts: 0,
        timestamp: Date.now(),
        error: "Rate limit exceeded",
      };
      this.sentEmails.set(email.idempotencyKey, status);
      return status;
    }

    const successPrimary = await this.retryWithExponentialBackoff(this.primary, email, 3);
    if (successPrimary) {
      const status: EmailStatus = {
        provider: this.primary.name,
        status: "SUCCESS",
        attempts: 1,
        timestamp: Date.now(),
      };
      this.sentEmails.set(email.idempotencyKey, status);
      return status;
    }

    const successSecondary = await this.retryWithExponentialBackoff(this.secondary, email, 3);
    const finalStatus: EmailStatus = {
      provider: this.secondary.name,
      status: successSecondary ? "SUCCESS" : "FAILED",
      attempts: 4,
      timestamp: Date.now(),
      error: successSecondary ? undefined : "Both providers failed",
    };
    this.sentEmails.set(email.idempotencyKey, finalStatus);
    return finalStatus;
  }
}
