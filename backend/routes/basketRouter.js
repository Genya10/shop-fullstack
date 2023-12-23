const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleWare')

router.get('/',authMiddleware, basketController.getBasketUser)
router.post('/',authMiddleware, basketController.addBasket)
router.delete('/clear/:id', authMiddleware, basketController.clearBasket); 

module.exports = router;