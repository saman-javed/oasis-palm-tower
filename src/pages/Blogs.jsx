import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Blogs.css';

function Blogs() {
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

  useEffect(() => {
    // Enable scrolling on blog pages - these are separate pages, not sections
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.overflowY = 'auto';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';
    
    return () => {
      // Reset on unmount
      document.documentElement.style.overflowY = '';
      document.documentElement.style.height = '';
      document.body.style.overflowY = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="blogs-page">
      <Navbar />
      
      {/* Background */}
      <div className="blogs-background"></div>

      {/* Main Content */}
      <div className="blogs-container">
        {/* Left Column - Featured Blog */}
        <div className="featured-blog">
          <div className="blog-card featured">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Oasis Palm Tower" />
              <div className="blog-icon"></div>
              <div className="blog-overlay">
                <p>Oasis Palm Tower - A Three-in-One Luxury Development in Faisal Hills, Islamabad</p>
              </div>
            </div>
            <div className="blog-content">
              <h2>Oasis Palm Tower - Your Complete Lifestyle Destination</h2>
              <p className="blog-description">
                Oasis Palm Tower is a unique three-in-one development located in Faisal Hills, Islamabad. This exceptional project combines luxury hotels, premium apartment rooms, modern corporate offices, and ground floor commercial shops - all in one magnificent building. Experience the perfect blend of residential comfort, business convenience, and commercial opportunities...
              </p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/oasis-palm-tower-complete-lifestyle')}
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Blog List */}
        <div className="blog-sidebar">
          <div className="blog-card small">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Oasis Palm Tower Apartments" />
            </div>
            <div className="blog-content">
              <p>Luxury Apartments at Oasis Palm Tower - Modern Living in Faisal Hills</p>
              <button 
                className="read-more-btn small"
                onClick={() => navigate('/blog/luxury-apartments-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="blog-card small">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Oasis Palm Tower Shops" />
            </div>
            <div className="blog-content">
              <p>Commercial Shops at Oasis Palm Tower - Your Business Opportunity in Faisal Hills</p>
              <button 
                className="read-more-btn small"
                onClick={() => navigate('/blog/commercial-shops-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="blog-card small">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Oasis Palm Tower Offices" />
            </div>
            <div className="blog-content">
              <p>Corporate Offices at Oasis Palm Tower - Prime Business Location in Islamabad</p>
              <button 
                className="read-more-btn small"
                onClick={() => navigate('/blog/corporate-offices-islamabad')}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Blog Section */}
      <div className="additional-blogs-section">
        <div className="additional-blogs-container">
          <div className="additional-blog-card">
            <div className="additional-blog-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower" />
              <div className="blog-overlay-text">
                <div className="blog-tag">BLOG</div>
                <div className="blog-subtitle">Oasis Palm Tower - Three-in-One Development in Faisal Hills</div>
              </div>
            </div>
            <div className="additional-blog-content">
              <h3>Oasis Palm Tower - Three-in-One Development in Faisal Hills</h3>
              <p>Located in Faisal Hills, Islamabad, Oasis Palm Tower is a unique three-in-one development featuring luxury hotels, premium apartments, modern offices, and ground floor commercial shops. Experience the perfect blend of residential, commercial, and hospitality in one prime location...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/three-in-one-development')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="additional-blog-card">
            <div className="additional-blog-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower Plaza" />
              <div className="blog-overlay-text">
                <div className="blog-tag">BLOG</div>
                <div className="blog-subtitle">Oasis Palm Tower - Your Plaza in Faisal Hills</div>
              </div>
            </div>
            <div className="additional-blog-content">
              <h3>Oasis Palm Tower - Your Plaza in Faisal Hills, Islamabad</h3>
              <p>Oasis Palm Tower is more than just a building - it's a complete lifestyle plaza in Faisal Hills, Islamabad. With hotels, apartments, offices, and shops all under one roof, this is your opportunity to own a piece of prime real estate in one of Islamabad's most desirable locations...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/your-plaza-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="additional-blog-card">
            <div className="additional-blog-image">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower Investment" />
              <div className="blog-overlay-text">
                <div className="blog-tag">BLOG</div>
                <div className="blog-subtitle">Oasis Palm Tower - A Smart Investment in Faisal Hills</div>
              </div>
            </div>
            <div className="additional-blog-content">
              <h3>Oasis Palm Tower - A Smart Investment in Faisal Hills</h3>
              <p>Invest in Oasis Palm Tower, located in Faisal Hills, Islamabad. This three-in-one development offers exceptional ROI opportunities with its unique combination of hotels, residential apartments, corporate offices, and commercial shops. Own a piece of prime real estate in Islamabad's fastest-growing area...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/smart-investment-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Blog Section */}
      <div className="new-blogs-section">
        <div className="new-blogs-container">
          <div className="new-blog-card">
            <div className="new-blog-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower" />
              <div className="new-blog-overlay-text">
                <div className="new-blog-tag">BLOG</div>
                <div className="new-blog-subtitle">Why Choose Oasis Palm Tower in Faisal Hills</div>
              </div>
            </div>
            <div className="new-blog-content">
              <h3>Why Choose Oasis Palm Tower in Faisal Hills</h3>
              <p>Oasis Palm Tower presents an exceptional opportunity in Faisal Hills, Islamabad. This three-in-one development combines luxury hotels, premium apartments, modern offices, and commercial shops. Located in one of Islamabad's prime areas with excellent connectivity and amenities...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/why-choose-oasis-palm-tower')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="new-blog-card">
            <div className="new-blog-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Faisal Hills Location" />
              <div className="new-blog-overlay-text">
                <div className="new-blog-tag">BLOG</div>
                <div className="new-blog-subtitle">Oasis Palm Tower - Prime Location in Faisal Hills</div>
              </div>
            </div>
            <div className="new-blog-content">
              <h3>Oasis Palm Tower - Prime Location in Faisal Hills, Islamabad</h3>
              <p>Oasis Palm Tower is strategically located in Faisal Hills, Islamabad - one of the city's most desirable and rapidly developing areas. With easy access to major landmarks, schools, parks, and business districts, this location offers unmatched convenience and value...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/prime-location-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="new-blog-card">
            <div className="new-blog-image">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower Features" />
              <div className="new-blog-overlay-text">
                <div className="new-blog-tag">BLOG</div>
                <div className="new-blog-subtitle">Top 5 Reasons to Choose Oasis Palm Tower</div>
              </div>
            </div>
            <div className="new-blog-content">
              <h3>Top 5 Reasons to Choose Oasis Palm Tower</h3>
              <p>Oasis Palm Tower in Faisal Hills, Islamabad offers a unique three-in-one concept with hotels, apartments, offices, and shops. Discover why this development stands out with its prime location, modern amenities, excellent connectivity, and exceptional investment potential...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/top-5-reasons-choose')}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Final Blog Section */}
      <div className="final-blogs-section">
        <div className="final-blogs-container">
          <div className="final-blog-card">
            <div className="final-blog-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower" />
              <div className="final-blog-overlay-text">
                <div className="final-blog-tag">BLOG</div>
                <div className="final-blog-subtitle">Oasis Palm Tower - Your Ultimate Destination in Faisal Hills</div>
              </div>
            </div>
            <div className="final-blog-content">
              <h3>Oasis Palm Tower - Your Ultimate Destination in Faisal Hills</h3>
              <p>Located in Faisal Hills, Islamabad, Oasis Palm Tower offers a unique three-in-one lifestyle combining luxury hotels, premium apartments, modern offices, and commercial shops. Experience the perfect blend of residential comfort, business convenience, and commercial opportunities all in one prime location...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/ultimate-destination-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="final-blog-card">
            <div className="final-blog-image">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower Investment" />
              <div className="final-blog-overlay-text">
                <div className="final-blog-tag">BLOG</div>
                <div className="final-blog-subtitle">ROI Opportunities at Oasis Palm Tower</div>
              </div>
            </div>
            <div className="final-blog-content">
              <h3>ROI Opportunities at Oasis Palm Tower</h3>
              <p>Oasis Palm Tower in Faisal Hills, Islamabad presents exceptional ROI opportunities. With its unique three-in-one concept featuring hotels, apartments, offices, and shops, investors can benefit from multiple revenue streams in one prime location...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/roi-opportunities')}
              >
                Read More
              </button>
            </div>
          </div>

          <div className="final-blog-card">
            <div className="final-blog-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Oasis Palm Tower Luxury" />
              <div className="final-blog-overlay-text">
                <div className="final-blog-tag">BLOG</div>
                <div className="final-blog-subtitle">Oasis Palm Tower - Luxury Redefined in Faisal Hills</div>
              </div>
            </div>
            <div className="final-blog-content">
              <h3>Oasis Palm Tower - Luxury Redefined in Faisal Hills</h3>
              <p>Oasis Palm Tower, developed by Taiba Developers, is located in Faisal Hills, Islamabad. This three-in-one development redefines luxury living with its combination of hotels, premium apartments, modern offices, and commercial shops, all designed with elegance and attention to detail...</p>
              <button 
                className="read-more-btn"
                onClick={() => navigate('/blog/luxury-redefined-faisal-hills')}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Get in Touch Button */}
      <button 
        className="cta-button fixed-cta-button"
        onClick={() => setShowRegisterModal(true)}
      >
        Get in Touch
      </button>

      {/* Contact Icons */}
      <div className="contact-icons">
        <button 
          onClick={() => window.open('https://maps.app.goo.gl/WMjzyJq1Fpoy4zwL7?g_st=ic', '_blank', 'noopener,noreferrer')}
          className="contact-icon directions-icon"
          title="Get Directions"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
          <span className="contact-icon-text">Get Directions</span>
        </button>
        <button 
          className="contact-icon register-icon"
          onClick={() => setShowRegisterModal(true)}
          title="Register Request"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
          </svg>
          <span className="contact-icon-text">Register Request</span>
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
                <label htmlFor="firstName-blog">First Name</label>
                <input
                  type="text"
                  id="firstName-blog"
                  name="firstName"
                  value={registerForm.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName-blog">Last Name</label>
                <input
                  type="text"
                  id="lastName-blog"
                  name="lastName"
                  value={registerForm.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="phoneNumber-blog">Phone Number</label>
                <div className="phone-input-wrapper">
                  <div className="phone-country-code">
                    <span className="phone-flag">🇵🇰</span>
                    <span className="phone-code">+92</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber-blog"
                    name="phoneNumber"
                    value={registerForm.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="300 1234567"
                    required
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email-blog">Email</label>
                <input
                  type="email"
                  id="email-blog"
                  name="email"
                  value={registerForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="comment-blog">Comment</label>
                <textarea
                  id="comment-blog"
                  name="comment"
                  value={registerForm.comment}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>
              <button type="submit" className="register-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Blogs;
