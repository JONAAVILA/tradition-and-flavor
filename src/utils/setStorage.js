const setStorage = (values)=>{
    const user = JSON.stringify(
        {
            values,
            isValidateLogin:true
        }
    )
    localStorage.setItem('user',user)
}

export default setStorage