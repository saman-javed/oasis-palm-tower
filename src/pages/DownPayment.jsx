import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './DownPayment.css';

function DownPayment() {
  const navigate = useNavigate();


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
                    <path d="M20 2L8 8V20C8 28.5 20 38 20 38S32 28.5 32 20V8L20 2Z" stroke="#FFD700" strokeWidth="2" fill="none"/>
                    <path d="M15 20L18 23L25 16" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </div>
              <div className="feature-text gda-approved-text">GDA APPROVED</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L12 12H28L20 6Z" fill="#FFD700"/>
                  <path d="M20 14L8 22H32L20 14Z" fill="#FFD700"/>
                  <path d="M20 24L4 32H36L20 24Z" fill="#FFD700"/>
                  <rect x="17" y="32" width="6" height="6" fill="#FFD700"/>
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
                  <rect x="6" y="12" width="28" height="20" rx="3" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="18" x2="32" y2="18" stroke="#FFD700" strokeWidth="2"/>
                </svg>
              </div>
              <div className="feature-text flexible-payment-text">FLEXIBLE PAYMENT PLANS</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="12" width="24" height="20" rx="2" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  <rect x="10" y="8" width="4" height="4" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  <rect x="26" y="8" width="4" height="4" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="22" r="4" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
                  <line x1="24" y1="22" x2="24" y2="20" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="24" y1="22" x2="26" y2="22" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
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
                  <rect x="8" y="8" width="24" height="24" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
                  <line x1="10" y1="28" x2="30" y2="12" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="10" cy="28" r="1.5" fill="#FFD700"/>
                  <circle cx="30" cy="12" r="1.5" fill="#FFD700"/>
                </svg>
              </div>
              <div className="feature-text-large">25%</div>
              <div className="feature-text-small roi-text">ROI</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6C20 6 12 14 12 20C12 26 16 30 20 30C24 30 28 26 28 20C28 14 20 6 20 6Z" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="20" r="3" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
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
                  <text x="20" y="30" textAnchor="middle" fontSize="32" fontWeight="900" fill="#FFD700" fontFamily="Arial, sans-serif">$</text>
                </svg>
              </div>
              <div className="feature-text-large">15%</div>
              <div className="feature-text-small initial-downpayment-text">INITIAL DOWNPAYMENT</div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L32 8L32 24L20 32L8 24L8 8Z" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="1.5" fill="#FFD700"/>
                </svg>
              </div>
              <div className="feature-text limited-discounts-text">LIMITED TIME DISCOUNTS</div>
            </div>
          </div>
        </div>
        <div className="grid-cta-section">
          <button className="grid-cta-button">Get in Touch</button>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="contact-icons">
        <div className="contact-icon phone-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06612 2.16708 8.43376 2.48353C8.8014 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="contact-icon whatsapp-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
          </svg>
        </div>
      </div>

    </div>
  );
}

export default DownPayment;
