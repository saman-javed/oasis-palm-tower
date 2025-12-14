import React from 'react';
import '../pages/DownPayment.css';

function FeaturesSection() {
  return (
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
  );
}

export default FeaturesSection;

