import { useFormik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { validateCode } from '../../../../utils/validate'
import setStorage from '../../../../utils/setStorage'
import confirmCode from '../../../adapters/confirmCode'
import LoadIcon from '../../icons/loader/LoadIcon'
import refresh from '../../../adapters/refresh'
import ButtonReact from '../../buttons/buttonReact/ButtonReact'
import './validateCode.css'

const ValidateCode = ({
    password,
    email,
    handleModal,
    prod,
    urlCheckCodeProd,
    urlCheckCodeDev,
    urlRefreshProd,
    urlRefreshDev
})=>{
    const [error, setError] = useState('')
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            setloader(!loader)
            const code = values.code
            const resConfirm = await confirmCode(code,prod,urlCheckCodeProd,urlCheckCodeDev)
        
            if(resConfirm){
                const res = await refresh(password,prod,urlRefreshProd,urlRefreshDev)
                if(!res){
                    setStorage(res)
                    setError('código inválido')
                    return
                }
                setStorage(res)
                navigate('/admin')
            }
            setError('código inválido')
        }
    })

    return(
        <>
            <div className="code_container" onClick={handleModal} />
            <div className="code_box" >
                <h3>VALIDA TU CODIGO</h3>
                {email && <p className='code_subheading' >TE LO ENVIAMOS A <strong>{email}</strong>, REVISA LA CASILLA DE SPAN 😎</p>}
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <div className="code_box_input" >
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formik.values.code}
                            placeholder="nombre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="code_box_load" >
                            {loader && <LoadIcon size={35} />}
                        </div>
                    </div>
                    <div className="code_error" >
                        {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                        {error && <p>{error}</p>}
                    </div>
                    <div className='code_box_button' >
                        <ButtonReact type='submit'>
                            CHECK
                        </ButtonReact>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ValidateCode