import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
    <h1>
      Welcome To Home Page Boss 
      <Link to={'/login'}>Not have a account ser? <u>Register</u></Link>
    </h1>
    </>
  )
}

export default Home