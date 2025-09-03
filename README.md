# 💸 CoinPay — Mobile Finance App

**CoinPay** is a modern, dark-themed mobile finance app built with **React Native** and **Expo Router**. The app offers features like personal info setup, identity verification, card management, money transfer, QR payments, transaction tracking, support chat, and more — all wrapped in a sleek UI inspired by mobile banking.

Chech the figma design: https://www.figma.com/design/FHpsCUXuQuURQf58XprBtY/Coinpay-Fintech-Finance-Mobile-App-UI-kit--Community---Community-?node-id=1-20069&t=URzGZvdVCgPfYJtk-0
---

## 🚀 Features

- 🔐 **Authentication & Setup**
  - Welcome screen
  - Personal info & address input
  - Country, email, and passcode setup

- 🪪 **ID Verification**
  - Document scan
  - Selfie capture
  - Progress tracker

- 💳 **Card Management**
  - Add cards
  - List cards
  - Verify via code

- 💸 **Send & Receive**
  - Choose recipients
  - Set amount & purpose
  - Use QR code for fast transfers

- 📊 **Dashboard**
  - Total balance
  - Transaction categories
  - Spending analysis

- 🙋‍♂️ **Support**
  - 24/7 chatbot
  - Real-time conversation UI

- 👤 **Profile**
  - User info
  - Dark mode toggle
  - Data privacy & settings

- 🚫 **Error Handling**
  - 404 screen with redirect to homepage

---

## 🧱 Tech Stack

- **React Native**
- **Expo Router**
- **TypeScript**
- **Feather Icons**
- **Custom Components** & **StyleSheet** styling

---

## 📁 Folder Structure

```bash
app/
│
├── (screens)/
│   ├── welcome.tsx
│   ├── login.tsx
│   ├── personal-info.tsx
│   ├── address.tsx
│   ├── country.tsx
│   ├── email.tsx
│   ├── pin-setup.tsx
│   ├── homepage.tsx
│   ├── verification/
│   │   ├── verify-id.tsx
│   │   ├── take-selfie.tsx
│   │   ├── verification-status.tsx
│   ├── card/
│   │   ├── add-card.tsx
│   │   ├── card-list.tsx
│   │   ├── verify-card.tsx
│   ├── send/
│   │   ├── recipient.tsx
│   │   ├── send-amount.tsx
│   │   ├── purpose.tsx
│   │   ├── review.tsx
│   │   ├── success.tsx
│   │   ├── qr-send.tsx
│   ├── receive/
│   │   ├── request.tsx
│   │   ├── receive-amount.tsx
│   │   ├── purpose.tsx
│   │   ├── recipient.tsx
│   │   ├── qr-receive.tsx
│   ├── spending.tsx
│   ├── support/
│   │   ├── support.tsx
│   │   ├── chat.tsx
│   ├── profile.tsx
│   ├── not-found.tsx
│
├── assets/
│   └── images/
│       ├── welcome/
│       ├── acc-verification/
│       ├── card-list/
│       ├── send/
│       ├── receive/
│       ├── support/
│       └── not-found/
│
├── components/
├── constants/
├── utils/
```
