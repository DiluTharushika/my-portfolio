import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className="logo">Dilu Tharushika</div>

      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>       
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
