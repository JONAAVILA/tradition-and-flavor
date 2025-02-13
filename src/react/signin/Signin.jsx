import { useFormik } from 'formik'
import { useState } from 'react'
import postAdmin from '../../adapters/postAdmin'
import Alert from '../modals/alert/Alert'
import './signin.css'
import { useNavigate } from 'react-router-dom'
import { validateAdmin } from '../../utils/validate'
import setStorage from '../../utils/setStorage'
import ButtonReact from '../buttonReact/ButtonReact'

const Signin = ({prod,urlAdminSigninDev,urlAdminSigninProd})=>{
    const [alert, setAlert] = useState('')
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            name:'',
            surname:'',
            email:'',
            password:''
        },
        validationSchema:validateAdmin,
        onSubmit: async (values)=>{
            const res = await postAdmin(values,prod,urlAdminSigninDev,urlAdminSigninProd)
            console.log('res',res)
            if(res.name){
                setAlert(`Admin ${res.name} creado con exito 🚀`)
                setStorage(res)
                setTimeout(()=>{
                    navigate('/admin')
                },3000)
            }else{
                setAlert(res)
                setTimeout(()=>{
                    navigate('/admin')
                },3000)
            }
        }
    })

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <div>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert> }
            <div className='admin_signin_box_heading' >
                <h2>registro</h2>
                <h3 className='admin_signin_heading' >Admin</h3>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='admin_create_form'
            >
                 <div>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="NOMBRE"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                    </div>
                    <input
                        type="text"
                        id='surname'
                        name='surname'
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="APELLIDO"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.surname && formik.errors.surname && <p>{formik.errors.surname}</p>}
                    </div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="EMAIL"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="PASSWORD"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className='admin_signin_button_box' >
                    <ButtonReact type='submit' >
                        CREAR
                    </ButtonReact>
                </div>
            </form>
        </div>
    )
}

export default Signin