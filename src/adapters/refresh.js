import axios from "axios"
import {
    VITE_PRODUCTION,
    VITE_URL_REFRESH_PROD,
    VITE_URL_REFRESH_DEV
} from './envAdapters'

export default async function refresh(password){
    
    const URL = VITE_PRODUCTION === 'true' ? VITE_URL_REFRESH_PROD : VITE_URL_REFRESH_DEV

    try {
        const value = {
            password:password
        }
        const res = await axios.post(URL,value,{
            withCredentials:true
        })
        console.log('refresh',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}