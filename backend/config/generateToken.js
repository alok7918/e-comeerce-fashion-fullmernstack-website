
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'asdfghjklrsdtfgdg';

const generateToken = (id) => {
  return jwt.sign({ id }, SECRET_KEY, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;






