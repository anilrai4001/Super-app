import React from 'react'
import './register.css'
import { useState } from 'react'


function Register() {

  const [formData, setFormData] = useState({
    Name: '',
    UserName: '',
    Email: '',
    Mobile: '',
  })
  const [checkbox, setCheckbox] = useState(false);

  const [error,setError] = useState({});
  const [checkboxError,setCheckboxError] = useState(false);

  const fillDetails = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
    setError({
      ...error,
      [name]: false
    });
  }

  const handleCheck = (e) => {
    let checked = e.target.checked;
    setCheckbox(checked);
    setCheckboxError(false);
  }

  const formValidation = (e) => {
    e.preventDefault();
    let newError = {};
  
    if (!formData.Name) {
      newError = { ...newError, Name: true };
    }
  
    if (!formData.UserName) {
      newError = { ...newError, UserName: true };
    }
  
    if (!formData.Email) {
      newError = { ...newError, Email: true };
    }
  
    if (!formData.Mobile) {
      newError = { ...newError, Mobile: true };
    }

    setError(newError);

    if(checkbox===false){
      setCheckboxError(true);
    }
    
    if(Object.keys(newError).length===0 && checkbox===true){
      console.log(formData);
      localStorage.setItem('user',JSON.stringify(formData));
    }
      
  };
  

  return (
    <div className="Register">
      <div className='side'>
        <p>Discover new things on<br/>Superapp</p>
      </div>

      <div className='register'>
        <div className='register-container'>
          <h1>Super app</h1>
          <p>Create your new account</p>
          <form>
            <input type='text' placeholder='Name'  onChange={fillDetails} name='Name' />
            {error.Name ? <div className='error'>Field is required</div> : ''}
            

            <input type='text' placeholder='UserName' onChange={fillDetails} name='UserName' />
            {error.UserName ? <div className='error'>Field is required</div> : ''}

            <input type='text'  placeholder='Email' onChange={fillDetails} name='Email' />
            {error.Email ? <div className='error'>Field is required</div> : ''}

            <input type='number' placeholder='Mobile' onChange={fillDetails} name='Mobile'  />
            {error.Mobile ? <div className='error'>Field is required</div> : ''}

            <label>
              <input type='checkbox' name='checkbox' onChange={handleCheck}  />
              Share my registration data with Superapp
            </label>
            {checkboxError ? <div className='error'>Check this box if you want to proceed</div> : '' }
            

            <button onClick={formValidation}>SIGN UP</button>
          </form>
          <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Register
