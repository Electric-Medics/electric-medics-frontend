import React, { useEffect, useRef, useState } from 'react';

import ContactUs from '../ContactUs/ContactUs';
import './FadeInSection.css';

const FadeInSection = () => {
  const [isVisible, setVisible] = useState<Boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <ContactUs />
    </div>
  );
};

export default FadeInSection;
