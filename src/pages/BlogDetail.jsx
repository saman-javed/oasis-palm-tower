import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BlogDetail.css';

// Blog data with full content
const blogData = {
  'oasis-palm-tower-complete-lifestyle': {
    title: 'Oasis Palm Tower - Your Complete Lifestyle Destination',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    content: `Oasis Palm Tower is a unique three-in-one development located in Faisal Hills, Islamabad. This exceptional project combines luxury hotels, premium apartment rooms, modern corporate offices, and ground floor commercial shops - all in one magnificent building. Experience the perfect blend of residential comfort, business convenience, and commercial opportunities.

Located in one of Islamabad's most prime areas, Faisal Hills offers excellent connectivity and access to major landmarks. The development is strategically positioned to provide residents and businesses with unmatched convenience and value.

**Why Choose Oasis Palm Tower?**

**1. Prime Location**
Faisal Hills, Islamabad is one of the city's most desirable and rapidly developing areas. With easy access to major landmarks, schools, parks, and business districts, this location offers unmatched convenience and value.

**2. Three-in-One Concept**
Oasis Palm Tower stands out with its unique combination of:
- Luxury hotels for hospitality excellence
- Premium apartments for modern living
- Modern corporate offices for business success
- Ground floor commercial shops for retail opportunities

**3. Modern Amenities**
The development features state-of-the-art facilities including:
- Smart home automation systems
- 24/7 surveillance and security
- Rooftop leisure spaces
- Eco-friendly systems
- Premium finishes and fixtures

**4. Investment Potential**
With its prime location and unique concept, Oasis Palm Tower presents exceptional ROI opportunities. Investors can benefit from multiple revenue streams in one prime location.

**5. Quality Development**
Developed by Taiba Developers, Oasis Palm Tower is designed with elegance and attention to detail, ensuring quality construction and premium living experience.

Invest in Oasis Palm Tower and own a piece of prime real estate in Islamabad's fastest-growing area. Experience luxury, convenience, and exceptional value all in one place.`
  },
  'luxury-apartments-faisal-hills': {
    title: 'Luxury Apartments at Oasis Palm Tower - Modern Living in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: `Discover luxury living at Oasis Palm Tower in Faisal Hills, Islamabad. Our premium apartments offer modern design, spacious layouts, and world-class amenities.

**Premium Apartment Features:**
- Spacious 1, 2, and 3-bedroom units
- Modern kitchen designs with premium appliances
- Elegant bathrooms with high-quality fixtures
- Floor-to-ceiling windows with panoramic views
- Smart home automation systems
- Premium flooring and finishes

**Location Benefits:**
- Prime location in Faisal Hills
- Easy access to schools, hospitals, and shopping centers
- Close to major business districts
- Excellent connectivity to Islamabad city center

**Amenities:**
- 24/7 security and surveillance
- Rooftop gardens and leisure spaces
- Modern elevators
- Parking facilities
- Community spaces

Invest in your future with Oasis Palm Tower apartments. Experience luxury living in one of Islamabad's most desirable locations.`
  },
  'commercial-shops-faisal-hills': {
    title: 'Commercial Shops at Oasis Palm Tower - Your Business Opportunity in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: `Oasis Palm Tower offers prime commercial shop spaces on the ground floor, perfect for retail businesses, restaurants, cafes, and more.

**Commercial Shop Features:**
- Prime ground floor location
- High foot traffic area
- Modern shop designs
- Flexible layouts
- Excellent visibility
- Easy access and parking

**Business Opportunities:**
- Retail stores
- Restaurants and cafes
- Service businesses
- Professional offices
- Showrooms

**Location Advantages:**
- Located in Faisal Hills, one of Islamabad's fastest-growing areas
- High visibility and accessibility
- Growing residential and commercial community
- Excellent connectivity

**Investment Benefits:**
- High rental yields
- Capital appreciation potential
- Multiple revenue streams
- Long-term investment value

Secure your commercial space at Oasis Palm Tower and be part of Islamabad's thriving business community.`
  },
  'corporate-offices-islamabad': {
    title: 'Corporate Offices at Oasis Palm Tower - Prime Business Location in Islamabad',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: `Establish your business in one of Islamabad's prime locations. Oasis Palm Tower offers modern corporate office spaces designed for success.

**Office Features:**
- Modern office layouts
- Flexible space configurations
- Premium finishes
- Natural lighting
- High-speed internet connectivity
- Professional building management

**Location Benefits:**
- Prime business location in Faisal Hills
- Easy access to major business districts
- Excellent connectivity
- Professional environment
- Prestigious address

**Business Advantages:**
- Professional image
- Convenient location for clients
- Modern facilities
- Secure environment
- Parking facilities

**Investment Potential:**
- High rental yields
- Capital appreciation
- Long-term value
- Multiple business opportunities

Set up your corporate office at Oasis Palm Tower and elevate your business presence in Islamabad.`
  },
  'three-in-one-development': {
    title: 'Oasis Palm Tower - Three-in-One Development in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Located in Faisal Hills, Islamabad, Oasis Palm Tower is a unique three-in-one development featuring luxury hotels, premium apartments, modern offices, and ground floor commercial shops. Experience the perfect blend of residential, commercial, and hospitality in one prime location.

**The Three-in-One Concept:**

**1. Luxury Hotels**
Experience hospitality excellence with our premium hotel facilities, perfect for both short and long-term stays.

**2. Premium Apartments**
Modern residential units designed for comfort and luxury living, featuring spacious layouts and premium amenities.

**3. Corporate Offices**
Professional office spaces for businesses of all sizes, designed to enhance productivity and success.

**4. Commercial Shops**
Prime retail spaces on the ground floor, perfect for various business opportunities.

**Why This Concept Works:**
- Convenience: Everything you need in one place
- Value: Multiple investment opportunities
- Community: Vibrant mixed-use environment
- Growth: Prime location with excellent potential

Invest in Oasis Palm Tower and be part of Islamabad's most innovative development.`
  },
  'your-plaza-faisal-hills': {
    title: 'Oasis Palm Tower - Your Plaza in Faisal Hills, Islamabad',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Oasis Palm Tower is more than just a building - it's a complete lifestyle plaza in Faisal Hills, Islamabad. With hotels, apartments, offices, and shops all under one roof, this is your opportunity to own a piece of prime real estate in one of Islamabad's most desirable locations.

**Complete Lifestyle Plaza:**
- Residential living spaces
- Business and office facilities
- Retail and commercial opportunities
- Hospitality services

**Prime Location:**
- Faisal Hills, Islamabad
- Excellent connectivity
- Growing community
- High investment value

**Investment Benefits:**
- Multiple revenue streams
- High rental yields
- Capital appreciation
- Long-term value

**Why Choose Oasis Palm Tower:**
- Unique three-in-one concept
- Prime location
- Modern amenities
- Quality development
- Excellent ROI potential

Make Oasis Palm Tower your home, office, or business location. Experience the perfect blend of luxury, convenience, and value.`
  },
  'smart-investment-faisal-hills': {
    title: 'Oasis Palm Tower - A Smart Investment in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Invest in Oasis Palm Tower, located in Faisal Hills, Islamabad. This three-in-one development offers exceptional ROI opportunities with its unique combination of hotels, residential apartments, corporate offices, and commercial shops. Own a piece of prime real estate in Islamabad's fastest-growing area.

**Investment Highlights:**
- Prime location in Faisal Hills
- Unique three-in-one concept
- Multiple revenue streams
- High rental yields
- Capital appreciation potential

**Why Invest Now:**
- Growing area with excellent potential
- Limited premium developments
- High demand for quality spaces
- Excellent connectivity
- Future development plans

**ROI Opportunities:**
- Residential rental income
- Commercial rental income
- Capital appreciation
- Multiple revenue streams

**Investment Benefits:**
- Long-term value
- Stable returns
- Growth potential
- Quality development

Secure your investment in Oasis Palm Tower today and benefit from Islamabad's real estate growth.`
  },
  'why-choose-oasis-palm-tower': {
    title: 'Why Choose Oasis Palm Tower in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Oasis Palm Tower presents an exceptional opportunity in Faisal Hills, Islamabad. This three-in-one development combines luxury hotels, premium apartments, modern offices, and commercial shops. Located in one of Islamabad's prime areas with excellent connectivity and amenities.

**Top Reasons to Choose Oasis Palm Tower:**

**1. Prime Location**
Faisal Hills is one of Islamabad's most desirable areas, offering excellent connectivity, access to amenities, and growth potential.

**2. Unique Concept**
The three-in-one development concept provides multiple opportunities in one location - residential, commercial, and hospitality.

**3. Modern Amenities**
State-of-the-art facilities including smart home automation, security systems, rooftop spaces, and premium finishes.

**4. Quality Development**
Developed by Taiba Developers with attention to detail and quality construction standards.

**5. Investment Value**
Excellent ROI potential with high rental yields and capital appreciation opportunities.

**6. Community**
Vibrant mixed-use community with hotels, residences, offices, and shops creating a dynamic environment.

**7. Future Growth**
Located in a rapidly developing area with excellent future growth prospects.

Choose Oasis Palm Tower for luxury living, business success, and exceptional investment returns.`
  },
  'prime-location-faisal-hills': {
    title: 'Oasis Palm Tower - Prime Location in Faisal Hills, Islamabad',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Oasis Palm Tower is strategically located in Faisal Hills, Islamabad - one of the city's most desirable and rapidly developing areas. With easy access to major landmarks, schools, parks, and business districts, this location offers unmatched convenience and value.

**Location Advantages:**

**Connectivity:**
- Easy access to Islamabad city center
- Close to major highways
- Excellent public transport links
- Convenient for daily commute

**Nearby Amenities:**
- Schools and educational institutions
- Hospitals and healthcare facilities
- Shopping centers and markets
- Parks and recreational areas
- Restaurants and entertainment

**Business District Access:**
- Close to major business hubs
- Easy access for clients and partners
- Professional environment
- Networking opportunities

**Residential Benefits:**
- Safe and secure neighborhood
- Growing community
- Quality infrastructure
- Future development plans

**Investment Value:**
- Prime location premium
- High demand area
- Growth potential
- Long-term value

Invest in Oasis Palm Tower and benefit from one of Islamabad's best locations.`
  },
  'top-5-reasons-choose': {
    title: 'Top 5 Reasons to Choose Oasis Palm Tower',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Oasis Palm Tower in Faisal Hills, Islamabad offers a unique three-in-one concept with hotels, apartments, offices, and shops. Discover why this development stands out with its prime location, modern amenities, excellent connectivity, and exceptional investment potential.

**Top 5 Reasons:**

**1. Unique Three-in-One Concept**
Unlike traditional developments, Oasis Palm Tower combines hotels, residential apartments, corporate offices, and commercial shops in one building. This creates a vibrant, mixed-use community with multiple opportunities.

**2. Prime Location**
Located in Faisal Hills, one of Islamabad's most desirable and rapidly developing areas. Excellent connectivity, access to amenities, and growth potential make this location ideal.

**3. Modern Amenities**
State-of-the-art facilities including smart home automation, 24/7 security, rooftop leisure spaces, eco-friendly systems, and premium finishes throughout.

**4. Quality Development**
Developed by Taiba Developers with attention to detail, quality construction, and premium materials. This ensures long-term value and satisfaction.

**5. Exceptional Investment Potential**
High rental yields, capital appreciation opportunities, multiple revenue streams, and long-term value make this an excellent investment choice.

**Additional Benefits:**
- Flexible payment plans
- Professional management
- Community spaces
- Future growth potential

Choose Oasis Palm Tower for your home, office, or investment. Experience luxury, convenience, and value.`
  },
  'ultimate-destination-faisal-hills': {
    title: 'Oasis Palm Tower - Your Ultimate Destination in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Located in Faisal Hills, Islamabad, Oasis Palm Tower offers a unique three-in-one lifestyle combining luxury hotels, premium apartments, modern offices, and commercial shops. Experience the perfect blend of residential comfort, business convenience, and commercial opportunities all in one prime location.

**Your Ultimate Destination:**

**For Residents:**
- Premium apartments with modern amenities
- Safe and secure environment
- Community spaces and facilities
- Excellent location and connectivity

**For Businesses:**
- Modern office spaces
- Prime commercial locations
- Professional environment
- High visibility and accessibility

**For Investors:**
- Multiple investment opportunities
- High rental yields
- Capital appreciation
- Long-term value

**For Visitors:**
- Luxury hotel facilities
- Convenient location
- Modern amenities
- Excellent service

**Why It's Your Ultimate Destination:**
- Everything in one place
- Prime location
- Quality development
- Modern amenities
- Investment value

Make Oasis Palm Tower your ultimate destination for living, working, or investing in Islamabad.`
  },
  'roi-opportunities': {
    title: 'ROI Opportunities at Oasis Palm Tower',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Oasis Palm Tower in Faisal Hills, Islamabad presents exceptional ROI opportunities. With its unique three-in-one concept featuring hotels, apartments, offices, and shops, investors can benefit from multiple revenue streams in one prime location.

**ROI Opportunities:**

**Residential Rental Income:**
- High demand for quality apartments
- Competitive rental rates
- Long-term tenants
- Stable income stream

**Commercial Rental Income:**
- Prime shop locations
- High foot traffic
- Business-friendly environment
- Growing commercial activity

**Capital Appreciation:**
- Prime location premium
- Growing area value
- Development potential
- Long-term appreciation

**Multiple Revenue Streams:**
- Residential rentals
- Commercial rentals
- Hotel operations
- Office spaces

**Investment Benefits:**
- Diversified portfolio
- Risk mitigation
- Multiple income sources
- Long-term value

**Why Invest:**
- Prime location
- Unique concept
- Quality development
- Growth potential
- Professional management

Secure your investment in Oasis Palm Tower and benefit from exceptional ROI opportunities.`
  },
  'luxury-redefined-faisal-hills': {
    title: 'Oasis Palm Tower - Luxury Redefined in Faisal Hills',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    content: `Oasis Palm Tower, developed by Taiba Developers, is located in Faisal Hills, Islamabad. This three-in-one development redefines luxury living with its combination of hotels, premium apartments, modern offices, and commercial shops, all designed with elegance and attention to detail.

**Luxury Redefined:**

**Premium Apartments:**
- Spacious layouts
- Premium finishes
- Modern design
- Quality materials
- Attention to detail

**Luxury Hotels:**
- Hospitality excellence
- Premium services
- Modern facilities
- Comfort and convenience

**Corporate Offices:**
- Professional spaces
- Modern design
- Quality finishes
- Business-friendly

**Commercial Shops:**
- Prime locations
- Modern designs
- High visibility
- Business opportunities

**Luxury Features:**
- Smart home automation
- Premium security
- Rooftop spaces
- Modern amenities
- Quality construction

**Why It's Luxury Redefined:**
- Unique concept
- Prime location
- Quality development
- Modern amenities
- Attention to detail

Experience luxury redefined at Oasis Palm Tower.`
  }
};

function BlogDetail() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogData[blogId];

  useEffect(() => {
    // Enable scrolling on blog detail pages - these are separate pages, not sections
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

  if (!blog) {
    return (
      <div className="blog-detail-page">
        <Navbar />
        <div className="blog-detail-container">
          <h1>Blog Not Found</h1>
          <button onClick={() => navigate('/blogs')}>Back to Blogs</button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <Navbar />
      
      {/* Background with topographic pattern */}
      <div className="blog-detail-background"></div>

      {/* Main Content */}
      <div className="blog-detail-container">
        {/* Featured Image */}
        <div className="blog-detail-image-wrapper">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" />
          <div className="blog-detail-overlay">
            <div className="blog-detail-tag">BLOG</div>
            <div className="blog-detail-subtitle">{blog.title}</div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="blog-detail-content">
          <h1 className="blog-detail-title">{blog.title}</h1>
          
          <div className="blog-detail-text">
            {blog.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph is a heading (starts with **)
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const headingText = paragraph.replace(/\*\*/g, '');
                return <h2 key={index} className="blog-detail-heading">{headingText}</h2>;
              }
              
              // Check if paragraph contains bold text
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index} className="blog-detail-paragraph">
                  {parts.map((part, partIndex) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={partIndex}>{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return <span key={partIndex}>{part}</span>;
                  })}
                </p>
              );
            })}
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

export default BlogDetail;

