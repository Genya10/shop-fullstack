//для считывания с файла переменных окружения
require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
//для создания таблиц
const models = require("./models/models");
//для отправки fetch запросов с браузера
const cors = require("cors");
//для загрузки файлов
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
// middleware который работает с ошибками , всегда регистрируется в конце
//он последний в цепочке, поэтому мы не вызываем в нем ф-цию next
//если нет id,то будет ответ от сервера в виде ошибки в html,а middleware обрабатывает 
//его и делает на выходе json, который мы потом можем обработать на странице,
//так же сохраняет код ошибки, сгенерированный сервером
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log("Error during server start:", e);
  }
};

start();
