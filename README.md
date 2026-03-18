# 🎓 EduTrack – Full Stack Student & Batch Management System

EduTrack is a full stack web application designed to manage student batches efficiently. It provides REST APIs for backend operations and a modern React-based frontend for user interaction.

---

## 🚀 Features

- 📦 Create, update, and delete batches
- 📋 View all batch details
- 💰 Manage course fees
- 🔄 RESTful API integration
- 🌐 Full stack architecture (Spring Boot + React)

---

## 🛠️ Tech Stack

### Backend:
- Java
- Spring Boot
- MongoDB

### Frontend:
- React.js
- HTML, CSS, JavaScript

### Tools:
- Postman (API testing)
- Git & GitHub

---

## 📂 Project Structure
```
EduTrack/
│
├── edutrack/ → Spring Boot Backend
└── edutrack-ui/ → React Frontend
```

---

## ⚙️ Installation & Setup

### 🔹 Backend Setup

```bash
cd edutrack
mvn spring-boot:run
👉 Runs on: http://localhost:8080


🔹 Frontend Setup
cd edutrack-ui
npm install
npm start

👉 Runs on: http://localhost:3000
```
## 🔗 API Endpoints

| Method | Endpoint           | Description        |
|--------|-------------------|--------------------|
| GET    | /Batches          | Get all batches    |
| POST   | /Batches          | Create batch       |
| PUT    | /Batches/id/{id}  | Update batch       |
| DELETE | /Batches/id/{id}  | Delete batch       |

## 📸 UI

### 🖥️ Application UI
<img src="Output.jpeg" width="700"/>

💡 Future Improvements

🔐 Authentication system

📊 Dashboard analytics

📱 Responsive UI

📧 Email notifications

👩‍💻 Author

Pallavi

