import React from 'react';
import './ExploreBuilding.css';

const ExploreBuilding = () => {
  return (
    <div className="explore-building-page">
      {/* Background Building Image */}
      <div className="building-background">
        <div className="building-image"></div>
      </div>

      {/* Top Left Controls */}
      <div className="top-left-controls">
        <div className="building-title">OASIS PALM TOWER</div>
        <div className="control-buttons">
          <button className="control-btn elevation-btn">
            <span>Elevation</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="control-btn filter-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Top Right Controls */}
      <div className="top-right-controls">
        <div className="icon-buttons">
          <button className="icon-btn amenities-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.09 8.26L19 9L14 13.74L15.18 20L10 16.77L4.82 20L6 13.74L1 9L7.91 8.26L10 2Z" fill="currentColor"/>
            </svg>
            <span>Amenities</span>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1V3M10 17V19M3.22 3.22L4.64 4.64M15.36 15.36L16.78 16.78M1 10H3M17 10H19M3.22 16.78L4.64 15.36M15.36 4.64L16.78 3.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="currentColor"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 12h14M3 6h14M3 18h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <button className="about-btn">
          <span>About Oasis Palm Tower</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7 3L13 9L7 15M13 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom Left - Developer Info */}
      <div className="bottom-left-info">
        <div className="developer-text">A Project by</div>
        <div className="developer-logo">ALMAYMAAR</div>
      </div>

      {/* Bottom Center - Rotate View */}
      <div className="bottom-center-controls">
        <button className="rotate-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1 4V10H7M19 16V10H13M13 10L19 4M7 4L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Rotate View</span>
        </button>
      </div>

      {/* Bottom Right - Contact Info */}
      <div className="bottom-right-controls">
        <div className="contact-buttons">
          <button className="contact-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 6V10L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="contact-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M18 6L10 11L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="contact-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06612 2.16708 8.43376 2.48353C8.8014 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreBuilding;

