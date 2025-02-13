import { useFormik } from 'formik'
import { useState } from 'react'
import sendCode from '../../adapters/sendCode'
import adminLogin from '../../adapters/adminLogin'
import Alert from '../modals/alert/Alert'
import { Link, useNavigate } from 'react-router-dom'
import { validateLogin } from '../../utils/validate'
import ButtonReact from '../buttonReact/ButtonReact'
import setStorage from '../../utils/setStorage'

const Login = ()=>{
    const [modal, setModal] = useState(false)
    const [alert, setAlert] = useState('')
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            
            const res = await adminLogin(values)
            console.log('adminlogin',res)
            if(res.name){
                setStorage(res)
                navigate('/admin')
                return
            }

            if(res === 'validate user'){
                const codeRes = await sendCode()
                if(codeRes.error) {
                    setAlert(codeRes.error)
                    return
                }
                setModal(!modal)
                return
            }

            setAlert('Clave o correo incorrecto')
            return
        }
    })

    const handleModal = ()=>{
        setModal(!modal)
    }

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <div className='login_container' >
            {modal && <ValidateCode
                            password={formik.values.password}
                            handleModal={handleModal} 
                            email={formik.values.email} 
                        />}
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            <div>
                <Link to={'/admin/signin'} >
                    <h2>INGRESO</h2>
                </Link>
                <h3 className="login_heading" >Admin</h3>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <div className='login_box_inputs' >
                    <input
                        type="text"
                        id='email'
                        name='email'
                        placeholder='EMAIL'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <div className='box_login_admin_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        placeholder='PASSWORD'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <div className='box_login_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className='login_box_button' >
                    <ButtonReact type='submit'>
                        ENVIAR
                    </ButtonReact>
                </div>
            </form>
        </div>
    )
}

export default Login