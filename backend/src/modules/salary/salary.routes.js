const express = require("express");
const router = express.Router();

const salaryController = require("./salary.controller");
const { verifyToken } = require("../../middleware/auth.middleware");

router.post("/", verifyToken, salaryController.saveSalary);
router.get("/", verifyToken, salaryController.getSalary);
console.log("verifyToken:", verifyToken);

module.exports = router;