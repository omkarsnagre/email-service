# 📧 Resilient Email Sending Service

This is a resilient and fault-tolerant email sending service built using **TypeScript**. It simulates sending emails through two mock providers and handles failures gracefully with retry logic, fallback mechanisms, and rate limiting.

---

## ✅ Features

- 🔁 Retry mechanism with exponential backoff  
- 🔄 Fallback to secondary provider on failure  
- 🆔 Idempotency support (avoids duplicate sends)  
- 🚦 Rate limiting (max 5 emails per minute)  
- 📊 Email status tracking  
- 🧪 Unit tests using Jest  

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/omkarsnagre/email-service.git
cd email-service 
### 2. Install dependencies
  ```bash 
 npm install
### 3. Run the service
```bash
npm run start
### 4. Run tests
```bash
npm run test
### 🧪 Example Output
```bash
[ProviderA] Sending email to test@example.com
Email status: {
  provider: 'MockProviderA',
  status: 'SUCCESS',
  attempts: 1,
  timestamp: 1752132639989
}
###👨‍💻 Author
Built by Omkar Nagre
📜 License
This project is open-source and intended for educational and assessment use. give like this in one shot no breakdowns 

