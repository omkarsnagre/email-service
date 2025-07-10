# 📧 Resilient Email Service (TypeScript)

This is a resilient email sending service built in TypeScript. It uses two mock email providers with retry logic, fallback mechanism, rate limiting, and idempotency. The goal is to ensure reliable email delivery with basic fault tolerance mechanisms.

---

## ✅ Features

- ✅ **Retry mechanism** with exponential backoff
- ✅ **Fallback** to secondary provider on failure
- ✅ **Idempotency** to prevent duplicate sends
- ✅ **Rate limiting** (max 5 emails/minute)
- ✅ **Status tracking** per request
- ✅ Optional utilities:
  - Circuit breaker
  - Logging

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/omkarsnagre/email-service.git
cd email-service
