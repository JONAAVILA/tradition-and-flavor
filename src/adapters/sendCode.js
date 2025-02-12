import axios from "axios"
import {
    VITE_PRODUCTION,
    VITE_URL_SEND_CODE_PROD,
    VITE_URL_SEND_CODE_DEV
} from './envAdapters'

export default async function sendCode (){

    const URL = VITE_PRODUCTION === 'true' ? VITE_URL_SEND_CODE_PROD : VITE_URL_SEND_CODE_DEV

    const res = await axios.post(URL,{},{
        withCredentials:true
    })
    console.log('sendCode:',res.data)
    return res.data
}