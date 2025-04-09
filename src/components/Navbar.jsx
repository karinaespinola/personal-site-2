import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="hero" smooth={true} duration={500} className="logo">
          KE
        </Link>
        <div className="nav-links">
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 