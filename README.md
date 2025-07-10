# 📧 Resilient Email Sending Service

![GitHub Repo Stars](https://img.shields.io/github/stars/omkarsnagre/email-service?style=social)  
📌 **Technologies:** TypeScript, Node.js, Jest, ts-node, PowerShell  

---

## 🚀 Project Overview

This project is a **resilient email sending service** that simulates sending emails using two mock providers. Built with **TypeScript**, it features retry logic, fallback handling, rate limiting, and idempotent request handling — ensuring high reliability even under failure conditions.

---

## 🔹 Features

✅ **Retry with Exponential Backoff** – Automatically retries failed sends with increasing delay.  
✅ **Fallback Support** – Automatically uses a secondary provider if the primary one fails.  
✅ **Idempotent Email Sending** – Prevents duplicate emails using unique idempotency keys.  
✅ **Rate Limiting** – Limits to a maximum of 5 emails per minute.  
✅ **Status Tracking** – Tracks every email attempt, provider used, success/failure, and timestamps.  
✅ **Unit Testing with Jest** – All critical features covered with unit tests.  

---

## 📊 Impact & Results

📌 **Zero duplicate emails** due to strict idempotency check.  
📌 **Improved reliability** with retry + fallback strategy.  
📌 **Simplified testing** using mock providers and Jest.  
📌 **Ready for scale** with modular utilities (circuit breaker, logger, status tracker).

---

## 🛠 Installation & Setup

### 🔧 Clone the Repository
```bash
git clone https://github.com/omkarsnagre/email-service.git
cd email-service
```

### 📦 Install Dependencies
```bash
npm install
```

### ▶️ Run the Service
```bash
npm run start
```

### 🧪 Run Tests
```bash
npm run test
```

---

## 📁 Project Structure

- `src/EmailService.ts` – Core email logic with retry, fallback, rate limit, idempotency  
- `src/providers/` – MockProviderA & MockProviderB with simulated success rates  
- `src/utils/` – Optional helpers (CircuitBreaker, Logger, etc.)  
- `tests/` – Jest unit test suite  

---

## 📩 Contact

💻 Developed by **Omkar Nagre**  
📧 Email: [omkarnagre777@gmail.com](mailto:omkarnagre777@gmail.com)  
🔗 GitHub: [github.com/omkarsnagre](https://github.com/omkarsnagre)

---

## 📜 License

This project is open-source and available for educational use.
