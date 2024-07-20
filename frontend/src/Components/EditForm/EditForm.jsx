import React, { useState } from 'react'
import './EditForm.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const EditForm = ({close, type}) => {
    const [formData, setFormData]=useState({
        "title":"",
        "description":"",
        "amount":"",
        "type":type,
        "user_id":sessionStorage.getItem("user_id")
    });
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    const handleSubmit=async(e)=>{
      
        e.preventDefault();
        try {
            const response=await fetch("http://localhost:3000/finances/", {
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                    'Authorization':sessionStorage.getItem('token')
                },
                credentials:'include',
                
                body:JSON.stringify(formData),
            })
            if(!response.ok){
              
                throw new Error('Network response was not ok');
            }
            const data=await response.json();
            alert("Data submitted successfully");
            window.location.href=window.location.href;

        } catch (error) {
          console.error("There was a problem with your post operation", error)   
        }
    }

  return (
    <div className='EditFormContainer'>
        <button className='closingButton' onClick={close}>
                <IoCloseCircleOutline/>
            </button>
        <form onSubmit={handleSubmit}>
            
            <header>EDIT FINANCES</header>
            <span className="input_group">
                <label htmlFor="">TITLE</label>
                <input type="text" placeholder='TITLE' onChange={handleChange} name='title' value={formData.title} required/>
            </span>
            <span className="input_group">
                <label htmlFor="">DESCRIPTION</label>
                <textarea  placeholder='DESCRIPTION' onChange={handleChange} name='description' value={formData.description} required></textarea>
            </span>
            <span className="input_group">
                <label htmlFor="">AMOUNT</label>
                <input type="number" placeholder='AMOUNT'  onChange={handleChange} name='amount' value={formData.amount} required/>
            </span>
            <button>SAVE</button>
        </form>
    </div>
  )
}

export default EditForm