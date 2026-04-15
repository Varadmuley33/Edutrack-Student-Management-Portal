# 🚀 EduTrack – Student & Batch Management System

EduTrack is a full stack web application designed to manage student batches efficiently. It provides a robust backend using Spring Boot and a responsive frontend built with React.

---

## ✨ Features

* Create, update, and delete batch records
* View all batches in an organized layout
* Manage batch fees
* REST API-based communication
* Clean and user-friendly interface

---

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* MongoDB

### Frontend

* React.js
* HTML, CSS, JavaScript

### Tools

* Postman
* Git & GitHub

---

## 📂 Project Structure

EduTrack/
│
├── edutrack/
│   ├── src/main/java/com/edu/edutrack/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   └── model/
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── pom.xml
│   └── mvnw / mvnw.cmd
│
├── edutrack-ui/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md

---

## ▶️ How to Run the Project

### 🔹 Prerequisites

Make sure you have the following installed:

* Java (JDK 17 or above)
* Node.js and npm
* MongoDB (running on localhost:27017)
* IntelliJ IDEA or any Java IDE
* Postman (for API testing)

---

### 🔹 Backend Setup (Spring Boot)

1. Open the project in IntelliJ IDEA
2. Navigate to the `edutrack` folder
3. Open the main class (`EdutrackApplication.java`)
4. Click on Run ▶️

OR run using terminal:

cd edutrack
mvn spring-boot:run

Backend runs on: http://localhost:8080

---

### 🔹 Using Backend Only (Without Frontend)

If you are not running the frontend, you can directly test APIs using Postman.

1. Open Postman
2. Use the following endpoints:

* GET → http://localhost:8080/Batches
* POST → http://localhost:8080/Batches
* PUT → http://localhost:8080/Batches/id/{id}
* DELETE → http://localhost:8080/Batches/id/{id}

3. For POST and PUT requests, send JSON body:

{
"name": "Java Batch",
"fees": 5000
}

👉 This allows full interaction with backend without frontend.

---

### 🔹 Frontend Setup (React)

1. Open terminal inside `edutrack-ui` folder

cd edutrack-ui

2. Install dependencies:

npm install

3. Start the application:

npm start

Frontend runs on: http://localhost:3000

👉 The frontend automatically connects to backend APIs running on port 8080.

---

### 🔹 Full Stack Flow

* Start MongoDB
* Run backend (Spring Boot)
* Run frontend (React) **or** use Postman to test APIs if frontend is not available


👉 Then open browser and use the application normally

---

### 🔹 Database Setup (MongoDB)

* Install MongoDB
* Ensure MongoDB service is running
* Default connection: mongodb://localhost:27017

---

## 🔗 API Endpoints

GET     /Batches          → Fetch all batches
POST    /Batches          → Create a batch
PUT     /Batches/id/{id}  → Update batch
DELETE  /Batches/id/{id}  → Delete batch

---

## 🔮 Future Improvements

* User authentication system
* Dashboard with analytics
* Responsive UI enhancements
* Email notification system

---

## 👨‍💻 Author

Varad Muley
