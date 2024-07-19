import React, { useState } from 'react'
import './SignIn.css'
import {Link, useNavigate} from 'react-router-dom';

const SignIn = () => {
  const navigate=useNavigate();
  const [formData, setFormData]=useState({
    "email":"",
    "password":""
  });
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch("http://localhost:3000/login", {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
        credentials:'include'
      });
      if(!response.ok){
        console.log(response);
        throw new Error('Network response was not ok');
      };
      const data=await response.json();
      const jwtToken=data.token;
      console.log(jwtToken);
      const parts=jwtToken.split('.');

      const payload=JSON.parse(atob(parts[1]));
      console.log(payload);
      sessionStorage.setItem('user_id', payload.user.id);
      sessionStorage.setItem('token', jwtToken);
      navigate('/Income');
    } catch (error) {
      alert('USER NOT FOUND');
      console.error('There was a problem with the fetch operation', error);
    }
  }
  return (
    <div className='signInContainer'>
        <form onSubmit={handleSubmit}>
            <header>SIGN IN PAGE</header>
            <input type="email" placeholder='EMAIL' onChange={handleChange} name='email' value={formData.email}/>
            <input type="password" placeholder='PASSWORD' onChange={handleChange} name='password' value={formData.password}/>
            <button>SUBMIT</button>
            <a href="">REGISTER</a>
        </form>
    </div>
  )
}

export default SignIn