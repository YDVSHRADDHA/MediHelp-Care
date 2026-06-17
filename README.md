# MediHelp 🏥

**MediHelp** is a production-grade, community-driven healthcare redistribution platform. Our mission is to reduce medicine waste and improve access to essential medications through secure, verified donations.

---

## ✨ Features

- **AI-Powered Medicine Scan**: Automatically extract expiry dates and dosage from photos.
- **Verification Workflow**: Multi-layered safety checks by volunteer pharmacists.
- **Smart Discovery**: Geolocation-based search for medications in your community.
- **Role-Based Dashboards**: Tailored experiences for Donors, Patients, NGOs, and Pharmacists.
- **Trust & Safety**: Integrated reputation scores and verified NGO partnerships.

## 🚀 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion.
- **State Management**: Zustand, TanStack Query.
- **Backend**: Next.js API Routes, Node.js.
- **Database**: MongoDB (Mongoose).
- **Security**: RBAC, JWT, Audit Logging.

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js 18+ 
- MongoDB Atlas account

### 2. Installation
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```
Then, update the `MONGODB_URI` with your connection string.

### 4. Run Development Server
```bash
npm run dev
```

## 🏗️ Architecture
The project follows a modular service-oriented architecture:
- `src/app`: Next.js App Router (Pages & API).
- `src/components`: UI components and page sections.
- `src/models`: Mongoose schemas.
- `src/lib`: Shared utilities and database connection.

## 📄 License
This project is for community impact and health-tech innovation.

---
Built with ❤️ for a healthier world.
