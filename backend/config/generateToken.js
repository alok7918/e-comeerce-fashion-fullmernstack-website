// const jwt = require("jsonwebtoken");

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };

// module.exports = generateToken;

const jwt = require("jsonwebtoken");

// Replace 'YOUR_SECRET_KEY' with your actual secret key
const SECRET_KEY = 'asdfghjklrsdtfgdg';

const generateToken = (id) => {
  return jwt.sign({ id }, SECRET_KEY, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;






