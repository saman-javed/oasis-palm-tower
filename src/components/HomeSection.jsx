import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import buildingImage from '../assets/building-hero1.jpeg';

function HomeSection() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Play video when showVideo is true
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay blocked — happens on some devices, OK
      });
    }
  }, [showVideo]);

  // Pause video when not visible (optimizes performance)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && showVideo) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [showVideo]);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  return (
    <section id="home" className="home-section">
      {/* Background Building Image (shown by default) */}
      {!showVideo && (
        <div className="video-container">
          <img
            src={buildingImage}
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
          >
            <source src="/oasis-palm-tower.mp4" type="video/mp4" />
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
          
          {/* Watch Video Button (only shown when image is displayed) */}
          {!showVideo && (
            <button className="watch-video-btn" onClick={handleWatchVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
              Watch Video
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

