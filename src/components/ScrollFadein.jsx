
import React, { useEffect, useState } from 'react';

const ScrollFadein = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Apply the class to the body
    if (isVisible) {
      document.body.classList.add('visible');
    } else {
      document.body.classList.remove('visible');
    }
  }, [isVisible]);

  return <div>{children}</div>;
};

export default ScrollFadein;
