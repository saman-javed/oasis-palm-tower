import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './About.css';

function About() {
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    comment: ''
  });
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Request:', registerForm);
    setShowRegisterModal(false);
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


  return (
    <div className="about-page">
      <Navbar activeSection="about" />
      
      {/* Background */}
      <div className="about-background"></div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <h1 className="about-title">Oasis Palm Tower</h1>
          <h2 className="about-subtitle">A LUXURY DEVELOPMENT IN FAISAL HILLS, ISLAMABAD</h2>
          
          <div className="about-text">
            <p className="about-paragraph">
              Oasis Palm Tower is a unique development located in Faisal Hills, Islamabad. This exceptional project combines luxury hotels, premium apartment rooms, modern corporate offices, and ground floor commercial shops - all in one magnificent building. It's not just a building — it's a complete lifestyle plaza where you can live, work, shop, and stay.
            </p>
            
            <p className="about-paragraph">
              This project is proudly developed by Taiba Developers, under the leadership of Ch. Waqas Shafique, who is not only the CEO but also the main developer behind this vision. His passion for real estate and commitment to quality construction can be seen in every detail of the project.
            </p>
            
            <p className="about-paragraph">
              <strong>Our Story</strong><br/>
              Ch. Waqas Shafique has been involved in real estate and development for years, with several successful town projects in Sadiqabad and Rahim Yar Khan. He has built his name through hard work, honesty, and a dedication to delivering exactly what's promised.
            </p>
            
            <p className="about-paragraph">
              Apart from real estate, he also owns one of the largest iron and steel businesses in the region — a strong foundation that helps ensure top-quality materials and durable construction in every project. Oasis Palm Tower is a reflection of that same strength, vision, and trust.
            </p>
            
            <p className="about-paragraph">
              <strong>The Concept</strong><br/>
              Oasis Palm Tower is a revolutionary development that combines distinct uses in one building:
            </p>
            
            <p className="about-paragraph">
              <strong>1. Luxury Hotels:</strong> Experience world-class hospitality with premium hotel rooms designed for comfort and elegance.
            </p>
            
            <p className="about-paragraph">
              <strong>2. Premium Apartments:</strong> Luxury apartment rooms with private terraces, panoramic views, and high-quality finishing that redefine modern living. Every apartment is designed with elegance and attention to detail.
            </p>
            
            <p className="about-paragraph">
              <strong>3. Corporate Offices:</strong> Modern, well-designed office spaces perfect for businesses looking for a prime location in Faisal Hills, Islamabad.
            </p>
            
            <p className="about-paragraph">
              <strong>4. Ground Floor Shops:</strong> Commercial shops on the ground floor, making Oasis Palm Tower a true plaza where you can buy shops and establish your business. This is your opportunity to own a piece of prime commercial real estate in one of Islamabad's most desirable locations.
            </p>
            
            <p className="about-paragraph">
              The project includes amazing rooftop amenities: Rooftop Swimming Pool, Rooftop Restaurant, Modern Gym & Gaming Zone, 24/7 Security & Smart Access, Dedicated Parking and Power Backup.
            </p>
            
            <p className="about-paragraph">
              <strong>Location Advantage</strong><br/>
              Located in the heart of Faisal Hills, Islamabad, Oasis Palm Tower is surrounded by some of the best attractions and facilities in the area: Roots International School, Arc Monument, Glow Park, Children's Play Park, Civic Center, Petrol Pump & Service Stations, plus stunning Margalla Hills Views. Everything you need is just a few minutes away — from schools and parks to entertainment and daily essentials.
            </p>
            
            <p className="about-paragraph">
              <strong>Our Mission</strong><br/>
              Our mission is simple — to deliver a lifestyle that speaks of class and comfort, not just another building. We believe in trust, quality, and long-term relationships with our clients. At Oasis Palm Tower, we don't just build buildings — we build dreams, and we make sure they last for generations.
            </p>
            
            <p className="about-paragraph">
              <strong>A Name You Can Trust</strong><br/>
              From Sadiqabad to Islamabad, Ch. Waqas Shafique Developers have earned people's trust through hard work, honesty, and vision. Oasis Palm Tower is the next step in that journey — a project built on passion, promise, and perfection.
            </p>
          </div>
          
          <div className="about-cta-section">
            <button className="about-cta-button">Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button 
          className="action-btn"
          onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank')}
          title="Get Directions"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C7.24 2 5 4.24 5 7C5 11.25 10 18 10 18C10 18 15 11.25 15 7C15 4.24 12.76 2 10 2ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <button 
          className="action-btn"
          onClick={() => setShowRegisterModal(true)}
          title="Register Request"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H4C2.9 16 2 15.1 2 14V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M18 6L10 11L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

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
                <label htmlFor="firstName-about">First Name</label>
                <input
                  type="text"
                  id="firstName-about"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName-about">Last Name</label>
                <input
                  type="text"
                  id="lastName-about"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber-about">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber-about"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email-about">Email</label>
                <input
                  type="email"
                  id="email-about"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment-about">Comment</label>
                <textarea
                  id="comment-about"
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

export default About;
