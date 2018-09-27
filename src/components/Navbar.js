import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TweenMax from 'gsap/TweenMax'

import hamburger from '../img/nav-hamburger.png'
import hamburgerClose from '../img/nav-hamburger-close.png'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.xImg = null
    this.state = {
      isOpen: false
    }
  }

  handleNavClick = e => {
    this.setState({
      isOpen: true
    })
  }

  handleXClick = e => {
    this.setState({
      isOpen: false
    })
  }

  handleXMouseEnter = e => {
    console.log(this.xImg)
    let x = TweenMax.to(this.xImg, 1, { rotation: 720 })
    console.log('entering x')
  }

  render () {
    return this.state.isOpen
      ? <nav className='expand-nav' onClick={this.handleXClick}>
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
            S&J
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
