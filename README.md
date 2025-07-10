# 📧 Resilient Email Sending Service

This is a resilient and fault-tolerant email sending service built with **TypeScript**. It simulates sending emails using two mock providers and incorporates best practices like retries, fallback, rate limiting, and idempotency.

## ✅ Features

- ✅ Retry mechanism with exponential backoff
- ✅ Fallback to secondary provider if primary fails
- ✅ Idempotent email sending (prevents duplicate sends)
- ✅ Basic rate limiting (max 5 emails per minute)
- ✅ Email send status tracking
- ✅ Unit tests with Jest

### 💡 Bonus Features
- ✅ Circuit breaker utility
- ✅ Simple logging system
- ✅ Queue-ready structure for future scaling

---

## 🏗️ Tech Stack

- Language: **TypeScript**
- Test Framework: **Jest**
- Mocked Email Providers: `MockProviderA` and `MockProviderB`

---

## 📁 Folder Structure
<pre> ``` 📁 email-service/ ├── src/ │ ├── index.ts # Entry point │ ├── EmailService.ts # Main service logic │ ├── types.ts # Type definitions │ ├── providers/ │ │ ├── MockProviderA.ts # Primary mock provider │ │ └── MockProviderB.ts # Secondary mock provider │ └── utils/ │ ├── CircuitBreaker.ts # Optional bonus utility │ ├── Logger.ts # Optional logging utility │ ├── RateLimiter.ts # Rate limiter helper │ └── StatusTracker.ts # Status tracking helper ├── tests/ │ └── EmailService.test.ts # Unit tests ├── jest.config.js ├── package.json ├── tsconfig.json └── .gitignore ``` </pre>
