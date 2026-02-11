// auth.service.js

const db = require("../../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../../config/jwt");

// REGISTER
exports.registerUser = async ({ name, email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password required");
  }

  // Check existing user
  const [existing] = await db.promise().query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existing.length > 0) {
    throw new Error("User already exists");
  }

  // Password hash
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user
  await db.promise().query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  return { message: "User registered successfully" };
};

// LOGIN
exports.loginUser = async ({ email, password }) => {
  const [users] = await db.promise().query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (users.length === 0) {
    throw new Error("User not found");
  }

  const user = users[0];

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  // JWT generate
  const token = jwt.sign({ id: user.id }, secret, { expiresIn });

  return {
    message: "Login successful",
    token,
  };
};