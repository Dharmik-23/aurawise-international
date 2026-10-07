import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'champagne';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  isExternal = false,
  ...rest
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none tracking-[0.14em] sm:tracking-[0.22em] uppercase select-none cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A869] active:scale-[0.98] touch-manipulation max-w-full text-center";

  const sizeStyles = {
    sm: "text-[10px] px-3.5 sm:px-4 py-2 sm:py-2.5 gap-1.5 sm:gap-2 min-h-[38px]",
    md: "text-[11px] sm:text-xs px-4 sm:px-6 py-3 sm:py-3.5 gap-2 sm:gap-2.5 min-h-[44px]",
    lg: "text-xs sm:text-sm px-5 sm:px-8 py-3.5 sm:py-4 gap-2.5 sm:gap-3 font-semibold min-h-[48px]",
  };

  const variantStyles = {
    primary: "bg-[var(--accent-gold)] text-[var(--selection-text)] hover:brightness-110 border border-[var(--accent-gold)] shadow-gold-subtle hover:shadow-lg font-semibold",
    secondary: "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-prominent)] hover:bg-[var(--accent-gold-subtle)] hover:border-[var(--accent-gold)]",
    outline: "bg-transparent text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]",
    champagne: "bg-[var(--text-secondary)] text-[var(--bg-canvas)] border border-[var(--text-secondary)] hover:bg-[var(--text-primary)]",
    ghost: "bg-transparent text-[var(--accent-gold)] hover:text-[var(--text-primary)] p-0 hover:underline underline-offset-8 border-none shadow-none",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`group ${combinedClasses}`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`group ${combinedClasses}`} {...rest}>
      {content}
    </button>
  );
};
