import React from 'react'
import hamburger from '../img/nav-hamburger.png'
const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
        <brand className='nav--logo'>
          S&J
        </brand>
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
    </header>
  )
}

export default Navbar
