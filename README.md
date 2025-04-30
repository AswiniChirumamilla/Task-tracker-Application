# Task-tracker-Application
## Technologies Used
- React, Express, MongoDB, JWT

## Setup

### Backend
cd backend npm install npm run dev


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
