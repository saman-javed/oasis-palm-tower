import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Amenities.css';
import parkingImg from '../assets/emm-parking.png';
import gymImg from '../assets/emm-gym.png';
import poolImg from '../assets/emm-pool.png';
import gamingImg from '../assets/emm-gaming.png';

const Amenities = () => {
  const navigate = useNavigate();

  const amenities = [
    {
      id: 'parking',
      name: 'Parking',
      image: parkingImg,
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      image: null, // Placeholder - can be added later
    },
    {
      id: 'lobby',
      name: 'Lobby',
      image: null, // Placeholder - can be added later
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

  return (
    <div className="amenities-page">
      {/* Top Header */}
      <div className="amenities-header">
        <div></div>
        <button className="amenities-header-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 1L11 7H17L12 10L14 16L9 12L4 16L6 10L1 7H7L9 1Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          Amenities
        </button>
        <button className="amenities-close-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Amenities Grid */}
      <div className="amenities-container">
        <div className="amenities-grid">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="amenity-card">
              {amenity.image ? (
                <img src={amenity.image} alt={amenity.name} className="amenity-image" />
              ) : (
                <div className="amenity-placeholder">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M30 5L35 20L50 25L35 30L30 45L25 30L10 25L25 20L30 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              )}
              <div className="amenity-label">{amenity.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;

