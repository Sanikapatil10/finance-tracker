// server.js

// app ko import kar rahe hain (Express app)
const app = require("./app");

// .env file load karne ke liye
require("dotenv").config();

// Port environment se ya default 5000
const PORT = process.env.PORT || 5000;

// Server start karna
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});