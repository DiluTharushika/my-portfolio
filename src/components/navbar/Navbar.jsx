import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">Dilu Tharushika</div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link smooth to="/#home" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link smooth to="/#about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link smooth to="/#skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link smooth to="/#projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link smooth to="/#certificates" onClick={() => setOpen(false)}>Certificates</Link></li>
        <li><Link smooth to="/#contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
