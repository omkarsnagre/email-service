# 📧 Resilient Email Sending Service

This is a resilient and fault-tolerant email sending service built with **TypeScript**. It simulates sending emails using two mock providers and incorporates best practices like retries, fallback, rate limiting, and idempotency.

---

## ✅ Features

- 🔁 Retry mechanism with exponential backoff
- 🔄 Fallback to secondary provider if primary fails
- 🆔 Idempotent email sending (prevents duplicates)
- 🚦 Basic rate limiting (max 5 emails/minute)
- 📊 Status tracking of each email attempt
- 🧪 Unit tests with Jest

### 💡 Bonus Features
- 🔌 Circuit breaker utility (optional)
- 📄 Simple logger utility
- 🧵 Queue-ready structure for future scaling

---

## 🏗️ Tech Stack

- Language: **TypeScript**
- Runtime: **Node.js + ts-node**
- Testing: **Jest**
- Mocked Providers: `MockProviderA` and `MockProviderB`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/omkarsnagre/email-service.git
cd email-service
