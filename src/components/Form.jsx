import React from 'react'
import validations from "./validations";



function Form({login}) {

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({})
     
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        setUserData({ ...userData, [name]: value });
        setErrors(validations(userData.username, userData.password));
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log("Submitting form...", userData);
        login(userData)
    }


  return (
    <div className='form_wrapper'>

        <form className='form' onSubmit={handleSubmit} >

            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="username"  onChange={handleInputChange}/>
            </div>
            <p>{errors.username && errors.username }</p>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password"  onChange={handleInputChange} />
            </div>
            <p>{errors.password && errors.password }</p>

            <button type='submit'>Enviar</button>

        </form>

    </div>
  )
}

export default Form