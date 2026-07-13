import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-expanded' : ''}`}>
      <nav className="container nav">
        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            CH<span className="dot">.</span>
          </a>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button 
          className={`nav-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
      {/* Background overlay when menu is open on mobile */}
      <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
};

export default Header;
