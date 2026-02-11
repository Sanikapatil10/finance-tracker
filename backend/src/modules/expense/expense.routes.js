const express = require("express");
const router = express.Router();

const expenseController = require("./expense.controller");
const { verifyToken } = require("../../middleware/auth.middleware");

router.post("/", verifyToken, expenseController.addExpense);
router.get("/", verifyToken, expenseController.getExpenses);
router.delete("/:id", verifyToken, expenseController.deleteExpense);

module.exports = router;