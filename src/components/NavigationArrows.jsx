import React, { useState, useEffect } from 'react';
import '../App.css';

function NavigationArrows({ scrollToSection }) {
  const [activeSection, setActiveSection] = useState('home');
  const [canGoUp, setCanGoUp] = useState(false);
  const [canGoDown, setCanGoDown] = useState(true);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'developer', label: 'Developer' },
    { id: 'footer', label: 'Footer' }
  ];

  useEffect(() => {
    // Use IntersectionObserver to track active section
    const observerOptions = {
      root: document.querySelector('.app'),
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
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
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const appElement = document.querySelector('.app');
    if (appElement) {
      appElement.addEventListener('scroll', checkActiveSection);
      setTimeout(checkActiveSection, 100);
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener('scroll', checkActiveSection);
      }
      observer.disconnect();
    };
  }, []);

  // Update button states based on active section
  useEffect(() => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    setCanGoUp(currentIndex > 0);
    setCanGoDown(currentIndex < sections.length - 1);
  }, [activeSection]);

  const handleUpClick = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      const prevSection = sections[currentIndex - 1];
      if (scrollToSection) {
        scrollToSection(prevSection.id);
      } else {
        const element = document.getElementById(prevSection.id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    }
  };

  const handleDownClick = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      if (scrollToSection) {
        scrollToSection(nextSection.id);
      } else {
        const element = document.getElementById(nextSection.id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    }
  };

  return (
    <div className="navigation-arrows">
      <button
        className={`nav-arrow nav-arrow-up ${!canGoUp ? 'disabled' : ''}`}
        onClick={handleUpClick}
        disabled={!canGoUp}
        aria-label="Scroll to previous section"
        title="Previous section"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        className={`nav-arrow nav-arrow-down ${!canGoDown ? 'disabled' : ''}`}
        onClick={handleDownClick}
        disabled={!canGoDown}
        aria-label="Scroll to next section"
        title="Next section"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default NavigationArrows;

