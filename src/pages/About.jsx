import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './About.css';

function About() {
  const navigate = useNavigate();


  return (
    <div className="about-page">
      <Navbar activeSection="about" />
      
      {/* Background */}
      <div className="about-background"></div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <h1 className="about-title">Oasis Palm Tower</h1>
          <h2 className="about-subtitle">A NEW PARADIGM OF LUXURY LIVING IN ISLAMABAD</h2>
          
          <div className="about-text">
            <p className="about-paragraph">
              Oasis Palm Tower is not just a building — it's a dream coming to life in Faisal Hills, Islamabad. A place where luxury, comfort, and modern living come together to create something truly special.
            </p>
            
            <p className="about-paragraph">
              This project is proudly developed by Taiba Developers, under the leadership of Ch. Waqas Shafique, who is not only the CEO but also the main developer behind this vision. His passion for real estate and commitment to quality construction can be seen in every detail of the project.
            </p>
            
            <p className="about-paragraph">
              <strong>🌆 Our Story</strong><br/>
              Ch. Waqas Shafique has been involved in real estate and development for years, with several successful town projects in Sadiqabad and Rahim Yar Khan. He has built his name through hard work, honesty, and a dedication to delivering exactly what's promised.
            </p>
            
            <p className="about-paragraph">
              Apart from real estate, he also owns one of the largest iron and steel businesses in the region — a strong foundation that helps ensure top-quality materials and durable construction in every project. Oasis Palm Tower is a reflection of that same strength, vision, and trust.
            </p>
            
            <p className="about-paragraph">
              <strong>🏗️ The Project</strong><br/>
              Oasis Palm Tower offers luxury apartments, penthouses, corporate offices, and shops, all designed with elegance and attention to detail. Every apartment comes with a private terrace, panoramic views, and high-quality finishing that redefine modern living.
            </p>
            
            <p className="about-paragraph">
              The project includes amazing rooftop amenities: Rooftop Swimming Pool 🏊‍♂️, Rooftop Restaurant 🍽️, Modern Gym & Gaming Zone 🎮, 24/7 Security & Smart Access, Dedicated Parking and Power Backup.
            </p>
            
            <p className="about-paragraph">
              <strong>📍 Location Advantage</strong><br/>
              Located in the heart of Faisal Hills, Oasis Palm Tower is surrounded by some of the best attractions and facilities in the area: Roots International School, Arc Monument, Glow Park, Children's Play Park, Civic Center, Petrol Pump & Service Stations, Plus, stunning Margalla Hills Views 🌄. Everything you need is just a few minutes away — from schools and parks to entertainment and daily essentials.
            </p>
            
            <p className="about-paragraph">
              <strong>💫 Our Mission</strong><br/>
              Our mission is simple — to deliver a lifestyle that speaks of class and comfort, not just another building. We believe in trust, quality, and long-term relationships with our clients. At Oasis Palm Tower, we don't just build apartments — we build dreams, and we make sure they last for generations.
            </p>
            
            <p className="about-paragraph">
              <strong>❤️ A Name You Can Trust</strong><br/>
              From Sadiqabad to Islamabad, Ch. Waqas Shafique Developers have earned people's trust through hard work, honesty, and vision. Oasis Palm Tower is the next step in that journey — a project built on passion, promise, and perfection.
            </p>
          </div>
          
          <div className="about-cta-section">
            <button className="about-cta-button">Get in Touch</button>
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

export default About;
