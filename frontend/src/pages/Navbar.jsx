import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md flex justify-between items-center px-6 h-16">
  <div className="flex items-center gap-2">
    <img src="/logotyp.png" alt="Logo" className="h-10" />
    <Link to="/" className="text-xl font-bold text-white hover:text-yellow-400">| Future</Link>
  </div>
  <div className="hidden md:flex gap-6">
    <Link to="/o-nas" className="hover:text-yellow-400" id='xd1'>O nas</Link>
    <Link to="/obozy-i-polkolonie" className="hover:text-yellow-400" id='xd'>Obozy i Półkolonie</Link>
    <Link to="/treningi" className="hover:text-yellow-400" id='xd2'>Treningi</Link>
    <Link to="/kontakt" className="hover:text-yellow-400" id='xd3'>Kontakt</Link>
  </div>
</nav>

  )
}

export default Navbar
