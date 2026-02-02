
import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  index?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', onClick, index = 0 }) => {
  return (
    <motion.div 
      className={`bento-card rounded-[40px] shadow-lg group cursor-pointer ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
