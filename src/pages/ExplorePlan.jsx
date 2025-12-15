import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ExplorePlan.css';
import shopCloth from '../assets/shop-cloth.jpg';
import shopCosmetics from '../assets/shop-cosmetics.jpg';
import shopShoes from '../assets/shop-shoes.jpg';
import shopJwellery from '../assets/shop-jwellery.jpg';
// Office images (background removed)
import office001 from '../assets/OFFICE_001-removebg-preview.png';
import office002 from '../assets/OFFICE_002-removebg-preview.png';
import office003 from '../assets/OFC_001__1_-removebg-preview.png';
import office004 from '../assets/OFC_002__1_-removebg-preview.png';
import office005 from '../assets/OFC_003-removebg-preview.png';
import office006 from '../assets/OFFICE_2001-removebg-preview.png';
import office007 from '../assets/OFFICE_2002-removebg-preview.png';
import office008 from '../assets/OFFICE_2003-removebg-preview.png';
import off11 from '../assets/off11.jpg';
// Apartment images (background removed)
import apartment1Bed from '../assets/SINGLE_BD_1-removebg-preview.png';
import apartment2Bed from '../assets/2_BED__001-removebg-preview.png';
import apartment3Bed from '../assets/3bd_003-removebg-preview.png';
// Amenities images
import parkingImg from '../assets/emm-parking.png';
import gymImg from '../assets/emm-gym.png';
import poolImg from '../assets/emm-pool.png';
import gamingImg from '../assets/emm-gaming.png';
import logo from '../assets/logo1.png';

