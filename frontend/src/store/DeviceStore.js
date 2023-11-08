import {makeAutoObservable} from "mobx";

export class DeviceStore {
    constructor(){
       this._types=[
        {id:1,name:'Fridge'},
        {id:2,name:'Smartphone'}
       ]
       this._brands=[
        {id:1,name:'Samsung'},
        {id:2,name:'Apple'}
       ]
       this._devices =[
        {id:1,name:"Smartphone",price:12000,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:2,name:"Smartphone",price:12000,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:3,name:"Smartphone",price:12000,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:4,name:"Smartphone",price:12000,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
    ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setIsUser(devices){
        this._devices = devices
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}