import * as Yup from 'yup';

export const validateAdmin = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El nombre es requerido'),
    surname:Yup.string()
        .min(5,'El apellido es muy corto')
        .max(50,'El apellido es un largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El apellido es requerido'),
    seller:Yup.string()
        .min(8)
        .max(16),
    password:Yup.string()
        .min(8,'Contraseña demasiado corta')
        .max(40,'Contraseña demasiado larga')
        .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])','Formato inválido')
        .required('La contraseña es requerida'),
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateConsult = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre y Apellido muy corto")
        .max(60,'Nombre y Apellido muy largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El nombre es requerido'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(16,"Teléfono muy largo")
        .matches(/^\+?\d+$/,'Formato inválido')
        .required('El teléfono es requerido'),
    email:Yup.string()
        .email('Email invalido')    
        .required('El email es requerido'),
    message:Yup.string()
        .min(10)
        .max(300)
        .matches(/^[a-zA-Z0-9\s]+$/,'Formato inválido')
        .required('El mensaje es requerido'),
})

export const validateEmail = Yup.object().shape({
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateLogin = Yup.object().shape({
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido'),
    password:Yup.string()
        .min(8,'Contraseña demasiado corta')
        .max(40,'Contraseña demasiado larga')
        .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])','Formato inválido')
        .required('La contraseña es requerida')
})

export const validateCode = Yup.object().shape({
    code:Yup.string()
        .min(6,'Código inválido')
        .max(6,'Código inválido')
        .required('Ingrese el código')
})

export const validateBlog = Yup.object().shape({
    tittle:Yup.string()
        .min(10,'Título demasiado corto')
        .max(60,'Título demasiado largo')
        .required('Título requerido'),
    subtittle:Yup.string()
        .min(10,'Subtítulo demasiado corto')
        .max(120,'Subtítulo demasiado largo')
        .required('Subtítulo requerido'),
    description:Yup.string()
        .min(10,'Descripción demasiado corto')
        .max(900,'Descripción demasiado largo')
        .required('Descripción requerido')
})  