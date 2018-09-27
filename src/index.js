import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
import './css/index.css'

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById('root')
)
