const {Device,BasketDevice}= require("../models/models")

class BasketController {

    async addBasket(req,res,next){
        const user = req.user 
        const {deviceId} = req.body
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
       // return res.json({id:basket.id,deviceId:basket.deviceId})
        return res.json(basket)
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include:{
            model:Device
        }, where: {basketId:id}})
        return res.json(basket)
    }

  async clearBasket(req, res, next) {
      const user = req.user;
      try {
        await BasketDevice.destroy({ where: { basketId: user.id } });
        return res.json({ message: 'Корзина успешно очищена' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ошибка при очистке корзины' });
      }
    }
}

module.exports = new BasketController();