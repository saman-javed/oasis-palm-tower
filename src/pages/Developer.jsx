import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Developer.css';

function Developer() {
  const navigate = useNavigate();


  return (
    <div className="developer-page">
      <Navbar activeSection="developer" />
      
      {/* Background */}
      <div className="developer-background"></div>

      {/* Main Content */}
      <div className="developer-section">
        <div className="developer-content">
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
              <strong>🏗️ A Journey of Vision and Hard Work</strong><br/>
              Starting from Sadiqabad, Ch. Waqas Shafique began his journey with small-scale town projects and quickly earned recognition for delivering high-quality developments on time. Over the years, he has successfully completed several residential and commercial town projects in Sadiqabad and Rahim Yar Khan, each standing as a symbol of trust and quality construction.
            </p>
            
            <p className="developer-paragraph">
              Beyond development, he also owns one of the largest iron and steel businesses in the region — providing strong industrial support and ensuring premium-grade materials for every project under his supervision.
            </p>
            
            <p className="developer-paragraph">
              <strong>🌟 Oasis Palm Tower – A Landmark of Excellence</strong><br/>
              Under his leadership, Oasis Palm Tower was launched with a clear mission: to bring modern luxury living to Faisal Hills, Islamabad, through a project that reflects class, innovation, and lasting value. Every part of the tower — from its design to its finishing — shows his dedication to creating something timeless for both residents and investors.
            </p>
            
            <p className="developer-paragraph">
              <strong>🚀 The Future Ahead</strong><br/>
              With the success of Oasis Palm Tower, Ch. Waqas Shafique and his team are now preparing for their next big milestone in 2026 — a new high-rise and residential project in Islamabad, which will once again set new standards for modern architecture and lifestyle. Insha'Allah, this upcoming project will continue the legacy of trust, quality, and excellence that Taiba Developers are known for.
            </p>
          </div>
          
          <div className="developer-cta-section">
            <button className="developer-cta-button">Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Contact Icons */}
      <div className="contact-icons">
        <div className="contact-icon phone-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06612 2.16708 8.43376 2.48353C8.8014 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="contact-icon whatsapp-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Developer;
