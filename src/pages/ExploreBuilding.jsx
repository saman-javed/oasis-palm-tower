import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreBuilding.css';
import buildingImage from '../assets/image.png';
import parkingImg from '../assets/emm-parking.png';
import gymImg from '../assets/emm-gym.png';
import poolImg from '../assets/emm-pool.png';
import gamingImg from '../assets/emm-gaming.png';
import logo from '../assets/logo1.png';

// Amenities data
const amenities = [
  {
    id: 'parking',
    name: 'Parking',
    image: parkingImg,
  },
  {
    id: 'gym',
    name: 'Gym',
    image: gymImg,
  },
  {
    id: 'pool',
    name: 'Pool',
    image: poolImg,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    image: gamingImg,
  },
];

const floors = [
  { 
    id: 'pent-house-6th-floor', 
    name: 'Pent House 6th Floor', 
    detail: '2 Units',
    points: '560,190 1350,190 1350,250 560,250'
  },
  { 
    id: 'apartment-5th-floor', 
    name: 'Apartment 5th Floor', 
    detail: '8 Units',
    points: '565,250 1340,250 1340,380 565,380'
  },
  { 
    id: 'apartment-4th-floor', 
    name: 'Apartment 4th Floor', 
    detail: '14 Units',
    points: '565,370 1340,370 1340,490 565,490'
  },
  { 
    id: 'apartment-3rd-floor', 
    name: 'Apartment 3rd Floor', 
    detail: '14 Units',
    points: '565,490 1345,490 1345,620 565,620'
  },
  { 
    id: 'apartment-2nd-floor', 
    name: 'Apartment 2nd Floor', 
    detail: '14 Units',
    points: '564,620 1346,620 1345,740 564,740'
  },
  { 
    id: 'office-1st-floor', 
    name: 'Office 1st Floor', 
    detail: '16 Units',
    points: '564,740 1346,740 1346,840 564,840'
  },
  { 
    id: 'shop-ground', 
    name: 'Shop Ground', 
    detail: '18 Units',
    points: '564,835 1346,835 1346,980 564,980'
  },
  { 
    id: 'shop-lower-ground', 
    name: 'Shop Lower Ground', 
    detail: '18 Units',
    points: '564,980 1346,980 1346,1080 564,1080'
  },
];

const ExploreBuilding = () => {
  const navigate = useNavigate();
  const [hoveredFloor, setHoveredFloor] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showAmenities, setShowAmenities] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const svgRef = useRef(null);
  const amenitiesSidebarRef = useRef(null);
  
  // Register form state
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comment: ''
  });
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Register Request:', registerForm);
    setShowRegisterModal(false);
    // Reset form
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
  
  // Close amenities sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAmenities &&
        amenitiesSidebarRef.current &&
        !amenitiesSidebarRef.current.contains(event.target) &&
        !event.target.closest('.amenities-btn')
      ) {
        setShowAmenities(false);
      }
    };

    if (showAmenities) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAmenities]);

  const handleMouseMove = (e, floor) => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: e.clientX - svgRect.left,
        y: e.clientY - svgRect.top
      });
    }
    setHoveredFloor(floor.id);
  };

  const handleMouseLeave = () => {
    setHoveredFloor(null);
  };

  const handleFloorClick = (floorId) => {
    navigate(`/floor/${floorId}`);
  };

  return (
    <div className="explore-building-page">
      {/* Background Building Image */}
      <div className="building-background">
        <img 
          src={buildingImage} 
          alt="Oasis Palm Tower elevation" 
          className="building-photo" 
        />
        <svg
          ref={svgRef}
          className="floor-svg-overlay"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          {floors.map((floor) => (
            <polygon
              key={floor.id}
              className="floor-shape"
              points={floor.points}
              data-image={floor.name}
              data-tip={floor.id}
              onMouseMove={(e) => handleMouseMove(e, floor)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleFloorClick(floor.id)}
            />
          ))}
        </svg>
        {hoveredFloor && (
          <div
            className="floor-tooltip"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          >
            {floors.find(f => f.id === hoveredFloor)?.name} {floors.find(f => f.id === hoveredFloor)?.detail}
          </div>
        )}
      </div>

      {/* Top Left Controls */}
      <div className="top-left-controls">
        <div className="building-title">
          {/* <div className="building-title-main">OASIS</div>
          <div className="building-title-sub">
            <span className="title-line-left"></span>
            <span className="title-text">PALM TOWER</span>
            <span className="title-line-right"></span>
          </div> */}
          <img src={logo} alt="Oasis Palm Tower" className="navbar-logo-img" />
        </div>
      </div>

      {/* Top Right Controls */}
      <div className="top-right-controls">
        <button className="about-btn" onClick={() => {
          if (window.location.pathname === '/') {
            // Already on home page, just scroll
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            }
            // Update URL hash
            window.history.replaceState(null, '', '#about');
          } else {
            // Navigate to home page with hash
            navigate('/#about', { replace: true });
            setTimeout(() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest'
                });
              }
            }, 300);
          }
        }}>
          <span>About Oasis Palm Tower</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7 3L13 9L7 15M13 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom Left - Developer Info */}
      <div className="bottom-left-info">
        <div className="developer-text">
          <span className="developer-prefix">A Project by</span> <span className="developer-name">Taiba Developers</span>
        </div>
      </div>


      {/* Bottom Right - Contact Info */}
      <div className="bottom-right-controls">
        <div className="contact-buttons">
          <button 
            className="contact-btn amenities-btn"
            onClick={() => setShowAmenities(!showAmenities)}
            title="Amenities"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.09 8.26L19 9L14 13.74L15.18 20L10 16.77L4.82 20L6 13.74L1 9L7.91 8.26L10 2Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            className="contact-btn"
            onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank')}
            title="Get Directions"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C7.24 2 5 4.24 5 7C5 11.25 10 18 10 18C10 18 15 11.25 15 7C15 4.24 12.76 2 10 2ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
          <button 
            className="contact-btn"
            onClick={() => setShowRegisterModal(true)}
            title="Register Request"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M18 6L10 11L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Amenities Sidebar */}
      {showAmenities && (
        <div className="amenities-sidebar" ref={amenitiesSidebarRef}>
          <div className="amenities-sidebar-content">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="amenity-sidebar-card">
                {amenity.image ? (
                  <img src={amenity.image} alt={amenity.name} className="amenity-sidebar-image" />
                ) : (
                  <div className="amenity-sidebar-placeholder">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
                      <path d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                )}
                <div className="amenity-sidebar-label">{amenity.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

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
                <label htmlFor="firstName-building">First Name</label>
                <input
                  type="text"
                  id="firstName-building"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName-building">Last Name</label>
                <input
                  type="text"
                  id="lastName-building"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber-building">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber-building"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email-building">Email</label>
                <input
                  type="email"
                  id="email-building"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment-building">Comment</label>
                <textarea
                  id="comment-building"
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
};

export default ExploreBuilding;