const ExplorePlan = () => {
  const navigate = useNavigate();
  const { floorId, unitId } = useParams();
  const [showAmenities, setShowAmenities] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    // Open by default on larger screens, closed on mobile (below 900px)
    return window.innerWidth > 900;
  });
  const amenitiesSidebarRef = useRef(null);
  const sidebarRef = useRef(null);
  
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

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  const isOffice = floorId?.includes('office');
  const isApartment = floorId?.includes('apartment');

  // Handle window resize to close sidebar below 900px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  // Close sidebar when clicking outside (on screens below 900px)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('.office-sidebar-toggle-btn') &&
        window.innerWidth <= 900
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen && window.innerWidth <= 900) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Close amenities sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAmenities &&
        amenitiesSidebarRef.current &&
        !amenitiesSidebarRef.current.contains(event.target) &&
        !event.target.closest('.office-amenities-btn') &&
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

  // Map office unit IDs to specific images
  const officeImageMap = {
    'office-1': office003,
    'office-2': office002,
    'office-3': office001,
    'office-4': office006,
    'office-5': office008,
    'office-6': office007,
    'office-7': office002,
    'office-8': office004,
    'office-9': office001, // Reuse images if more than 8 offices
    'office-10': office003,
    'office-11': office004,
    'office-12': office005,
    'office-13': office003,
    'office-14': office004,
    'office-15': office005,
    'office-16': office002,
  };

  const shopTypes = [
    {
      id: 'cloth',
      name: 'Cloth Shop',
      image: shopCloth,
      description: 'Fashion & Apparel'
    },
    {
      id: 'cosmetics',
      name: 'Cosmetics Shop',
      image: shopCosmetics,
      description: 'Beauty & Personal Care'
    },
    {
      id: 'shoes',
      name: 'Shoes Shop',
      image: shopShoes,
      description: 'Footwear & Accessories'
    },
    {
      id: 'jwellery',
      name: 'Jewelry Shop',
      image: shopJwellery,
      description: 'Fine Jewelry & Accessories'
    }
  ];

  // Office data from FloorDetail
  const office1stFloorUnits = [
    { id: 'office-1', name: 'Office 1', area: '498 SFT' },
    { id: 'office-2', name: 'Office 2', area: '555 SFT' },
    { id: 'office-3', name: 'Office 3', area: '430 SFT' },
    { id: 'office-4', name: 'Office 4', area: '528 SFT' },
    { id: 'office-5', name: 'Office 5', area: '528 SFT' },
    { id: 'office-6', name: 'Office 6', area: '430 SFT' },
    { id: 'office-7', name: 'Office 7', area: '555 SFT' },
    { id: 'office-8', name: 'Office 8', area: '498 SFT' },
    { id: 'office-9', name: 'Office 9', area: '490 SFT' },
    { id: 'office-10', name: 'Office 10', area: '470 SFT' },
    { id: 'office-11', name: 'Office 11', area: '470 SFT' },
    { id: 'office-12', name: 'Office 12', area: '470 SFT' },
    { id: 'office-13', name: 'Office 13', area: '470 SFT' },
    { id: 'office-14', name: 'Office 14', area: '470 SFT' },
    { id: 'office-15', name: 'Office 15', area: '470 SFT' },
    { id: 'office-16', name: 'Office 16', area: '490 SFT' },
  ];

  // Apartment data from FloorDetail
  const apartment2ndFloorUnits = [
    { id: 'apt-2-1', name: 'Apartment 1', area: '778 SFT', bedCount: 2 },
    { id: 'apt-2-2', name: 'Apartment 2', area: '532 SFT', bedCount: 1 },
    { id: 'apt-2-3', name: 'Apartment 3', area: '720 SFT', bedCount: 2 },
    { id: 'apt-2-4', name: 'Apartment 4', area: '720 SFT', bedCount: 2 },
    { id: 'apt-2-5', name: 'Apartment 5', area: '532 SFT', bedCount: 1 },
    { id: 'apt-2-6', name: 'Apartment 6', area: '778 SFT', bedCount: 2 },
    { id: 'apt-2-7', name: 'Apartment 7', area: '485 SFT', bedCount: 1 },
    { id: 'apt-2-8', name: 'Apartment 8', area: '465 SFT', bedCount: 1 },
    { id: 'apt-2-9', name: 'Apartment 9', area: '465 SFT', bedCount: 1 },
    { id: 'apt-2-10', name: 'Apartment 10', area: '465 SFT', bedCount: 1 },
    { id: 'apt-2-11', name: 'Apartment 11', area: '465 SFT', bedCount: 1 },
    { id: 'apt-2-12', name: 'Apartment 12', area: '465 SFT', bedCount: 1 },
    { id: 'apt-2-13', name: 'Apartment 13', area: '465 SFT', bedCount: 1 },
    { id: 'apt-2-14', name: 'Apartment 14', area: '485 SFT', bedCount: 1 },
  ];

  const apartment3rdFloorUnits = [
    { id: 'apt-3-1', name: 'Apartment 1', area: '778 SFT', bedCount: 2 },
    { id: 'apt-3-2', name: 'Apartment 2', area: '532 SFT', bedCount: 1 },
    { id: 'apt-3-3', name: 'Apartment 3', area: '720 SFT', bedCount: 2 },
    { id: 'apt-3-4', name: 'Apartment 4', area: '720 SFT', bedCount: 2 },
    { id: 'apt-3-5', name: 'Apartment 5', area: '532 SFT', bedCount: 1 },
    { id: 'apt-3-6', name: 'Apartment 6', area: '778 SFT', bedCount: 2 },
    { id: 'apt-3-7', name: 'Apartment 7', area: '485 SFT', bedCount: 1 },
    { id: 'apt-3-8', name: 'Apartment 8', area: '465 SFT', bedCount: 1 },
    { id: 'apt-3-9', name: 'Apartment 9', area: '465 SFT', bedCount: 1 },
    { id: 'apt-3-10', name: 'Apartment 10', area: '465 SFT', bedCount: 1 },
    { id: 'apt-3-11', name: 'Apartment 11', area: '465 SFT', bedCount: 1 },
    { id: 'apt-3-12', name: 'Apartment 12', area: '465 SFT', bedCount: 1 },
    { id: 'apt-3-13', name: 'Apartment 13', area: '465 SFT', bedCount: 1 },
    { id: 'apt-3-14', name: 'Apartment 14', area: '485 SFT', bedCount: 1 },
  ];

  const apartment4thFloorUnits = [
    { id: 'apt-4-1', name: 'Apartment 1', area: '778 SFT', bedCount: 2 },
    { id: 'apt-4-2', name: 'Apartment 2', area: '532 SFT', bedCount: 1 },
    { id: 'apt-4-3', name: 'Apartment 3', area: '720 SFT', bedCount: 2 },
    { id: 'apt-4-4', name: 'Apartment 4', area: '720 SFT', bedCount: 2 },
    { id: 'apt-4-5', name: 'Apartment 5', area: '532 SFT', bedCount: 1 },
    { id: 'apt-4-6', name: 'Apartment 6', area: '778 SFT', bedCount: 2 },
    { id: 'apt-4-7', name: 'Apartment 7', area: '485 SFT', bedCount: 1 },
    { id: 'apt-4-8', name: 'Apartment 8', area: '465 SFT', bedCount: 1 },
    { id: 'apt-4-9', name: 'Apartment 9', area: '465 SFT', bedCount: 1 },
    { id: 'apt-4-10', name: 'Apartment 10', area: '465 SFT', bedCount: 1 },
    { id: 'apt-4-11', name: 'Apartment 11', area: '465 SFT', bedCount: 1 },
    { id: 'apt-4-12', name: 'Apartment 12', area: '465 SFT', bedCount: 1 },
    { id: 'apt-4-13', name: 'Apartment 13', area: '465 SFT', bedCount: 1 },
    { id: 'apt-4-14', name: 'Apartment 14', area: '485 SFT', bedCount: 1 },
  ];

  const apartment5thFloorUnits = [
    { id: 'apt-5-2', name: 'Apartment 1', area: '1310 SFT', bedCount: 3 },
    { id: 'apt-5-3', name: 'Apartment 2', area: '720 SFT', bedCount: 2 },
    { id: 'apt-5-4', name: 'Apartment 3', area: '720 SFT', bedCount: 2 },
    { id: 'apt-5-5', name: 'Apartment 4', area: '1310 SFT', bedCount: 3 },
    { id: 'apt-5-7', name: 'Apartment 5', area: '950 SFT', bedCount: 2 },
    { id: 'apt-2-9', name: 'Apartment 6', area: '930 SFT', bedCount: 2 },
    { id: 'apt-2-11', name: 'Apartment 7', area: '930 SFT', bedCount: 2 },
    { id: 'apt-2-13', name: 'Apartment 8', area: '950 SFT', bedCount: 2 },
  ];

  // Get apartment units based on floor
  const getApartmentUnits = () => {
    if (floorId === 'apartment-2nd-floor') return apartment2ndFloorUnits;
    if (floorId === 'apartment-3rd-floor') return apartment3rdFloorUnits;
    if (floorId === 'apartment-4th-floor') return apartment4thFloorUnits;
    if (floorId === 'apartment-5th-floor') return apartment5thFloorUnits;
    return [];
  };

  // Map apartment unit IDs to images (1 bed, 2 bed, or 3 bed based on apartment number and floor)
  const getApartmentImage = (unitId, floorId) => {
    // Get apartment units to find the apartment name
    const apartmentUnits = getApartmentUnits();
    const apartmentData = apartmentUnits.find(apt => apt.id === unitId);
    
    // Extract apartment number from apartment name (e.g., 'Apartment 1' -> 1, 'Apartment 4' -> 4)
    const apartmentNumber = apartmentData 
      ? parseInt(apartmentData.name.match(/\d+/)?.[0] || '0')
      : parseInt(unitId.match(/-(\d+)$/)?.[1] || '0');
    
    // For 5th floor: apartments 1 and 4 use 3 bed, rest use 2 bed
    if (floorId === 'apartment-5th-floor') {
      return (apartmentNumber === 1 || apartmentNumber === 4) 
        ? apartment3Bed 
        : apartment2Bed;
    }
    
    // For floors 2, 3, 4: apartments 1, 3, 4, 6 use 2 bed, others use 1 bed
    return (apartmentNumber === 1 || apartmentNumber === 3 || apartmentNumber === 4 || apartmentNumber === 6) 
      ? apartment2Bed 
      : apartment1Bed;
  };

  // Get floor number for display
  const getFloorNumber = () => {
    if (floorId === 'apartment-2nd-floor') return '2nd Floor';
    if (floorId === 'apartment-3rd-floor') return '3rd Floor';
    if (floorId === 'apartment-4th-floor') return '4th Floor';
    if (floorId === 'apartment-5th-floor') return '5th Floor';
    return '';
  };

  // If it's an apartment and we have a specific unitId, show the detailed apartment plan page
  if (isApartment && unitId) {
    const apartmentUnits = getApartmentUnits();
    const apartmentData = apartmentUnits.find(apt => apt.id === unitId);
    
    if (apartmentData) {
      const apartmentNumber = unitId.match(/-(\d+)$/)?.[1] || '';
      const currentIndex = apartmentUnits.findIndex(apt => apt.id === unitId);
      const apartmentImage = getApartmentImage(unitId, floorId);
      
      const handlePrevApartment = () => {
        if (currentIndex > 0) {
          const prevApartment = apartmentUnits[currentIndex - 1];
          navigate(`/explore-plan/${floorId}/${prevApartment.id}`);
        }
      };

      const handleNextApartment = () => {
        if (currentIndex < apartmentUnits.length - 1) {
          const nextApartment = apartmentUnits[currentIndex + 1];
          navigate(`/explore-plan/${floorId}/${nextApartment.id}`);
        }
      };

      return (
        <div className="explore-plan-page office-plan-page">
          {/* Left Sidebar */}
          {/* Sidebar Toggle Button - Outside (shown when sidebar is closed) */}
          {!isSidebarOpen && (
            <button 
              className="office-sidebar-toggle-btn"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Toggle sidebar"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          <div 
            ref={sidebarRef}
            className={`office-plan-sidebar ${isSidebarOpen ? 'open' : ''}`}
          >
            {/* Brand Logo */}
            <div className="office-brand">
              <h1 className="office-brand-main">OASIS</h1>
              <h2 className="office-brand-sub">PALM TOWER</h2>
              <div className="office-brand-line"></div>
            </div>
            {/* <img src={logo} alt="Oasis Palm Tower" className="navbar-logo-img" /> */}

            {/* Apartment Selector */}
            <div className="office-selector">
              <button className="office-nav-arrow" onClick={handlePrevApartment} disabled={currentIndex === 0}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="office-selector-display">
                {apartmentData.name}
              </div>
              <button className="office-nav-arrow" onClick={handleNextApartment} disabled={currentIndex === apartmentUnits.length - 1}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Apartment Details Panel */}
            <div className="office-details-panel">
              <div className="office-details-header">
                <h3 className="office-details-title">Apartment {apartmentNumber}</h3>
                <button className="office-favorite-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.09 8.26L19 9L14 13.74L15.18 20L10 16.77L4.82 20L6 13.74L1 9L7.91 8.26L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </button>
              </div>
              <div className="office-details-content">
                <div className="office-detail-row">
                  <span className="office-detail-label">Floor:</span>
                  <span className="office-detail-value">
                    {floorId === 'apartment-2nd-floor' ? 'Second Floor' :
                     floorId === 'apartment-3rd-floor' ? 'Third Floor' :
                     floorId === 'apartment-4th-floor' ? 'Fourth Floor' :
                     floorId === 'apartment-5th-floor' ? 'Fifth Floor' :
                     getFloorNumber()}
                  </span>
                </div>
                <div className="office-detail-row">
                  <span className="office-detail-label">Type:</span>
                  <span className="office-detail-value">
                    {apartmentData.bedCount ? `${apartmentData.bedCount} Bed` : 'Apartment'}
                  </span>
                </div>
                <div className="office-detail-row">
                  <span className="office-detail-label">Area:</span>
                  <span className="office-detail-value">{apartmentData.area}</span>
                </div>
              </div>
              <button className="office-interested-btn">Interested</button>
            </div>

            {/* Project By */}
            <div className="office-project-by">
              <p className="office-project-text">A Project by</p>
              <div className="office-developer-logo">
                <span className="office-diamond">◆</span>
                <span className="office-developer-name">TAIBA DEVELOPERS</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`office-plan-main ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
            {/* Top Header - Right Side */}
            <div className="office-plan-top-header">
              <div></div>
              <div className="office-header-right">
                <button className="office-amenities-btn" onClick={() => setShowAmenities(!showAmenities)}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1L11 7H17L12 10L14 16L9 12L4 16L6 10L1 7H7L9 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  Amenities
                </button>
              </div>
            </div>

            {/* Apartment Image Container */}
            <div className="office-plan-image-wrapper" style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
              <img src={apartmentImage} alt={apartmentData.name} className="office-plan-image" />
            </div>

            {/* Bottom Navigation */}
            <div className="office-bottom-nav">
              <button className="office-bottom-btn" onClick={handleResetZoom}>Reset Zoom</button>
              <button className="office-bottom-btn" onClick={() => navigate(`/floor/${floorId}`)}>Back to Layout</button>
            </div>
          </div>

          {/* Right Sidebar - Action Buttons */}
          <div className="office-action-buttons">
            <button className="office-action-btn" title="Zoom In" onClick={handleZoomIn}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="office-action-btn" title="Zoom Out" onClick={handleZoomOut}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              className="office-action-btn" 
              title="Get Directions"
              onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7.24 2 5 4.24 5 7C5 11.25 10 18 10 18C10 18 15 11.25 15 7C15 4.24 12.76 2 10 2ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <button 
              className="office-action-btn" 
              title="Register Request"
              onClick={() => setShowRegisterModal(true)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 4H17C18.1 4 19 4.9 19 6V14C19 15.1 18.1 16 17 16H3C1.9 16 1 15.1 1 14V6C1 4.9 1.9 4 3 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M19 6L10 11L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
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
  }

  // If it's an office and we have a specific unitId, show the detailed office plan page
  if (isOffice && unitId && officeImageMap[unitId]) {
    const officeNumber = unitId.replace('office-', '');
    const officeData = office1stFloorUnits.find(office => office.id === unitId) || { name: `Office ${officeNumber}`, area: 'N/A' };
    const currentIndex = office1stFloorUnits.findIndex(office => office.id === unitId);
    
    const handlePrevOffice = () => {
      if (currentIndex > 0) {
        const prevOffice = office1stFloorUnits[currentIndex - 1];
        navigate(`/explore-plan/${floorId}/${prevOffice.id}`);
      }
    };

    const handleNextOffice = () => {
      if (currentIndex < office1stFloorUnits.length - 1) {
        const nextOffice = office1stFloorUnits[currentIndex + 1];
        navigate(`/explore-plan/${floorId}/${nextOffice.id}`);
      }
    };

    return (
      <div className="explore-plan-page office-plan-page">
        {/* Left Sidebar */}
        {/* Sidebar Toggle Button - Outside (shown when sidebar is closed) */}
        {!isSidebarOpen && (
          <button 
            className="office-sidebar-toggle-btn"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <div 
          ref={sidebarRef}
          className={`office-plan-sidebar ${isSidebarOpen ? 'open' : ''}`}
        >
          {/* Brand Logo */}
          <div className="office-brand">
            <h1 className="office-brand-main">OASIS</h1>
            <h2 className="office-brand-sub">PALM TOWER</h2>
            <div className="office-brand-line"></div>
          </div>

          {/* Office Selector */}
          <div className="office-selector">
            <button className="office-nav-arrow" onClick={handlePrevOffice} disabled={currentIndex === 0}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="office-selector-display">
              {officeData.name}
            </div>
            <button className="office-nav-arrow" onClick={handleNextOffice} disabled={currentIndex === office1stFloorUnits.length - 1}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Office Details Panel */}
          <div className="office-details-panel">
            <div className="office-details-header">
              <h3 className="office-details-title">Office no. {officeNumber}</h3>
              <button className="office-favorite-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.09 8.26L19 9L14 13.74L15.18 20L10 16.77L4.82 20L6 13.74L1 9L7.91 8.26L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
            </div>
            <div className="office-details-content">
              <div className="office-detail-row">
                <span className="office-detail-label">Floor:</span>
                <span className="office-detail-value">1st Floor</span>
              </div>
              <div className="office-detail-row">
                <span className="office-detail-label">Type:</span>
                <span className="office-detail-value">Office</span>
              </div>
              <div className="office-detail-row">
                <span className="office-detail-label">Area:</span>
                <span className="office-detail-value">{officeData.area}</span>
              </div>
            </div>
            <button className="office-interested-btn">Interested</button>
          </div>

          {/* Project By */}
          <div className="office-project-by">
            <p className="office-project-text">A Project by</p>
            <div className="office-developer-logo">
              <span className="office-diamond">◆</span>
              <span className="office-developer-name">TAIBA DEVELOPERS</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`office-plan-main ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
          {/* Top Header - Right Side */}
          <div className="office-plan-top-header">
            <div></div>
            <div className="office-header-right">
              <button className="office-amenities-btn" onClick={() => setShowAmenities(!showAmenities)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L11 7H17L12 10L14 16L9 12L4 16L6 10L1 7H7L9 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                Amenities
              </button>
            </div>
          </div>

          {/* Office Image Container */}
          <div className="office-plan-image-wrapper" style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
            <img src={officeImageMap[unitId]} alt={officeData.name} className="office-plan-image" />
          </div>

          {/* Bottom Navigation */}
          <div className="office-bottom-nav">
            <button className="office-bottom-btn" onClick={handleResetZoom}>Reset Zoom</button>
            <button className="office-bottom-btn" onClick={() => navigate(`/floor/${floorId}`)}>Back to Layout</button>
          </div>
        </div>

          {/* Right Sidebar - Action Buttons */}
          <div className="office-action-buttons">
            <button className="office-action-btn" title="Zoom In" onClick={handleZoomIn}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="office-action-btn" title="Zoom Out" onClick={handleZoomOut}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              className="office-action-btn" 
              title="Get Directions"
              onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7.24 2 5 4.24 5 7C5 11.25 10 18 10 18C10 18 15 11.25 15 7C15 4.24 12.76 2 10 2ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <button 
              className="office-action-btn" 
              title="Register Request"
              onClick={() => setShowRegisterModal(true)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 4H17C18.1 4 19 4.9 19 6V14C19 15.1 18.1 16 17 16H3C1.9 16 1 15.1 1 14V6C1 4.9 1.9 4 3 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M19 6L10 11L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
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
                  <label htmlFor="firstName-office">First Name</label>
                  <input
                    type="text"
                    id="firstName-office"
                    name="firstName"
                    value={registerForm.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-form-group">
                  <label htmlFor="lastName-office">Last Name</label>
                  <input
                    type="text"
                    id="lastName-office"
                    name="lastName"
                    value={registerForm.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-form-group">
                  <label htmlFor="phoneNumber-office">Phone Number</label>
                  <div className="phone-input-wrapper">
                    <div className="phone-country-code">
                      <span className="phone-flag">🇵🇰</span>
                      <span className="phone-code">+92</span>
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber-office"
                      name="phoneNumber"
                      value={registerForm.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="300 1234567"
                      required
                    />
                  </div>
                </div>
                <div className="register-form-group">
                  <label htmlFor="email-office">Email</label>
                  <input
                    type="email"
                    id="email-office"
                    name="email"
                    value={registerForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="register-form-group">
                  <label htmlFor="comment-office">Comment</label>
                  <textarea
                    id="comment-office"
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
      </div>
    );
  }

  // Default: Show shop types grid
  return (
    <div className="explore-plan-page">
      {/* Header */}
      <div className="explore-plan-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        <h1 className="explore-plan-title">Explore Shop Plans</h1>
        <div></div>
      </div>

      {/* Shop Grid */}
      <div className="shop-grid">
        {shopTypes.map((shop) => (
          <div key={shop.id} className="shop-card">
            <div className="shop-image-container">
              <img src={shop.image} alt={shop.name} className="shop-image" />
              <div className="shop-overlay">
                <div className="shop-info">
                  <h3 className="shop-name">{shop.name}</h3>
                  <p className="shop-description">{shop.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePlan;

