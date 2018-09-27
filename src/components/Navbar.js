import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TweenMax from 'gsap/TweenMax'

import hamburger from '../img/nav-hamburger.png'
import hamburgerClose from '../img/nav-hamburger-close.png'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.xImg = null
    this.expandNav = null
    this.state = {
      isOpen: false
    }
  }

  handleNavClick = e => {
    this.setState({
      isOpen: true
    })
    console.log(this.expandNav)
  }

  handleXClick = e => {
    this.setState({
      isOpen: false
    })
    console.log(this.expandNav)
  }

  handleXMouseEnter = e => {
    TweenMax.to(this.xImg, 0.5, { rotation: 720 })
  }

  render () {
    return this.state.isOpen
      ? <nav
        className='expand-nav'
        onClick={this.handleXClick}
        ref={nav => (this.expandNav = nav)}
      >
        <img
          className='nav-close'
          src={hamburgerClose}
          alt='nav-close-icon'
          onMouseEnter={this.handleXMouseEnter}
          ref={img => (this.xImg = img)}
        />
        <ul className='nav--list'>
          <Link to='/' className='nav--item '>Home</Link>
          <Link to='/services' className='nav--item '>Services</Link>
          <Link to='/contact' className='nav--item '>Contact</Link>
        </ul>
      </nav>
      : <nav className='nav'>
        <div className='nav--logo'>
          <Link to='/' className='logo-link'>S&J</Link>
        </div>
        <img
          className='nav--hamburger'
          src={hamburger}
          alt='hamburger-icon'
          onClick={this.handleNavClick}
        />
      </nav>
  }
}

export default Navbar
