import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends Component {
  render () {
    return (
      <div className='Layout'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </div>
    )
  }
}

export default Layout
