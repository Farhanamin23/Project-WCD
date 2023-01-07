import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import ActionButton from './actionButton'

const Navbar: React.FC = () => {
  return (
    <nav className="flex ">
      <div className="mx-auto flex flex-row justify-between items-center py-[5px] w-full max-w-[1238px]">
        <a className="ml-8"><img src={logo} /></a>
        <div className="font-primary flex flex-row items-center">
          <Link className="px-[16px]" to="/">Home</Link>
          <Link className="px-[16px]" to="/about-us">About us</Link>
          <Link className="px-[16px]" to="/program">Program</Link>
          <Link className="px-[16px]" to="/donate">Donate</Link>
          <Link className="px-[16px]" to="/contact-us">Contact Us</Link>
          <Link className="px-[16px]" to="/contact-us">
            <ActionButton title='Join the movement'/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar