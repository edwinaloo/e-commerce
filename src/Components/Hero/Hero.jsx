import React from 'react'
import hero_img from '../../assets/head 3 .jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <div className="hero_left">
          <h2>Unleash Premium Sound Quality</h2>
          <p>
            Your one-stop destination for the latest gadgets, entertainment, and seamless shopping. 
            Explore products you love, discover what’s trending, and enjoy a smooth online experience.
          </p>
          <button>Shop The Collection</button>
        </div>
        <div className="hero_right">
          <img src={hero_img} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
