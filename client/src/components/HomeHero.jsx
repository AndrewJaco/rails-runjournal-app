import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Home.css'

function HomeHero() {
  return (
    <div className='homeHero'>
      <h1>Run Journal Pro</h1>
      <p>keep running</p>
      <Link to='/signup'>Sign up</Link>
    </div>
  )
}

export default HomeHero