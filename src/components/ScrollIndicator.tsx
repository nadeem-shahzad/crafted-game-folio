
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowIndicator(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const skillsSection = document.querySelector('#skills') || document.querySelector('section:nth-child(2)');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-300 ${showIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToNextSection}
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
