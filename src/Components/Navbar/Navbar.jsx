import React from 'react'
import './Navbar.css'
import { BiCart, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <Link to='/'>
        <div className="logo">
          <h2>StreamX</h2>
        </div>
      </Link>

      {/* Links */}
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Contact</li>
          <li>App</li>
        </ul>
      </div>

      {/* Icons */}
      <div className="nav_icon_wrapper">
        <Link to='/cart'>
          <div className="nav_cart">
            <BiCart className='nav_icon'/>
            <p className='cart_qty'>0</p>
          </div>
        </Link>
        <div className="nav_icon">
          <BiUser className='nav_icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
