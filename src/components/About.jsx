import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1 className="about-title">VISION</h1>
        <h2 className="about-subtitle">A NEW PARADIGM OF LUXURY LIVING IN ISLAMABAD</h2>
        
        <div className="about-text">
          <p className="about-paragraph">
            Oasis Palm Tower is not just a building — it's a dream coming to life in Faisal Hills, Islamabad. A place where luxury, comfort, and modern living come together to create something truly special.
          </p>
          
          <p className="about-paragraph">
            This project is proudly developed by Taiba Developers, under the leadership of Ch. Waqas Shafique, who is not only the CEO but also the main developer behind this vision. His passion for real estate and commitment to quality construction can be seen in every detail of the project.
          </p>
        </div>
        
        <div className="about-cta-section">
          <button className="about-cta-button">Get in Touch</button>
        </div>
      </div>
    </div>
  );
}

export default About;
