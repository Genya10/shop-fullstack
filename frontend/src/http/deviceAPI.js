import { $authHost,$host } from "./indexHttp";
import axios from "axios";

export const createType = async(type)=>{
    const {data} = await $authHost.post('api/type',type)
    return data
}
export const fetchTypes = async()=>{
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async(brand)=>{
    const {data} = await $authHost.post('api/brand',brand)
    return data
}
export const fetchBrands = async()=>{
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async(device)=>{
    const {data} = await $authHost.post('api/device',device)
    return data
}
export const fetchDevices = async(typeId,brandId,page,limit=5)=>{
    const {data} = await $host.get('api/device', {params:{
        typeId,brandId,page,limit
    }})
    return data
}
export const fetchOneDevice = async(id)=>{
    const{data}= await $host.get('api/device/'+ id)
    return data
}

export const addBasket = async(deviceId) => {
    const {response} = await $authHost.post('api/basket',deviceId)
    return response
}
export const getBasket = async ()=>{
    const {data} = await $authHost.get('api/basket')
    return data
}

// const API_DELETE_BASKET = "http://localhost:5000";

 export const cleanBasketOnServer = async ()=>{
    try{
        const response = await axios.delete('http://localhost:5000/api/basket/clear');
        return response.data
    }catch(error){
        throw new Error("Ошибка при удалении на сервере",error)
    }
 }