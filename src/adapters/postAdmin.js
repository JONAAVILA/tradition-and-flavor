import axios from "axios";
import {
    VITE_PRODUCTION,
    VITE_URL_ADMIN_SIGNIN_PROD,
    VITE_URL_ADMIN_SIGNIN_DEV
} from './envAdapters'

export default async function postAdmin(values){
    
    const URL = VITE_PRODUCTION === 'true' ? VITE_URL_ADMIN_SIGNIN_PROD : VITE_URL_ADMIN_SIGNIN_DEV
    console.log(URL)

    try {
        const admin = {
            name:values.name,
            surname:values.surname,
            email:values.email,
            password:values.password
        }
    
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        console.log('postAdminLogin:',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}