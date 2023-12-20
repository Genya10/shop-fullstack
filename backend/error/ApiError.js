//Расширяем базовый класс Error и создаем собственные типы ошибок
class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
  // static функции - ф-ции, которые можно вызывать без создания объекта
  // можем обращаться на прямую к классу
  static badRequest(message) {
    return new ApiError(404, message);
    //возвращаем новый объек apierror
    //при замене return на throw ошибка будет отображаться на сервере
  }
  static internal(message) {
    return new ApiError(500, message);
  }
  static forbidden(message) {
    return new ApiError(403, message);
  }
}

module.exports = ApiError;
