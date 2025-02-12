import axios from "axios";
import {
    VITE_PRODUCTION,

} from './envAdapters'

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_CONFIRM_EMAIL_PRODUCTION : VITE_URL_CONFIRM_EMAIL_DEV

export default async function confirmEmail(email){
    const res = await axios.post(URL,email,{
        withCredentials: true
    })
    console.log('email',res.data)
    return res.data
}