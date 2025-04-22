
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/2d6651c1-4f76-44fb-9c2a-6902c4cf3e23.png" 
        alt="QCipher Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export default Logo;
