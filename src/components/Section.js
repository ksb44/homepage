import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`p-8 bg-gray-100 transition-all duration-500 ${isVisible ? 'fade-in-visible' : 'fade-in'}`}
    >
      {children}
    </div>
  );
};

export default Section;
