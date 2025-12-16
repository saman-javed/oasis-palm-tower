import React, { useState, useEffect } from 'react';
import './ParkingModal.css';

// Placeholder images - using placeholder service for now
const parkingImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
];

const ParkingModal = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev === parkingImages.length - 1 ? 0 : prev + 1));
        setRotation(0);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev === 0 ? parkingImages.length - 1 : prev - 1));
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? parkingImages.length - 1 : prev - 1));
    setRotation(0); // Reset rotation when changing images
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === parkingImages.length - 1 ? 0 : prev + 1));
    setRotation(0); // Reset rotation when changing images
  };


  const handleRotateView = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Group images into rows of 3
  const imageRows = [];
  for (let i = 0; i < parkingImages.length; i += 3) {
    imageRows.push(parkingImages.slice(i, i + 3));
  }

  return (
    <div className="parking-modal-overlay" onClick={onClose}>
      <div className="parking-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="parking-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

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
              src={parkingImages[currentImageIndex]} 
              alt={`Parking view ${currentImageIndex + 1}`}
              className="parking-main-image"
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            {/* Text Overlay */}
            <div className="parking-image-text-overlay">
              Dedicated floors for parking
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button className="parking-nav-arrow parking-nav-arrow-right" onClick={handleNextImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="parking-progress-container">
          <div className="parking-progress-bar">
            {parkingImages.map((_, index) => (
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

        {/* Rotate View Button */}
        <div className="parking-controls">
          <button className="parking-rotate-btn" onClick={handleRotateView}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 2.5C16.5 1.5 15 1 13.5 1C10.5 1 8 3.5 8 6.5V9M2.5 17.5C3.5 18.5 5 19 6.5 19C9.5 19 12 16.5 12 13.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M17.5 7.5L17.5 2.5L12.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 12.5L2.5 17.5L7.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Rotate View
          </button>
        </div>

        {/* Gallery Grid - 3 images per row */}
        <div className="parking-gallery-container">
          <div className="parking-gallery-grid">
            {parkingImages.map((image, index) => (
              <div
                key={index}
                className={`parking-gallery-item ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setRotation(0);
                }}
              >
                <img src={image} alt={`Parking ${index + 1}`} className="parking-gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingModal;

