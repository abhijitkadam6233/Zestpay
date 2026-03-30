import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
  isSolid?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", dark = false, isSolid = false }) => {
  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (path.startsWith('http')) return path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

  const imageSrc = getImageUrl('brand-mark.png');

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={imageSrc} 
        alt="Zestpay Logo" 
        className={`h-12 md:h-16 w-auto object-contain block transition-all duration-300 ${dark ? '' : 'drop-shadow-md'}`}
      />
    </div>
  );
};

export default Logo;
