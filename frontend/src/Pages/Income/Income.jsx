import React, { useEffect, useState } from 'react';
import './Income.css';
import { IoHome } from 'react-icons/io5';
import Navigation from '../../Components/Navigation/Navigation';
import Popup from 'reactjs-popup';
import EditForm from '../../Components/EditForm/EditForm';
import { useNavigate } from 'react-router-dom';

const Income = () => {
    const navigate=useNavigate();
    const[isOpen, setIsOpen]=useState(false);
    const openModal=()=>setIsOpen(true);
    const closeModal=()=>setIsOpen(false);
    const [finances, setFinances]=useState([]);
    

    useEffect(()=>{
        
        const fetchData=async()=>{
            if(sessionStorage.getItem('token')==null){
                navigate('/SignIn');
            }
            try {
                const response=await fetch("http://localhost:3000/finances/", {
                    headers:{
                        'Authorization':sessionStorage.getItem('token'),
                        'Content-Type':'application/json'
                    }
                });
            
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
               
                const data=await response.json();
               
                const incomes=data.filter(income=>income.type==='Income' && income.user_id==sessionStorage.getItem('user_id'));
             
                setFinances(incomes);
            } catch (error) {
                console.error("There was a problem fetching the data:", error);
            }
        };
        fetchData();
    }, []);
    
  return (
    <div className='IncomeContainer'>
      <Navigation/>
      <h1> <IoHome/> <span> INCOMES</span></h1>
      <section className="incomes">
        <section className="accessories">

        <input type="search" />
        <h3>BALANCE : 5000 </h3>
        <button onClick={openModal}>ADD</button>
        <Popup open={isOpen} onClose={closeModal} modal nested>
            <EditForm close={closeModal} type='Income'/>
        </Popup>
        </section>
          <header>
              <h3>#</h3>
              <h3>TITLE</h3>
              <h3>DESCRIPTION</h3>
              <h3>AMOUNT</h3>
          </header>
          
          {
            finances.map((finance)=>(
                <span key={finance.id}>
                <h4>{finance.id}</h4>
                <h4>{finance.title}</h4>
                <h4>{finance.description}</h4>
                <h4>{finance.amount}</h4>
            </span>
            ))
          }
        
        
      </section>
    </div>
  )
}

export default Income