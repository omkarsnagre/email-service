import { EmailProvider, EmailRequest } from "../types";

export class MockProviderB implements EmailProvider {
  name = "MockProviderB";

  async send(email: EmailRequest): Promise<boolean> {
    console.log(`[ProviderB] Sending email to ${email.to}`);
    await this.simulateDelay();
    return Math.random() < 0.9;
  }

  private async simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }
}
