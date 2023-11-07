const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkMiddleWare')

router.post('/',checkRole("Admin"),TypeController.create)
router.get('/',TypeController.getAll)


module.exports = router