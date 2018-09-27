import React from 'react'
import Jumbotron from './Jumbotron'
import HomeTopContent from './HomeTopContent'
import HomeMiddleContent from './HomeMiddleContent'

const Home = () => {
  return (
    <div className='home-container'>
      <Jumbotron />
      <HomeTopContent />
      <HomeMiddleContent />
    </div>
  )
}

export default Home
