import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './pages/About.css';
import './pages/DownPayment.css';
import './pages/Developer.css';

function App() {
  const location = useLocation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
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
      
      {/* Fixed Action Buttons - From Home Page */}
      <div className="contact-icons">
        <a 
          href="https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-icon directions-icon"
          title="Get Directions"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
        </a>
        <button 
          className="contact-icon register-icon"
          onClick={() => setShowRegisterModal(true)}
          title="Register Request"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      
      {/* Home Section */}
      <section id="home" className="home-section">
        {/* Background Video */}
        <div className="video-container">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            className="background-video"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            onLoadedData={(e) => {
              // Ensure video plays at highest quality
              if (e.target) {
                e.target.playbackRate = 1.0;
              }
            }}
          >
            <source src="/oasis-palm-tower.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              OASIS PALM TOWER
            </h1>
            <p className="hero-subtitle">
              A Mountain-Front Investment Promising Up to 25% Annual ROI
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-page">
        <div className="about-background"></div>
        <div className="about-section">
          <div className="about-content">
            <h1 className="about-title">Oasis Palm Tower</h1>
            <h2 className="about-subtitle">A LUXURY DEVELOPMENT IN FAISAL HILLS, ISLAMABAD</h2>
            
            <div className="about-text">
              <p className="about-paragraph">
                Oasis Palm Tower is a unique luxury development located in Faisal Hills, Islamabad, combining luxury hotels, premium apartments, modern corporate offices, and ground floor commercial shops in one magnificent building. Developed by Taiba Developers under the leadership of Ch. Waqas Shafique, this complete lifestyle plaza offers rooftop amenities including a swimming pool, restaurant, modern gym & gaming zone, 24/7 security, dedicated parking, and power backup. Strategically located near Roots International School, Arc Monument, Glow Park, and other key facilities, Oasis Palm Tower represents a trusted name in real estate, delivering quality construction and lasting value for residents, businesses, and investors.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Show Features Section */}
      <section id="features" className="down-payment-page">
        <div className="down-payment-background"></div>
        <div className="grid-section">
          <div className="grid-title">
            <h2 className="grid-main-title">Oasis Palm Tower?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-column">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L8 8V20C8 28.5 20 38 20 38S32 28.5 32 20V8L20 2Z" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <path d="M15 20L18 23L25 16" stroke="#C0A268" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-text gda-approved-text">GDA APPROVED</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L12 12H28L20 6Z" fill="#C0A268"/>
                    <path d="M20 14L8 22H32L20 14Z" fill="#C0A268"/>
                    <path d="M20 24L4 32H36L20 24Z" fill="#C0A268"/>
                    <rect x="17" y="32" width="6" height="6" fill="#C0A268"/>
                  </svg>
                </div>
                <div className="feature-text forestry-approved-text">APPROVED BY FORESTRY AND WILDLIFE DEPARTMENTS</div>
              </div>
            </div>
            
            <div className="column-divider"></div>
            
            <div className="feature-column">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="12" width="28" height="20" rx="3" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <line x1="8" y1="18" x2="32" y2="18" stroke="#C0A268" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="feature-text flexible-payment-text">FLEXIBLE PAYMENT PLANS</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="12" width="24" height="20" rx="2" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <rect x="10" y="8" width="4" height="4" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <rect x="26" y="8" width="4" height="4" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <circle cx="24" cy="22" r="4" stroke="#C0A268" strokeWidth="1.5" fill="none"/>
                    <line x1="24" y1="22" x2="24" y2="20" stroke="#C0A268" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="24" y1="22" x2="26" y2="22" stroke="#C0A268" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feature-text installment-plan-text">EASY 4-YEAR INSTALLMENT PLAN</div>
              </div>
            </div>
            
            <div className="column-divider"></div>
            
            <div className="feature-column">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="24" height="24" stroke="#C0A268" strokeWidth="1.5" fill="none"/>
                    <line x1="10" y1="28" x2="30" y2="12" stroke="#C0A268" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="10" cy="28" r="1.5" fill="#C0A268"/>
                    <circle cx="30" cy="12" r="1.5" fill="#C0A268"/>
                  </svg>
                </div>
                <div className="feature-text-large">25%</div>
                <div className="feature-text-small roi-text">ROI</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6C20 6 12 14 12 20C12 26 16 30 20 30C24 30 28 26 28 20C28 14 20 6 20 6Z" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="20" r="3" stroke="#C0A268" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
                <div className="feature-text-large">10 MIN</div>
                <div className="feature-text-small nathia-gali-text">DRIVE FROM NATHIA GALI</div>
              </div>
            </div>
            
            <div className="column-divider"></div>
            
            <div className="feature-column">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="20" y="30" textAnchor="middle" fontSize="32" fontWeight="900" fill="#C0A268" fontFamily="Arial, sans-serif">$</text>
                  </svg>
                </div>
                <div className="feature-text-large">15%</div>
                <div className="feature-text-small initial-downpayment-text">INITIAL DOWNPAYMENT</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L32 8L32 24L20 32L8 24L8 8Z" stroke="#C0A268" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="1.5" fill="#C0A268"/>
                  </svg>
                </div>
                <div className="feature-text limited-discounts-text">LIMITED TIME DISCOUNTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="developer-page">
        <div className="developer-background"></div>
        <div className="developer-section">
          <div className="developer-content">
            <h1 className="developer-title">Developer</h1>
            
            <div className="developer-logo">
              <div className="logo-diamond"></div>
              <h2 className="company-name">Ch. Waqas Shafique</h2>
              <div className="logo-underline"></div>
            </div>
            
            <div className="developer-text">
              <p className="developer-paragraph">
                Ch. Waqas Shafique is the Founder and CEO of Taiba Developers, and the visionary behind Oasis Palm Tower. Starting from Sadiqabad, he has built a strong reputation through successful residential and commercial projects in Sadiqabad and Rahim Yar Khan, earning trust through hard work, honesty, and quality construction. Beyond real estate, he owns one of the largest iron and steel businesses in the region, ensuring premium-grade materials for every project. Under his leadership, Oasis Palm Tower brings modern luxury living to Faisal Hills, Islamabad, reflecting class, innovation, and lasting value. With plans for a new high-rise project in 2026, Taiba Developers continues to set standards for modern architecture and lifestyle excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

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
