import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './DownPayment.css';

function DownPayment() {
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
    <div className="down-payment-page">
      <Navbar activeSection="features" />
      
      {/* Background */}
      <div className="down-payment-background"></div>

      {/* Grid Section */}
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
                <label htmlFor="firstName-downpayment">First Name</label>
                <input
                  type="text"
                  id="firstName-downpayment"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName-downpayment">Last Name</label>
                <input
                  type="text"
                  id="lastName-downpayment"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber-downpayment">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber-downpayment"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email-downpayment">Email</label>
                <input
                  type="email"
                  id="email-downpayment"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment-downpayment">Comment</label>
                <textarea
                  id="comment-downpayment"
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

export default DownPayment;
