import React from 'react'
import './Index.css'
import house from '../../assets/house.jpg'
import { useNavigate } from 'react-router-dom'


const Index = () => {
  const navigate=useNavigate();
  const login=()=>{
    navigate('/SignIn');
  }
  return (
    <div className='indexContainer'>
      <section className="heroSection">
      <span className="details">
        WELCOME TO SIMPLE FINANCE TRACKING SYSTEM
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consequatur beatae consequuntur ex? Laboriosam perspiciatis consequuntur quos dolorum expedita itaque.</h4>
        <button onClick={login}>SIGN IN</button>
      </span>
      <img src={house} alt="image" srcset="" />
      </section>
      <section className="services">
        <header>WHAT TO EXPECT</header>
        <div className="servicesContainer">
            <span>
              INCOME TRACKING
            </span>
            <span>
              EXPENSE TRACKING
            </span>
            <span>
              BALANCE TRACKING
            </span>
        </div>
      </section>
    </div>
  )
}

export default Index