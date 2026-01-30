
import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bento-card rounded-[40px] shadow-lg group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BentoCard;
