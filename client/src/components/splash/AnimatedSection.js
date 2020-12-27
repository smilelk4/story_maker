import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const descriptionContainer = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }});

    if (descriptionContainer.current) {
      observer.observe(descriptionContainer.current);
    }
  
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={descriptionContainer}
      className="splash__section"
      animate={{ x: isVisible ? 0 : -100,
                 opacity: isVisible ? 1 : 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: .4 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;