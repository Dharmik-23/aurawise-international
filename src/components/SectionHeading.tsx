import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  number?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  number,
  title,
  italicWord,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 ${isCenter ? 'text-center mx-auto max-w-4xl' : 'max-w-3xl'} ${className}`}>
      {/* Top Label with Optional Number & Badge */}
      <div className={`flex items-center gap-3 mb-3 sm:mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {number && (
          <span className="font-mono text-xs text-[var(--accent-gold)] tracking-widest font-semibold">
            [{number}]
          </span>
        )}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] animate-pulse"></span>
            <span>{badge}</span>
          </div>
        )}
      </div>

      {/* Oversized Editorial Heading */}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] ${light ? 'text-[var(--text-primary)]' : 'text-[var(--text-primary)]'}`}>
        {title}{' '}
        {italicWord && (
          <span className="italic font-light text-[var(--text-secondary)] block sm:inline">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Delicate Gold Hairline Divider */}
      <div className={`h-[1px] w-20 bg-gradient-to-r from-[var(--accent-gold)] via-[var(--text-secondary)]/40 to-transparent my-3 sm:my-5 ${isCenter ? 'mx-auto' : ''}`} />

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed text-[var(--text-secondary)]/85 font-light max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
