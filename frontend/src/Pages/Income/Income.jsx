import React, { useState } from 'react';
import './Income.css';
import { IoHome } from 'react-icons/io5';
import Navigation from '../../Components/Navigation/Navigation';
import Popup from 'reactjs-popup';
import EditForm from '../../Components/EditForm/EditForm';

const Income = () => {
    const[isOpen, setIsOpen]=useState(false);
    const openModal=()=>setIsOpen(true);
    const closeModal=()=>setIsOpen(false);
    
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
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
          <span>
              <h4>1</h4>
              <h4>HELLO</h4>
              <h4>THIS IS US</h4>
              <h4>50</h4>
          </span>
         
      </section>
    </div>
  )
}

export default Income