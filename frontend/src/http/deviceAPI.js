import { $authHost,$host } from "./indexHttp";
import { jwtDecode} from 'jwt-decode';

export const createType = async(type)=>{
    const {data} = await $authHost.post('api/type',type)
    return data
}

export const fetchTypes = async()=>{
    const {data} = await $host.post('api/type')
    return data
}
