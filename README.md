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

project-root/
├── models/ # Mongoose Schemas
├── controllers/ # API logic
├── routes/ # Route definitions
├── .env # Environment variables
├── index.js # Entry point
└── README.md


---

📬 API Endpoints

Users
GET /api/users
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id

Food
GET /api/foods
POST /api/foods
PUT /api/foods/:id
DELETE /api/foods/:id

Orders

GET /api/orders
POST /api/orders
PUT /api/orders/:id
DELETE /api/orders/:id



