export interface EmailRequest {
  to: string;
  subject: string;
  body: string;
  idempotencyKey: string;
}

export interface EmailStatus {
  provider: string;
  status: 'SUCCESS' | 'FAILED';
  attempts: number;
  timestamp: number;
  error?: string;
}

export interface EmailProvider {
  name: string;
  send(email: EmailRequest): Promise<boolean>;
}
