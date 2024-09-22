import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Minouch-Logo.png';
import './Navbar.css';
import '../App.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [menuIconVisible, setMenuIconVisible] = useState(false);

  //const handleClick = () => setClick(!click);
  const handleClick = () => {
    setClick(!click);
    setMenuIconVisible(true);
  }
  const closeMobileMenu = () => setClick(false);

  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setMenuIconVisible(true);
    } else {
      setMenuIconVisible(false);
      setClick(false); // Ensures menu closes when resizing to larger screen
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="cat-logo" src={Logo} alt="Logo" />
          <span className="highlight">n</span>ani <span className="highlight">b</span>sd
        </Link>
        {menuIconVisible && (
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
          </div>
        )}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/about-me" className="nav-links" onClick={closeMobileMenu}>
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links" onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hobbies" className="nav-links" onClick={closeMobileMenu}>
              Hobbies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
