import React from 'react'
import './About.css'
import { assets } from '../../assets/assets' 

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to Tomato, your number one source for all things food. We're dedicated to providing you the very best of delivery, with an emphasis on reliability, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2025, Tomato has come a long way from its beginnings. When we first started out, our passion for "eco-friendly food delivery" drove us to start our own business.
          </p>
        </div>
        
        <div className="about-img">
            <img src={assets.logo} alt="" /> 
        </div>
      </div>
    </div>
  )
}

export default About