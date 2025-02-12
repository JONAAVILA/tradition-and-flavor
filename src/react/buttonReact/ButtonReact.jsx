import './buttonReact.css'

const ButtonReact = ({children})=>{
    return(
        <button className='button_react' >
            {children}
        </button>
    )
}

export default ButtonReact