import {makeAutoObservable} from "mobx";

export class DeviceStore {
    constructor(){
       this._types=[]   
       this._brands=[]       
       this._devices =[]      
       this._selectedType={}
       this._selectedBrand={}
        makeAutoObservable(this)
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
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
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
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}
/*
         {id:1,name:'Fridge'},
        {id:2,name:'Smartphone'},
        {id:3,name:'Laptop'},
        {id:4,name:'Televisions'},

        {id:1,name:'Samsung'},
        {id:2,name:'Apple'},
        {id:3,name:'Huawey'},
        {id:4,name:'Lenovo'},   */
        /*
         {id:1,name:"Smartphone",price:12000,rating:5,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:2,name:"Smartphone",price:12000,rating:5,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:3,name:"Smartphone",price:12000,rating:5,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:4,name:"Smartphone",price:12000,rating:5,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:5,name:"Smartphone",price:12000,rating:5,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
        {id:6,name:"Smartphone",price:12000,rating:5,img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomfy.ua%2Fsmartfon-xiaomi-redmi-note-12-8-256gb-sunrise-gold.html&psig=AOvVaw2RqqDyIpErOwyrNGbemPSC&ust=1699526947149000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCK-7SdtIIDFQAAAAAdAAAAABAo"},
         */