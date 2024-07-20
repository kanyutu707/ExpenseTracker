import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData]=useState({
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":""
  });
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch("http://localhost:3000/register", {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(formData),
      })
      if(!response.ok){
        console.log(response)
        throw new Error('Network response was not ok')
      }
      const data=await response.json();
     
      navigate('/SignIn');
    } catch (error) {
      console.error('There was a problem with your fetch operation', error);
    }
  }
  return (
    <div className='signUpContainer'>
        <form onSubmit={handleSubmit}>
            <header>SIGN UP PAGE</header>
            <span className="input_group">
                <input type="text" placeholder='FIRST NAME' onChange={handleChange} name='firstName' value={formData.firstName} required/>
                <input type="text" placeholder='LAST NAME' onChange={handleChange} name='lastName' value={formData.lastName} required/>
            </span>
            <span className='input_group'>
                <input type="password" placeholder='PASSWORD' onChange={handleChange} name='password' value={formData.password} required />
                <input type="password" placeholder='CONFIRM PASSWORD' onChange={handleChange} name='password' value={formData.password} required/>
            </span>
            <input type="email" placeholder='EMAIL' onChange={handleChange} name='email' value={formData.email} required/>
            <button type="submit">SUBMIT</button>
            <Link to={'/SignIn'}>LOGIN</Link>
        </form>
        
    </div>
  )
}

export default SignUp