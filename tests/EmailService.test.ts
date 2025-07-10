import { EmailService } from "../src/EmailService";
import { EmailProvider, EmailRequest } from "../src/types";

class AlwaysSuccessProvider implements EmailProvider {
  name = "AlwaysSuccess";
  async send(email: EmailRequest): Promise<boolean> {
    return true;
  }
}

class AlwaysFailProvider implements EmailProvider {
  name = "AlwaysFail";
  async send(email: EmailRequest): Promise<boolean> {
    return false;
  }
}

describe("EmailService", () => {
  const email: EmailRequest = {
    to: "test@example.com",
    subject: "Test Email",
    body: "Hello World",
    idempotencyKey: "test-key-123",
  };

  it("should send email successfully with primary provider", async () => {
    const service = new EmailService(new AlwaysSuccessProvider(), new AlwaysFailProvider());
    const result = await service.sendEmail(email);
    expect(result.status).toBe("SUCCESS");
    expect(result.provider).toBe("AlwaysSuccess");
  });

  it("should fallback to secondary provider on failure", async () => {
    const service = new EmailService(new AlwaysFailProvider(), new AlwaysSuccessProvider());
    const result = await service.sendEmail(email);
    expect(result.status).toBe("SUCCESS");
    expect(result.provider).toBe("AlwaysSuccess");
  });

  it("should return from idempotency cache", async () => {
    const service = new EmailService(new AlwaysSuccessProvider(), new AlwaysFailProvider());
    const first = await service.sendEmail(email);
    const second = await service.sendEmail(email);
    expect(second).toEqual(first); // cached result
  });
});
