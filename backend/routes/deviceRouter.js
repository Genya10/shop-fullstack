const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/deviceController");
const checkRole = require("../middleware/checkMiddleWare")

router.post("/",checkRole("ADMIN"), DeviceController.create);
router.get("/", DeviceController.getAll);
router.get("/:id", DeviceController.getOne);

module.exports = router;
