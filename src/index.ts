import { EmailService } from "./EmailService";
import { MockProviderA } from "./providers/MockProviderA";
import { MockProviderB } from "./providers/MockProviderB";

const primary = new MockProviderA();
const secondary = new MockProviderB();
const service = new EmailService(primary, secondary);

(async () => {
  const response = await service.sendEmail({
    to: "test@example.com",
    subject: "Hello",
    body: "This is a test email.",
    idempotencyKey: "unique-key-123",
  });

  console.log("Email status:", response);
})();
