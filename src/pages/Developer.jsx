import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Developer.css';

function Developer() {
  const navigate = useNavigate();
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


  return (
    <div className="developer-page">
      <Navbar activeSection="developer" />
      
      {/* Background */}
      <div className="developer-background"></div>

      {/* Main Content */}
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
              Ch. Waqas Shafique is the Founder and CEO of Taiba Developers, and the visionary mind behind Oasis Palm Tower. Known for his commitment, honesty, and excellence in real estate, he has built a strong reputation as one of the most trusted developers in South Punjab and Islamabad.
            </p>
            
            <p className="developer-paragraph">
              <strong>A Journey of Vision and Hard Work</strong><br/>
              Starting from Sadiqabad, Ch. Waqas Shafique began his journey with small-scale town projects and quickly earned recognition for delivering high-quality developments on time. Over the years, he has successfully completed several residential and commercial town projects in Sadiqabad and Rahim Yar Khan, each standing as a symbol of trust and quality construction.
            </p>
            
            <p className="developer-paragraph">
              Beyond development, he also owns one of the largest iron and steel businesses in the region — providing strong industrial support and ensuring premium-grade materials for every project under his supervision.
            </p>
            
            <p className="developer-paragraph">
              <strong>Oasis Palm Tower – A Landmark of Excellence</strong><br/>
              Under his leadership, Oasis Palm Tower was launched with a clear mission: to bring modern luxury living to Faisal Hills, Islamabad, through a project that reflects class, innovation, and lasting value. Every part of the tower — from its design to its finishing — shows his dedication to creating something timeless for both residents and investors.
            </p>
            
            <p className="developer-paragraph">
              <strong>The Future Ahead</strong><br/>
              With the success of Oasis Palm Tower, Ch. Waqas Shafique and his team are now preparing for their next big milestone in 2026 — a new high-rise and residential project in Islamabad, which will once again set new standards for modern architecture and lifestyle. Insha'Allah, this upcoming project will continue the legacy of trust, quality, and excellence that Taiba Developers are known for.
            </p>
          </div>
          
          <div className="developer-cta-section">
            <button className="developer-cta-button">Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          className="action-btn"
          onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank')}
          title="Get Directions"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C7.24 2 5 4.24 5 7C5 11.25 10 18 10 18C10 18 15 11.25 15 7C15 4.24 12.76 2 10 2ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <button 
          className="action-btn"
          onClick={() => setShowRegisterModal(true)}
          title="Register Request"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M18 6L10 11L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

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
                <label htmlFor="firstName-developer">First Name</label>
                <input
                  type="text"
                  id="firstName-developer"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName-developer">Last Name</label>
                <input
                  type="text"
                  id="lastName-developer"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber-developer">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber-developer"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email-developer">Email</label>
                <input
                  type="email"
                  id="email-developer"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment-developer">Comment</label>
                <textarea
                  id="comment-developer"
                  name="comment"
                  value={registerForm.comment}
                  onChange={handleInputChange}
                  rows="3"
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

export default Developer;
