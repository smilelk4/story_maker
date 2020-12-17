import React from 'react';
import { motion } from 'framer-motion';

const PageAnimationWrapper = ({children}) => {
  const pageVariants = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }

  return ( 
    <motion.div
      className="container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}>
      {children}
    </motion.div>
  );
}
 
export default PageAnimationWrapper;