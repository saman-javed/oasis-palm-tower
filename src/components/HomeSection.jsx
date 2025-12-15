import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import buildingImage from '../assets/building-hero1.jpeg';
import buildingImage2 from '../assets/build1.png';

function HomeSection({ showVideo = false }) {
  const videoRef = useRef(null);

  // Play video when showVideo is true, pause when false
  useEffect(() => {
    if (videoRef.current) {
      if (showVideo) {
        videoRef.current.play().catch(() => {
          // autoplay blocked — happens on some devices, OK
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset to beginning
      }
    }
  }, [showVideo]);

  return (
    <section id="home" className="home-section">
      {/* Background Building Image (shown by default) */}
      {!showVideo && (
        <div className="video-container">
          <img
            src={buildingImage2}
            alt="Oasis Palm Tower"
            className="background-video"
          />
          <div className="video-overlay"></div>
        </div>
      )}

      {/* Background Video (shown when Watch Video is clicked) */}
      {showVideo && (
        <div className="video-container">
          <video
            ref={videoRef}
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            controls={false}
          >
            <source src="/1019(1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            OASIS PALM TOWER
          </h1>
          <p className="hero-subtitle">
            A Mountain-Front Investment Promising Up to 25% Annual ROI
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

