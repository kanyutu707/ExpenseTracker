import React from 'react'
import './Index.css'
import house from '../../assets/house.jpg'

const Index = () => {
  return (
    <div className='indexContainer'>
      <section className="heroSection">
      <span className="details">
        WELCOME TO SIMPLE FINANCE TRACKING SYSTEM
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consequatur beatae consequuntur ex? Laboriosam perspiciatis consequuntur quos dolorum expedita itaque.</h4>
        <button>SIGN IN</button>
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