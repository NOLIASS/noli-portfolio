import { useState } from 'react'
import '../style/navbar.css'

type Head = {
  brand: string
}

function Navbar({ brand }: Head) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="/" className="navbar-logo">{brand}</a>

      <nav className={`navbar-links ${open ? 'open' : ''}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>

      <button className={`navbar-burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
    </header>
  )
}

export default Navbar