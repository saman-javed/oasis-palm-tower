import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isManualClickRef = useRef(false);
  const clickedSectionRef = useRef(null);

  useEffect(() => {
    // If we're on a different route (like /blogs), clear active section
    if (location.pathname !== '/' && location.pathname !== '/explore-building') {
      setActiveSection('');
      return;
    }

    // Check for hash in URL and set active section accordingly
    const hash = window.location.hash.substring(1);
    if (hash && (hash === 'home' || hash === 'about' || hash === 'features' || hash === 'developer')) {
      setActiveSection(hash);
    }

    // Only update active section on manual nav clicks, not on scroll
    // Scroll-based detection removed as requested
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Set flags to prevent scroll handler from overriding
    isManualClickRef.current = true;
    clickedSectionRef.current = sectionId;
    
    // Immediately set the active section
    setActiveSection(sectionId);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      // Navigate to home page with hash for reliable scrolling
      navigate(`/#${sectionId}`, { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const scrollToElement = () => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          } else {
            // Retry if element not found yet
            setTimeout(scrollToElement, 100);
          }
        };
        scrollToElement();
      }, 200);
    } else {
      // We're already on the home page, scroll directly
      // Use the passed scrollToSection function if available
      if (scrollToSection) {
        scrollToSection(sectionId);
      } else {
        // Fallback: direct scroll using scrollIntoView
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        } else {
          // Retry after a short delay if element not found
          setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            }
          }, 100);
        }
      }
      
      // After scroll completes, verify we're in the correct section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const scrollPosition = window.scrollY;
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          
          // If we're in the clicked section, keep it active and allow scroll handler
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
            setActiveSection(sectionId);
            // Keep the flag for a bit longer to ensure stability
            setTimeout(() => {
              isManualClickRef.current = false;
              clickedSectionRef.current = null;
            }, 500);
          } else {
            // If somehow we're not in the section, clear the flag
            isManualClickRef.current = false;
            clickedSectionRef.current = null;
          }
        } else {
          isManualClickRef.current = false;
          clickedSectionRef.current = null;
        }
      }, 1000);
    }
    
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Branding Logo - Left */}
        <div className="navbar-branding">
          <h1 className="branding-oasis">OASIS</h1>
          <div className="branding-palm-tower">
            <span className="branding-line"></span>
            <span className="branding-text">PALM TOWER</span>
            <span className="branding-line"></span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className={`nav-link ${activeSection === 'home' && location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
          >
            Show Features
          </a>
          <a 
            href="#developer" 
            onClick={(e) => handleNavClick(e, 'developer')}
            className={`nav-link ${activeSection === 'developer' ? 'active' : ''}`}
          >
            Developer
          </a>
          <Link 
            to="/blogs" 
            className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
          >
            Blogs
          </Link>
        </div>
        
        <Link 
          to="/explore-building" 
          className="explore-btn desktop-nav"
        >
          Explore Building
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-links">
            <a 
              href="#home" 
              className={`mobile-nav-link ${activeSection === 'home' && location.pathname === '/' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a 
              href="#features" 
              className={`mobile-nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'features')}
            >
              Show Features
            </a>
            <a 
              href="#developer" 
              className={`mobile-nav-link ${activeSection === 'developer' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'developer')}
            >
              Developer
            </a>
            <Link 
              to="/blogs" 
              className={`mobile-nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
            <Link 
              to="/explore-building" 
              className={`mobile-nav-link ${activeSection === 'explore-building' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Explore Building
            </Link>
        </div>
        
        <Link 
          to="/explore-building" 
          className="mobile-explore-btn"
          onClick={closeMobileMenu}
        >
          Explore Building
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


