import { $authHost,$host } from "./indexHttp";
import { jwtDecode} from 'jwt-decode';

export const registration = async(email,password)=>{
    const {data} = await $host.post('api/user/registration',{email,password,role:'ADMIN'})
    localStorage.setItem('token',data.token)
    return jwtDecode(data.token)
}

export const login = async(email,password)=>{
    const {data} = await $host.post('api/user/login',{email,password})
    localStorage.setItem('token',data.token)
    return jwtDecode
}

export const check = async()=>{
    const response = await $authHost.get('api/user/auth')
    return response
}
