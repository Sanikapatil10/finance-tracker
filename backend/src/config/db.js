// db.js

const mysql = require("mysql2");
require("dotenv").config();

// MySQL connection create
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect
db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("MySQL connected");
  }
});

module.exports = db;