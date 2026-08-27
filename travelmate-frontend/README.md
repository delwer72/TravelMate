# ✈️ TravelMate

TravelMate is a modern travel management and trip planning web application built with **Next.js**, **React**, **Tailwind CSS**, and **Better Auth**.

The platform helps travelers explore destinations, view travel packages, create accounts, and manage their travel experience through personalized dashboards.

---

## 🌐 Live Demo

🔗 **Live Website:** Coming Soon

🔗 **GitHub Repository:** https://github.com/delwer72/TravelMate

---

## 📸 Project Overview

TravelMate provides a modern and responsive travel experience where users can:

- Explore travel destinations
- Browse travel packages
- Create an account
- Sign in securely
- Sign in with Google
- Select a user plan
- Access personalized dashboards
- Manage their travel activities
- Navigate easily across desktop and mobile devices

---

## 🚀 Features

### 👤 Authentication

- User registration
- User login
- Logout functionality
- Google authentication
- Better Auth integration
- Session management
- Protected user experience
- Redirect support after authentication

### 🌍 Destinations

- Browse travel destinations
- Destination information
- Attractive destination cards
- Responsive destination layout
- Travel-focused UI

### 🎒 Travel Packages

- Browse available travel packages
- Package details
- Travel package navigation
- User-friendly package interface

### 📊 Dashboard

TravelMate supports different dashboard experiences:

- Guest Dashboard
- User Dashboard
- Admin Dashboard

The dashboard system is designed to provide different functionality based on the user's role.

### 📱 Responsive Design

The application is responsive and optimized for:

- Desktop
- Laptop
- Tablet
- Mobile

### 🎨 Modern UI

- Tailwind CSS
- HeroUI
- Responsive navigation
- Modern cards
- Gradient buttons
- Dark-mode friendly design
- Clean authentication pages
- Mobile navigation menu

---

## 🛠️ Technologies Used

### Frontend

- **Next.js 16**
- **React 19**
- **JavaScript / JSX**
- **Tailwind CSS**
- **HeroUI**
- **React Icons**
- **Gravity UI Icons**

### Authentication

- **Better Auth**
- Google OAuth

### State Management

- Redux Toolkit
- React Redux

### API / HTTP

- Axios
- REST API

### Development Tools

- Git
- GitHub
- VS Code
- ESLint
- npm

### Deployment

- Vercel

---

## 📁 Project Structure

```text
TravelMate/
│
├── travelmate-frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── about/
│   │   │   ├── auth/
│   │   │   │   ├── signin/
│   │   │   │   └── signup/
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   ├── admin/
│   │   │   │   ├── guest/
│   │   │   │   └── user/
│   │   │   │
│   │   │   ├── destinations/
│   │   │   ├── Packages/
│   │   │   └── home/
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   └── ...
│   │   │
│   │   ├── lib/
│   │   │   └── auth-client
│   │   │
│   │   └── ...
│   │
│   ├── package.json
│   ├── next.config.ts
│   ├── postcss.config.mjs
│   └── ...
│
└── README.md