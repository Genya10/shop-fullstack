import {makeAutoObservable} from "mobx";
import { cleanBasketOnServer } from "../http/deviceAPI";

export class DeviceStore {
constructor(){
    this._types=[]   
    this._brands=[]       
    this._devices =[]
    this._baskets =[]      
    this._selectedType={}
    this._selectedBrand={}
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
    //Загрузка данных из localStorage
    const storedBasket = localStorage.getItem("basket");
    this._baskets = storedBasket ? JSON.parse(storedBasket):[]
}

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    setBasket(basket){
        console.log("new basket",basket)
        this._baskets = basket
    }
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }
    deleteBasket(){
        this._baskets=[];
    }
  // computed функции вызываются в том случае, если переменная, которая
  //используется внутри была изменена
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get basket(){
        return this._baskets
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
    removeFromBasket(productId){
        console.log("Remove item id:",productId)
        this._baskets = this._baskets.filter(item => item.id !== productId)
        localStorage.setItem("basket",JSON.stringify(this._baskets))
        console.log("Update baskets:", this._baskets)
    }
    async clearBasket(){
        try{
            console.log('Before clean')
            await cleanBasketOnServer()
            console.log('After clean')
            localStorage.clear();
            //localStorage.removeItem("basket");      
    }catch (error){
        alert('Ошибка при удалении',error)
    }
 }
}