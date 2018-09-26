import React from 'react'
import hamburger from '../img/nav-hamburger.png'
const Navbar = () => {
  return (
      <nav className='nav'>
        <div className='nav--logo'>
          S&J
        </div>
        <ul className='nav--list'>
          <img
            className='nav--hamburger'
            src={hamburger}
            alt='hamburger-icon'
          />
          <li className='nav--item'>Home</li>
          <li className='nav--item'>Services</li>
          <li className='nav--item'>Contact</li>
        </ul>
      </nav>
  )
}

export default Navbar
