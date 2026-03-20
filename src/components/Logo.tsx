import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", dark = false }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Zestpay Logo" 
        className="h-12 md:h-16 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Logo;
