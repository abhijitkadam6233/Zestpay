import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", dark = false }) => {
  const [error, setError] = React.useState(false);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {!error ? (
        <img 
          src="/brand-mark.png" 
          alt="Zestpay Logo" 
          className="h-12 md:h-16 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand/20">
            Z
          </div>
          <span className={`text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
            Zest<span className="text-brand">pay</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
