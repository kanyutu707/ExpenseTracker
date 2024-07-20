import React from 'react';
import './Navigation.css';
import {useNavigate} from 'react-router-dom';

const Navigation = () => {
  const navigate=useNavigate();
  const callIncome=()=>{
    navigate('/Income');
  }
const callExpenses=()=>{
  navigate('/Expenses');
}
const logout=()=>{
  sessionStorage.clear();
  navigate('/SignIn');
}
  return (
    <div className='navigationContainer'>
        <span onClick={callIncome}>INCOME</span>
        <span onClick={callExpenses}>EXPENSES</span>
        <span onClick={logout}>LOGOUT</span>
    </div>
  )
}

export default Navigation