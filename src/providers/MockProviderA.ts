import { EmailProvider, EmailRequest } from "../types";

export class MockProviderA implements EmailProvider {
  name = "MockProviderA";

  async send(email: EmailRequest): Promise<boolean> {
    console.log(`[ProviderA] Sending email to ${email.to}`);
    await this.simulateDelay();
    return Math.random() < 0.7;
  }

  private async simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }
}
