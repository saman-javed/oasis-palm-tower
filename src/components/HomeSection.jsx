import React, { useRef, useEffect } from 'react';
import '../App.css';

function HomeSection() {
  const videoRef = useRef(null);

  // Pause video when not visible (optimizes performance)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // autoplay blocked — happens on some devices, OK
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Background Video */}
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

