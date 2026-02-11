const salaryService = require("./salary.service");

exports.saveSalary = async (req, res) => {
  try {
    console.log("User:", req.user);
    console.log("Body:", req.body);

    const userId = req.user.id;

    const result = await salaryService.addSalary(userId, req.body);

    res.status(201).json(result);
  } catch (error) {
    console.error("Salary Save Error:", error);
    res.status(500).json({ message: "Error saving salary" });
  }
};

exports.getSalary = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = await salaryService.getSalary(userId);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching salary" });
  }
};