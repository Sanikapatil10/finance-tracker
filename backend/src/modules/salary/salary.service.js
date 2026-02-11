const db = require("../../config/db");

// Add salary
const addSalary = async (userId, { amount, month, year }) => {
  if (!amount || !month || !year) {
    throw new Error("All fields required");
  }

  await db.promise().query(
    "INSERT INTO salary (user_id, amount, month, year) VALUES (?, ?, ?, ?)",
    [userId, amount, month, year]
  );

  return { message: "Salary added successfully" };
};

// Get salary
const getSalary = async (userId) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM salary WHERE user_id = ? ORDER BY created_at DESC",
    [userId]
  );

  return rows;
};

module.exports = {
  addSalary,
  getSalary,
};