import React from 'react';
import ceoImage from '../assets/CEO.jpg';
import '../pages/Developer.css';

function DeveloperSection({ variant = 'full' }) {
  // variant can be 'full' (for pages) or 'compact' (for App.jsx home page)
  const isCompact = variant === 'compact';
  
  return (
    <section id="developer" className="developer-page">
      <div className="developer-background"></div>
      <div className="developer-section">
        <div className="developer-content">
          {isCompact ? (
            <>
              {/* Left Side - Image */}
              <div className="developer-image-container">
                <div className="developer-image-placeholder">
                  <div className="developer-image">
                    <img src={ceoImage} alt="Ch. Waqas Shafique" className="developer-photo" />
                  </div>
                </div>
              </div>
              
              {/* Right Side - Text Content */}
              <div className="developer-text-container">
                <h1 className="developer-title">CEO's Vision</h1>
                
                <div className="developer-text">
                  <p className="developer-paragraph">
                    Ch. Waqas Shafique is the Founder and CEO of Taiba Developers, and the visionary behind Oasis Palm Tower. Starting from Sadiqabad, he has built a strong reputation through successful residential and commercial projects in Sadiqabad and Rahim Yar Khan, earning trust through hard work, honesty, and quality construction. Beyond real estate, he owns one of the largest iron and steel businesses in the region, ensuring premium-grade materials for every project. Under his leadership, Oasis Palm Tower brings modern luxury living to Faisal Hills, Islamabad, reflecting class, innovation, and lasting value. With plans for a new high-rise project in 2026, Taiba Developers continues to set standards for modern architecture and lifestyle excellence.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="developer-title">Developer</h1>
              
              <div className="developer-logo">
                <div className="logo-diamond"></div>
                <h2 className="company-name">Ch. Waqas Shafique</h2>
                <div className="logo-underline"></div>
              </div>
              
              <div className="developer-text">
                <p className="developer-paragraph">
                  Ch. Waqas Shafique is the Founder and CEO of Taiba Developers, and the visionary mind behind Oasis Palm Tower. Known for his commitment, honesty, and excellence in real estate, he has built a strong reputation as one of the most trusted developers in South Punjab and Islamabad.
                </p>
                
                <p className="developer-paragraph">
                  <strong>A Journey of Vision and Hard Work</strong><br/>
                  Starting from Sadiqabad, Ch. Waqas Shafique began his journey with small-scale town projects and quickly earned recognition for delivering high-quality developments on time. Over the years, he has successfully completed several residential and commercial town projects in Sadiqabad and Rahim Yar Khan, each standing as a symbol of trust and quality construction.
                </p>
                
                <p className="developer-paragraph">
                  Beyond development, he also owns one of the largest iron and steel businesses in the region — providing strong industrial support and ensuring premium-grade materials for every project under his supervision.
                </p>
                
                <p className="developer-paragraph">
                  <strong>Oasis Palm Tower – A Landmark of Excellence</strong><br/>
                  Under his leadership, Oasis Palm Tower was launched with a clear mission: to bring modern luxury living to Faisal Hills, Islamabad, through a project that reflects class, innovation, and lasting value. Every part of the tower — from its design to its finishing — shows his dedication to creating something timeless for both residents and investors.
                </p>
                
                <p className="developer-paragraph">
                  <strong>The Future Ahead</strong><br/>
                  With the success of Oasis Palm Tower, Ch. Waqas Shafique and his team are now preparing for their next big milestone in 2026 — a new high-rise and residential project in Islamabad, which will once again set new standards for modern architecture and lifestyle. Insha'Allah, this upcoming project will continue the legacy of trust, quality, and excellence that Taiba Developers are known for.
                </p>
              </div>
              
              <div className="developer-cta-section">
                <button className="developer-cta-button">Get in Touch</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DeveloperSection;

