import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  const [filterDestination, setFilterDestination] = useState<string>('All');

  const destinations = ['All', 'Canada', 'Australia', 'United Kingdom', 'United States', 'Germany'];

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filterDestination === 'All') return true;
    return t.destination.toLowerCase().includes(filterDestination.toLowerCase());
  });

  return (
    <section id="reviews" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-surface)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      <Container>
        <SectionHeading
          number="SUCCESS STORIES"
          badge="Verified Client Outcomes"
          title="Authentic Voices of"
          italicWord="International Relocation"
          subtitle="Real outcomes, verified admissions, and granted visas. Over 5,000 students and families have achieved their global ambitions through AuraWise International."
        />

        {/* Filter Pills */}
        <div className="flex items-center sm:justify-center gap-2 mb-10 overflow-x-auto no-scrollbar touch-pan-x flex-nowrap sm:flex-wrap pb-1">
          {destinations.map((dest) => (
            <button
              key={dest}
              onClick={() => setFilterDestination(dest)}
              className={`text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] px-3.5 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 font-medium border relative shrink-0 whitespace-nowrap touch-manipulation ${
                filterDestination === dest
                  ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] border-[var(--accent-gold)] font-semibold shadow-gold-subtle'
                  : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)]'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>

        {/* Testimonials Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
