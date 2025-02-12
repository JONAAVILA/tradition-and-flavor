import CloseIcon from '../../icons/closeIcon/CloseIcon'
import './alert.css'

const Alert = ({children,handleAlert})=>{
    return(
        <div
            onClick={handleAlert}
            className='alert_container'
        >
            <div onClick={handleAlert} >
                <CloseIcon/>
            </div>
            <p>{children}</p>
        </div>
    )
}

export default Alert