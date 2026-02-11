// jwt.js

module.exports = {
    secret: process.env.JWT_SECRET,
    expiresIn: "1d", // token 1 day valid rahega
  };