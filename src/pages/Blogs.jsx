import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Blogs.css';

function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="blogs-page">
      <Navbar activeSection="blogs" />
      
      {/* Background */}
      <div className="blogs-background"></div>

      {/* Main Content */}
      <div className="blogs-container">
        {/* Left Column - Featured Blog */}
        <div className="featured-blog">
          <div className="blog-card featured">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Green Building" />
              <div className="blog-icon">💎</div>
              <div className="blog-overlay">
                <p>Federal Cabinet Approves Pakistan's First Green Building and Water Harvesting Code.</p>
              </div>
            </div>
            <div className="blog-content">
              <h2>Pakistan Approves Green Building & Rainwater Harvesting Codes for the First Time</h2>
              <button className="cta-button">Get in Touch</button>
              <p className="blog-description">
                toward environmental sustainability, the federal cabinet has approved Pakistan's first-ever Green Building Code and Rainwater Harvesting Provisions. Announced b...
              </p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        </div>

        {/* Right Column - Blog List */}
        <div className="blog-sidebar">
          <div className="blog-card small">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Islamabad Smart City" />
            </div>
            <div className="blog-content">
              <p>Islamabad to be converted into a pilot smart city under Prime Minister's Digital Pakistan vision</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="blog-card small">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Galiyat Real Estate" />
            </div>
            <div className="blog-content">
              <p>Unlocking Potential: How Galiyat Real Estate Delivers Unmatched ROI</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="blog-card small">
            <div className="blog-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Galiyat Apartment" />
            </div>
            <div className="blog-content">
              <p>Buy Apartment in Galiyat</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Blog Section */}
      <div className="additional-blogs-section">
        <div className="additional-blogs-container">
          <div className="additional-blog-card">
            <div className="additional-blog-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Harsukh Residencies" />
              <div className="blog-overlay-text">
                <div className="blog-tag">BLOG</div>
                <div className="blog-subtitle">Oasis Palm Tower - Investment Among Nature</div>
              </div>
            </div>
            <div className="additional-blog-content">
              <h3>Oasis Palm Tower - Investment Among Nature</h3>
              <p>Located in the majestic hills of Galiyat, near the Ayubia National Park, Oasis Palm Tower is a luxurious residential project offering a unique blend of modern living and natural beauty...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="additional-blog-card">
            <div className="additional-blog-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Luxury Living" />
              <div className="blog-overlay-text">
                <div className="blog-tag">BLOG</div>
                <div className="blog-subtitle">Oasis Palm Tower - An Era of Luxury Living</div>
              </div>
            </div>
            <div className="additional-blog-content">
              <h3>Oasis Palm Tower - An Era of Luxury Living in the Heart of Galiyat</h3>
              <p>Located in the beautiful Galiyat region, specifically Ayubia, Oasis Palm Tower stands as a beacon of luxury living, offering residents a unique blend of comfort and nature...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="additional-blog-card">
            <div className="additional-blog-image">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Smart Investment" />
              <div className="blog-overlay-text">
                <div className="blog-tag">BLOG</div>
                <div className="blog-subtitle">Oasis Palm Tower - A Smart Investment Choice</div>
              </div>
            </div>
            <div className="additional-blog-content">
              <h3>Oasis Palm Tower - A Smart Investment Choice</h3>
              <p>If you're looking for a real estate opportunity that combines nature with luxury living, Oasis Palm Tower in the Galiyat region is the destination you've been searching for...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* New Blog Section */}
      <div className="new-blogs-section">
        <div className="new-blogs-container">
          <div className="new-blog-card">
            <div className="new-blog-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Modern Building" />
              <div className="new-blog-overlay-text">
                <div className="new-blog-tag">BLOG</div>
                <div className="new-blog-subtitle">Why Choose Us - Oasis Palm Tower</div>
              </div>
            </div>
            <div className="new-blog-content">
              <h3>Why Choose Us – Oasis Palm Tower</h3>
              <p>Oasis Palm Tower presents an exceptional investment opportunity in the Galiyat region of Ayubia, district of Abbottabad. Located just a short distance from major attractions...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="new-blog-card">
            <div className="new-blog-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Mountain Landscape" />
              <div className="new-blog-overlay-text">
                <div className="new-blog-tag">BLOG</div>
                <div className="new-blog-subtitle">Oasis Palm Tower - Nearby Tourist Attractions</div>
              </div>
            </div>
            <div className="new-blog-content">
              <h3>Oasis Palm Tower - Nearby Tourist Attractions</h3>
              <p>Oasis Palm Tower a project by Almaymaar is a beautiful escape towards the peace of Galiyat. Located just a short distance from major tourist destinations...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="new-blog-card">
            <div className="new-blog-image">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Luxury Interior" />
              <div className="new-blog-overlay-text">
                <div className="new-blog-tag">BLOG</div>
                <div className="new-blog-subtitle">Top 5 reasons to choose Oasis Palm Tower</div>
              </div>
            </div>
            <div className="new-blog-content">
              <h3>Top 5 Reasons to choose Oasis Palm Tower</h3>
              <p>Oasis Palm Tower, located in Ayubia, of the Galiyat region, Abbottabad district showcases some of the luxury living, setting an example of luxury living in the heart of nature...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Final Blog Section */}
      <div className="final-blogs-section">
        <div className="final-blogs-container">
          <div className="final-blog-card">
            <div className="final-blog-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Hiking in Mountains" />
              <div className="final-blog-overlay-text">
                <div className="final-blog-tag">BLOG</div>
                <div className="final-blog-subtitle">Oasis Palm Tower - Your Ultimate Destination</div>
              </div>
            </div>
            <div className="final-blog-content">
              <h3>Oasis Palm Tower - Your Ultimate Destination</h3>
              <p>Located in the heart of Galiyat, Oasis Palm Tower offers a unique living of combining luxury with comfort. Oasis Palm Tower represents a blend of luxury living combine...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="final-blog-card">
            <div className="final-blog-image">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Modern Building in Forest" />
              <div className="final-blog-overlay-text">
                <div className="final-blog-tag">BLOG</div>
                <div className="final-blog-subtitle">ROI Opportunities - Oasis Palm Tower</div>
              </div>
            </div>
            <div className="final-blog-content">
              <h3>ROI Opportunities - Oasis Palm Tower</h3>
              <p>Oasis Palm Tower, located in the peaceful environment in the majestic hills of Galiyat region of the Abbottabad District. Oasis Palm Tower wh...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </div>

          <div className="final-blog-card">
            <div className="final-blog-image">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Luxury Interior" />
              <div className="final-blog-overlay-text">
                <div className="final-blog-tag">BLOG</div>
                <div className="final-blog-subtitle">Oasis Palm Tower - Luxury Redefined</div>
              </div>
            </div>
            <div className="final-blog-content">
              <h3>Oasis Palm Tower - Luxury Redefined</h3>
              <p>Oasis Palm Tower, a project by Almaymaar is located in the serene hills of Galiyat, the Abbottabad District in the province of Khyber Pakhtunkhwa. Thi...</p>
              <a href="#" className="read-more">Read more</a>
            </div>
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

      <Footer />
    </div>
  );
}

export default Blogs;
