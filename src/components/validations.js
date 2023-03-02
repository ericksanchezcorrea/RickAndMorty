
function validations(username, password) {

    let errors = {}

    if(username.lenght > 35) errors.username = 'no puede tener más de 35 caracteres'
    if(!username)  errors.username = 'email no puede estar vacío'

    let ExpRegEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if(username.match(ExpRegEmail)==null)  errors.username ='email invalido'

    // const ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    const regexPassword = /^(?=.*\d)[\w\W]{6,10}$/;

    if(password.match(regexPassword)==null)  errors.password ='password invalido'

    return errors;
}

export default validations