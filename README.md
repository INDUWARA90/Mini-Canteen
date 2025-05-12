# 🥪 Campus Canteen Backend API

This is a simple Express.js backend for managing a **campus canteen system**, including **users**, **food items**, and **orders**. Built using Node.js, Express, and MongoDB with Mongoose — ideal for beginners learning RESTful API development.

---

## 📦 Features

- 🔐 User management (student, staff, admin)
- 🍔 Food item handling with availability
- 🧾 Place and manage orders
- 🛠️ Full CRUD API (Create, Read, Update, Delete)
- 🌐 MongoDB Atlas + Mongoose ODM
- 🔒 `.env` for config management

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📁 Folder Structure

project-root/ <br>
├── models/   # Mongoose Schemas <br>
├── controllers/   # API logic <br>
├── routes/   # Route definitions <br>
├── .env   # Environment variables <br>
├── index.js   # Entry point <br>
└── README.md <br>


---

## 📬 API Endpoints

Users <br>
GET /api/users <br>
POST /api/users <br>
PUT /api/users/:id <br>
DELETE /api/users/:id <br>
<br>
Food <br>
GET /api/foods <br>
POST /api/foods <br>
PUT /api/foods/:id <br>
DELETE /api/foods/:id <br>
<br>
Orders <br>
GET /api/orders <br>
POST /api/orders <br>
PUT /api/orders/:id <br>
DELETE /api/orders/:id <br>



