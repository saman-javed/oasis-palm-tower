import React from 'react';
import '../pages/About.css';

function AboutSection({ variant = 'full' }) {
  // variant can be 'full' (for pages) or 'compact' (for App.jsx home page)
  const isCompact = variant === 'compact';
  
  return (
    <section id="about" className="about-page">
      <div className="about-background"></div>
      <div className="about-section">
        <div className="about-content">
          {isCompact ? (
            <>
              <h1 className="about-title">VISION</h1>
              <h2 className="about-subtitle">A LUXURY DEVELOPMENT IN FAISAL HILLS, ISLAMABAD</h2>
              
              <div className="about-text">
                <p className="about-paragraph">
                  Oasis Palm Tower is a unique luxury development located in Faisal Hills, Islamabad, combining luxury hotels, premium apartments, modern corporate offices, and ground floor commercial shops in one magnificent building. Developed by Taiba Developers under the leadership of Ch. Waqas Shafique, this complete lifestyle plaza offers rooftop amenities including a swimming pool, restaurant, modern gym & gaming zone, 24/7 security, dedicated parking, and power backup. Strategically located near Roots International School, Arc Monument, Glow Park, and other key facilities, Oasis Palm Tower represents a trusted name in real estate, delivering quality construction and lasting value for residents, businesses, and investors.
                </p>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

