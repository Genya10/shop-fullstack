const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkMiddleWare");

router.post("/",checkRole("ADMIN") ,BrandController.create);
router.get("/", BrandController.getAll);

module.exports = router;
