// app.js

const express = require("express");
const cors = require("cors");

const authRoutes = require("./modules/auth/auth.routes");
const salaryRoutes = require("./modules/salary/salary.routes");
const expenseRoutes = require("./modules/expense/expense.routes");

const app = express();

// Middleware
app.use(cors()); // frontend ko allow karega
app.use(express.json()); // JSON body read karne ke liye

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/salary", salaryRoutes);
app.use("/api/expenses", expenseRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

module.exports = app;