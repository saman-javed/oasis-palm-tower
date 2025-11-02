import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onWatchVideoClick, activeSection: propActiveSection }) => {
  const location = useLocation();
  const activeSection = propActiveSection || (location.pathname === '/about' ? 'about' : (location.pathname === '/down-payment' ? 'features' : (location.pathname === '/developer' ? 'developer' : (location.pathname === '/blogs' ? 'blogs' : (location.pathname === '/explore-building' ? 'explore-building' : 'home')))));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <Link 
            to="/" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/down-payment" 
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
          >
            Show Features
          </Link>
          <Link 
            to="/developer" 
            className={`nav-link ${activeSection === 'developer' ? 'active' : ''}`}
          >
            Developer
          </Link>
          <Link 
            to="/explore-building" 
            className={`nav-link ${activeSection === 'explore-building' ? 'active' : ''}`}
          >
            Explore Building
          </Link>
          <Link 
            to="/blogs" 
            className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}
          >
            Blogs
          </Link>
        </div>
        
        {onWatchVideoClick && (
          <button className="explore-btn desktop-nav" onClick={onWatchVideoClick}>Watch Video</button>
        )}
      </div>

      {/* Mobile Hamburger Menu */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-links">
            <Link 
              to="/" 
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/down-payment" 
              className={`mobile-nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Show Features
            </Link>
            <Link 
              to="/developer" 
              className={`mobile-nav-link ${activeSection === 'developer' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Developer
            </Link>
            <Link 
              to="/explore-building" 
              className={`mobile-nav-link ${activeSection === 'explore-building' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Explore Building
            </Link>
            <Link 
              to="/blogs" 
              className={`mobile-nav-link ${activeSection === 'blogs' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
          </div>
          
          {onWatchVideoClick && (
            <button className="mobile-explore-btn" onClick={() => { onWatchVideoClick(); closeMobileMenu(); }}>
              Watch Video
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


