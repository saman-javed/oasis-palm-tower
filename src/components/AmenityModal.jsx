import React, { useState, useEffect } from 'react';
import './ParkingModal.css';

// Placeholder images for different amenities
const amenityImages = {
  parking: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  ],
  gym: [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
  ],
  pool: [
    'https://images.unsplash.com/photo-1576610616656-d3aa24d1d398?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551524164-6cf77f5e7f8a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576610616656-d3aa24d1d398?w=800&h=600&fit=crop',
  ],
  gaming: [
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
  ],
};

// Text overlays for different amenities
const amenityTextOverlays = {
  parking: 'Dedicated floors for parking',
  gym: 'State-of-the-art fitness center',
  pool: 'Luxurious swimming pool',
  gaming: 'Modern gaming lounge',
};

const AmenityModal = ({ isOpen, onClose, amenityId, amenityName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const images = amenityImages[amenityId] || amenityImages.parking;
  const textOverlay = amenityTextOverlays[amenityId] || amenityName;

  // Reset to first image when amenity changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setRotation(0);
    }
  }, [amenityId, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setRotation(0);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setRotation(0);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, images.length]);

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setRotation(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setRotation(0);
  };

  return (
    <div className="parking-modal-overlay" onClick={onClose}>
      <div className="parking-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Main Image Display */}
        <div className="parking-main-image-container">
          {/* Left Navigation Arrow */}
          <button className="parking-nav-arrow parking-nav-arrow-left" onClick={handlePrevImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Main Image */}
          <div className="parking-main-image-wrapper">
            <img 
              src={images[currentImageIndex]} 
              alt={`${amenityName} view ${currentImageIndex + 1}`}
              className="parking-main-image"
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            {/* Text Overlay */}
            <div className="parking-image-text-overlay">
              {textOverlay}
            </div>
            
            {/* Progress Indicator - Inside Image Container at Bottom Center */}
            <div className="parking-progress-container">
              <div className="parking-progress-bar">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`parking-progress-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setRotation(0);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button className="parking-nav-arrow parking-nav-arrow-right" onClick={handleNextImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmenityModal;

