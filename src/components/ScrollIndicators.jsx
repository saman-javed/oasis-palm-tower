import React, { useState, useEffect } from 'react';
import '../App.css';

function ScrollIndicators({ scrollToSection }) {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'developer', label: 'Developer' }
    // Footer is now part of developer section viewport (half screen), not a separate section
  ];

  useEffect(() => {
    // Use IntersectionObserver for accurate section detection
    const observerOptions = {
      root: document.querySelector('.app'), // Use .app as the scroll container
      rootMargin: '-20% 0px -20% 0px', // Section is active when in middle 60% of viewport
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1]
    };

    const observerCallback = (entries) => {
      // Find the most visible section, with special handling for footer
      let mostVisible = null;
      let maxVisibility = 0;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const visibility = entry.intersectionRatio;
          // Give footer higher priority when it's visible
          const adjustedVisibility = entry.target.id === 'footer' ? visibility * 1.2 : visibility;
          if (adjustedVisibility > maxVisibility) {
            maxVisibility = adjustedVisibility;
            mostVisible = entry.target.id;
          }
        }
      });

      if (mostVisible) {
        setActiveSection(mostVisible);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Check active section on scroll
    const checkActiveSection = () => {
      const appElement = document.querySelector('.app');
      if (!appElement) return;

      const viewportHeight = window.innerHeight;
      let currentSection = 'home';
      let maxVisible = 0;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, Math.min(rect.height, viewportHeight - rect.top));
          const visibleBottom = Math.max(0, Math.min(rect.height, rect.bottom));
          const visibleHeight = Math.min(visibleTop, visibleBottom);
          const visibility = visibleHeight / Math.min(rect.height, viewportHeight);
          
          // For footer, check if it's visible in the bottom portion of viewport
          if (section.id === 'footer') {
            // Footer is active when it's visible in the bottom 60% of viewport
            if (rect.top < viewportHeight * 0.6 && rect.bottom > 0) {
              const footerVisibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, viewportHeight * 0.4);
              const footerVisibility = footerVisibleHeight / (viewportHeight * 0.6);
              if (footerVisibility > maxVisible) {
                maxVisible = footerVisibility;
                currentSection = section.id;
              }
            }
          } else {
            // For other sections, check if in middle 50% of viewport
            if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
              if (visibility > maxVisible) {
                maxVisible = visibility;
                currentSection = section.id;
              }
            }
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Listen to scroll events on .app container
    const appElement = document.querySelector('.app');
    if (appElement) {
      appElement.addEventListener('scroll', checkActiveSection);
      // Initial check
      setTimeout(checkActiveSection, 100);
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener('scroll', checkActiveSection);
      }
      observer.disconnect();
    };
  }, []);

  const handleDotClick = (sectionId) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  return (
    <div className="scroll-indicators">
      {sections.map((section, index) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            className={`scroll-dot ${isActive ? 'active' : ''}`}
            onClick={() => handleDotClick(section.id)}
            aria-label={`Go to ${section.label} section`}
            title={section.label}
          />
        );
      })}
    </div>
  );
}

export default ScrollIndicators;

