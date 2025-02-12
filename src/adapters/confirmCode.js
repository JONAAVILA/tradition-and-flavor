import axios from "axios"
import {
    VITE_PRODUCTION,
    VITE_URL_CHECK_CODE_PROD,
    VITE_URL_CHECK_CODE_DEV
} from "./envAdapters"

export default async function confirmCode(code){

    const URL = VITE_PRODUCTION === 'true' ? VITE_URL_CHECK_CODE_PROD : VITE_URL_CHECK_CODE_DEV

    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   