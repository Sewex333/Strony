import React from 'react'
import { Link } from 'react-router'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" id="Future">Future</Link>
        <div id='links'>
          <Link to="/o-nas" className='link'>O nas</Link>
          <Link to="/obozy-i-polkolonie" className='link'>Obozy i Półkolonie</Link>
          <Link to="/treningi" className='link'>Treningi</Link>
          <Link to="/kontakt" className='link'>Kontakt</Link>
        </div>
      </nav>
  )
}
export default Navbar