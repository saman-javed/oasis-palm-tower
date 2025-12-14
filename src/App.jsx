import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import DeveloperSection from './components/DeveloperSection';
import ScrollIndicators from './components/ScrollIndicators';
import './App.css';
import './pages/About.css';
import './pages/DownPayment.css';
import './pages/Developer.css';

function App() {
  const location = useLocation();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comment: ''
  });

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Request:', registerForm);
    setShowRegisterModal(false);
    setRegisterForm({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      comment: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scrollIntoView for reliable scrolling
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      
      // Add animate class after a short delay to trigger animations (for navbar clicks)
      setTimeout(() => {
        element.classList.add('animate');
        // Trigger a scroll event to update active section
        window.dispatchEvent(new Event('scroll'));
      }, 100);
    }
  }, []);

  // Handle section visibility and animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'about', 'features', 'developer'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);


  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  // Handle navigation state (when navigating from other pages like Blogs)
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      // Wait for DOM to be ready, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 200);
    }
  }, [location.state, scrollToSection]);

  // Handle keyboard arrow navigation
  useEffect(() => {
    const sections = ['home', 'about', 'features', 'developer', 'footer']; // Footer accessible via keyboard but no dot indicator
    
    const handleKeyDown = (e) => {
      // Only handle arrow keys if not typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // Find current active section
      const findActiveSection = () => {
        const viewportHeight = window.innerHeight;
        let currentSection = 'home';
        
        sections.forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is in the middle 50% of viewport
            if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
              currentSection = sectionId;
            }
          }
        });
        
        return currentSection;
      };

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const currentSection = findActiveSection();
        const currentIndex = sections.findIndex(s => s === currentSection);
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
          // Scroll to next section
          scrollToSection(sections[currentIndex + 1]);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          // Scroll to previous section
          scrollToSection(sections[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollToSection]);

  return (
    <div className="app">
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Fixed Get in Touch Button - From Home Page */}
      <button 
        className="cta-button fixed-cta-button"
        onClick={() => setShowRegisterModal(true)}
      >
        Get in Touch
      </button>
      
      {/* Scroll Indicators */}
      <ScrollIndicators scrollToSection={scrollToSection} />

      {/* Fixed Action Buttons - From Home Page */}
      <div className="contact-icons">
        <button 
          onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank', 'noopener,noreferrer')}
          className="contact-icon directions-icon"
          title="Get Directions"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
          <span className="contact-icon-text">Get Directions</span>
        </button>
        <button 
          className="contact-icon register-icon"
          onClick={() => setShowRegisterModal(true)}
          title="Register Request"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
          </svg>
          <span className="contact-icon-text">Register Request</span>
        </button>
      </div>
      
      {/* Home Section */}
      <HomeSection />

      {/* About Section */}
      <AboutSection variant="compact" />

      {/* Features Section */}
      <FeaturesSection />

      {/* Developer Section */}
      <DeveloperSection variant="compact" />

      <Footer scrollToSection={scrollToSection} />

      {/* Register Request Modal */}
      {showRegisterModal && (
        <div className="register-modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="register-modal" onClick={(e) => e.stopPropagation()}>
            <div className="register-modal-header">
              <h2 className="register-modal-title">Register Request</h2>
              <button 
                className="register-modal-close" 
                onClick={() => setShowRegisterModal(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <div className="register-form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={registerForm.comment}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>
              <button type="submit" className="register-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
