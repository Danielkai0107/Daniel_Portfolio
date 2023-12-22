import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul className='navbar'>
      <li>
        <Link to={'/'}>Work</Link>
      </li>
      <li>
        <Link to={'/About'}>About</Link>
      </li>
      <li>
        <Link to={'/'}>Contact</Link>
      </li>
    </ul>
  )
}

export default Navbar
