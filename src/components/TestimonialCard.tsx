import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import type { TestimonialItem } from '../data/companyData';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-prominent)] p-5 sm:p-8 flex flex-col justify-between transition-all duration-400 hover:shadow-editorial relative">
      {/* Decorative quote icon */}
      <div className="absolute top-6 right-6 text-[var(--accent-gold)]/10 pointer-events-none">
        <Quote className="w-12 h-12" />
      </div>

      <div>
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-4 text-[var(--accent-gold)]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>

        {/* Highlight Achievement Pill */}
        <div className="inline-block px-2.5 py-1 mb-4 text-[10px] font-semibold tracking-[0.15em] bg-[var(--accent-gold-subtle)] border border-[var(--border-gold)] text-[var(--accent-gold)] uppercase font-mono">
          {testimonial.achievement}
        </div>

        {/* Quote text */}
        <p className="text-xs sm:text-sm text-[var(--text-primary)]/85 leading-relaxed italic mb-6 font-light">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
        <div className="w-10 h-10 bg-[var(--accent-gold-subtle)] border border-[var(--border-gold)] text-[var(--accent-gold)] flex items-center justify-center font-mono text-xs font-semibold shrink-0">
          {testimonial.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-normal text-[var(--text-primary)] text-base truncate">
              {testimonial.name}
            </span>
            <span title="Verified Client">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
            </span>
          </div>
          <p className="text-[11px] text-[var(--text-muted)] truncate font-light">
            {testimonial.programOrVisa}
          </p>
          <p className="text-[10px] text-[var(--accent-gold)] font-mono mt-0.5">
            Destination: {testimonial.destination} • {testimonial.year}
          </p>
        </div>
      </div>
    </div>
  );
};
