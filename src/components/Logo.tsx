import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-lg sm:text-xl tracking-[0.25em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.28em]',
  };

  const subTextSizes = {
    sm: 'text-[7px] tracking-[0.35em]',
    md: 'text-[8.5px] tracking-[0.4em]',
    lg: 'text-[10px] tracking-[0.45em]',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-gold)] ${className}`}
      aria-label="AuraWise International Home"
    >
      {/* Editorial Monogram Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]} transition-transform duration-500 group-hover:scale-105`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="24" cy="24" r="23" stroke="var(--accent-gold)" strokeWidth="0.8" strokeDasharray="2 3" className="opacity-70" />
          <polygon points="24,5 40,38 31,38 24,19 17,38 8,38" fill="var(--accent-gold)" />
          <polygon points="24,13 33,33 29,33 24,22 19,33 15,33" fill="var(--text-primary)" />
          <circle cx="24" cy="29" r="2" fill="var(--accent-gold)" />
          <line x1="12" y1="43" x2="36" y2="43" stroke="var(--accent-gold)" strokeWidth="1" />
        </svg>
      </div>

      {/* Editorial Wordmark */}
      <div className="flex flex-col">
        <span className={`font-serif font-medium text-[var(--text-primary)] leading-none transition-colors group-hover:text-[var(--accent-gold)] ${textSizes[size]}`}>
          AURAWISE
        </span>
        <span className={`font-sans font-light text-[var(--accent-gold)] uppercase mt-1 leading-none ${subTextSizes[size]}`}>
          INTERNATIONAL
        </span>
      </div>
    </Link>
  );
};
