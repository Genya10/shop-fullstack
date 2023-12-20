// экспортирует функцию , которая принимает параметрами ошибку,
// запрос, ответ, и функцию next,которая передает управлению
// следующему в цепочке мидлваре
const ApiError = require("../error/ApiError");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
     // возращаем ответ со статускодом, код будем получать из ошибки и 
     //сообщением, кот в эту ошибку поместили
    return res.status(err.status).json({ message: err.message });
  }
   // если не является инстансом apierror, то получаем непредвиденную ошибку
  return res.status(500).json({ message: "Это ошибка!" });
};
