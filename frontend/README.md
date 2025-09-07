📖 README.md
# React.js & Node.js Login/Logout Flow (MongoDB Atlas)

## 🚀 Features
- User Registration (email, password)
- Login with sessions (cookie-based auth)
- Stay logged in until logout
- Logout & clear session
- MongoDB Atlas for persistent storage
  

🔐 Login & Logout Flow (React.js + Node.js + MongoDB Atlas)
📂 Project Structure
project-root/
│── backend/
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   ├── routes/
│   │   ├── auth.js
│   ├── package.json
│
│── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   ├── package.json
│
│── README.md

⚙️ Backend Setup (Node.js + Express + MongoDB Atlas)
Install dependencies
mkdir backend && cd backend
npm init -y
npm install express mongoose bcrypt express-session cookie-parser cors dotenv

## 🛠 Setup & Run
### Backend
```bash
cd backend
npm install
node server.js

Frontend
cd frontend
npm install
npm start

Database

MongoDB Atlas connection required. Set MONGO_URI in .env.

Deployment

Host backend on Render/Heroku.

Host frontend on Vercel/Netlify.

Update API URLs accordingly.

