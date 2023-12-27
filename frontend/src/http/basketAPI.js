import { $authHost,$host } from "./indexHttp";

export const addBasket = async(deviceId) => {
    const {response} = await $authHost.post('api/basket',deviceId)
    return response
}
export const getBasket = async ()=>{
    const {data} = await $authHost.get('api/basket')
    return data
}

 export const cleanBasketOnServer = async (id)=>{
    try{
        const response = await $authHost.delete('http://localhost:5000/api/basket/clear/'+id);      
        console.log('Answer from server:',response,id)  
        return response.data
    }catch(error){
        throw new Error("Ошибка при удалении на сервере",error)
    }
 }