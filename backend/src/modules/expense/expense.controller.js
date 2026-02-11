const expenseService = require("./expense.service");

// Add expense
exports.addExpense = async (req, res) => {
  try {
    const result = await expenseService.addExpense(req.user.id, req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get expenses
exports.getExpenses = async (req, res) => {
  try {
    const result = await expenseService.getExpenses(req.user.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const result = await expenseService.deleteExpense(
      req.user.id,
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};