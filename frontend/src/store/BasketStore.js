import { makeAutoObservable } from "mobx";
import { cleanBasketOnServer } from "../http/basketAPI";

export class BasketStore {
    constructor(){
        this._basket =[] 
        makeAutoObservable(this)
    }

    setBasket(basket){
        this._basket = basket;
        console.log("new basket111",basket);
          //localStorage.setItem("basket",JSON.stringify(basket));
    }
    deleteBasket(){
        this._basket = []
    }

    get basket(){
        return this._basket
    }

    removeFromBasket(productId){
        console.log("Remove item111 id:",productId)
        this._basket = this._basket.filter(item => item.id !== productId)
        localStorage.setItem("basket",JSON.stringify(this._basket))
        console.log("Update baskets:", this._baskets)
    }
    async clearBasket(productId){
        try{
            console.log("Before clean1")
            await cleanBasketOnServer(productId)
            console.log('After clean11: ' + productId)
             //localStorage.removeItem("basket");     
        }catch(error){
            alert('Ошибка при удалении!',error)
        }
    }
}

