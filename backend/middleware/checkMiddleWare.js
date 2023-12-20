//для проверки роли пользователя
const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];//bearer получаем токен по индексу 1
      if (!token) {
        console.log('You not auth')
        return res.status(401).json({ message: "Не авторизован" });
      }
      //декодируем токен
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "Нет доступа" });
      }
        //   к запросу добавляем поле user с данными, которые вытащили из токена
      //   и во всех функциях этот юзер будет доступен
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: "Не авторизован" });
    }
  };
};
