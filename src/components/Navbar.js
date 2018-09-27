import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TweenMax from 'gsap/TweenMax'

import hamburger from '../img/nav-hamburger.png'
import hamburgerClose from '../img/nav-hamburger-close.png'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.xImg = React.createRef()
    this.expandNav = React.createRef()
    this.hamburger = React.createRef()
  }

  handleNavClick = e => {
    this.setState({
      isOpen: true
    })
  }

  handleXClick = e => {
    console.dir(this.expandNav)
    this.setState({
      isOpen: false
    })
  }

  handleXMouseEnter = e => {
    console.log(this.hamburger)
    console.log(this.xImg)
    console.log(this.expandNav)
  }

  componentDidMount = () => {
    console.log('component mounted')
    console.log(this.hamburger)
  }

  componentDidUpdate = () => {
    console.log('component updated')
    console.log(this.xImg)
    console.log(this.expandNav)
  }

  render () {
    return this.state.isOpen
      ? <nav
        className='expand-nav'
        onClick={this.handleXClick}
        ref={this.expandNav}
        >
        <img
          className='nav-close'
          src={hamburgerClose}
          alt='nav-close-icon'
          onMouseEnter={this.handleXMouseEnter}
          ref={this.xImg}
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
          ref={this.hamburger}
          />
      </nav>
  }
}

export default Navbar
