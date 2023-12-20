const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("Received token:", token)
    if (!token) {
      return res.status(401).json({ message: "Не авторизован1111111" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded user:", decoded)
    req.user = decoded
    next()
  } catch (e){
     console.error('Error verifying token:',e)
    res.status(401).json({ message: "Не авторизован22222222" });    
  }
};
