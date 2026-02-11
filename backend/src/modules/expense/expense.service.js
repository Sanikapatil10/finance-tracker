const db = require("../../config/db");

// Add expense
exports.addExpense = async (userId, { title, amount, category, date }) => {
  if (!title || !amount || !category || !date) {
    throw new Error("All fields required");
  }

  await db.promise().query(
    "INSERT INTO expenses (user_id, title, amount, category, date) VALUES (?, ?, ?, ?, ?)",
    [userId, title, amount, category, date]
  );

  return { message: "Expense added successfully" };
};

// Get expenses
exports.getExpenses = async (userId) => {
  const [rows] = await db.promise().query(
    "SELECT * FROM expenses WHERE user_id = ? ORDER BY date DESC",
    [userId]
  );

  return rows;
};

// Delete expense (user specific)
exports.deleteExpense = async (userId, expenseId) => {
  await db.promise().query(
    "DELETE FROM expenses WHERE id = ? AND user_id = ?",
    [expenseId, userId]
  );

  return { message: "Expense deleted successfully" };
};