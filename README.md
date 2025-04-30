# Task-tracker-Application
## Technologies Used
- React, Express, MongoDB, JWT
# 🧩 Task Tracker Application

A full-stack Task Tracker web application that allows multiple users to sign up, log in, manage up to 4 projects each, and track tasks under those projects. This project is built using **ReactJS**, **ExpressJS**, **MongoDB**, and **JWT** for authentication.

---

## 🌐 Live Demo

> 🚀 _You can host this project on Render, Vercel, or Netlify. Add your live link here._

---

## ⚙️ Features

- ✅ User Signup and Login (JWT Authentication)
- 📁 Project Management (limit: 4 per user)
- ✅ Task CRUD (Create, Read, Update, Delete)
- 📊 Track task status: `Pending`, `In Progress`, `Completed`
- 📅 View creation and completion dates
- 🔒 Secure API with JWT and password hashing
- 🧩 Clean and modular codebase
## Setup

### Backend
cd backend npm install npm run dev

![ChatGPT Image Apr 30, 2025, 11_05_53 AM](https://github.com/user-attachments/assets/a82e83cd-bca5-43bc-903a-091c09d619de)
![Uploading ChatGPT Image Apr 30, 2025, 11_08_00 AM.png…]()


Create `.env`:
MONGO_URI=mongodb://localhost:27017/tasktracker PORT=5000 JWT_SECRET=your_secret_key

### Frontend
cd frontend npm install npm start

## Deployment
- Host backend on Render/Heroku
- Host frontend on Vercel/Netlify

| Feature                | Result                                                                 |
|------------------------|------------------------------------------------------------------------|
| ✅ Signup/Login         | User can register & log in with JWT auth                              |
| 📁 Create Projects     | Each user can create max 4 projects                                   |
| ✅ Add Tasks           | Create tasks under each project                                       |
| ✏️ Edit/Delete Tasks   | Tasks can be updated (status, text) or deleted                        |
| 📊 Status Tracking     | Tasks show "Pending", "In Progress", or "Completed"                   |
| 🌐 Deployment Ready    | Frontend and backend separated and ready to deploy                    |
