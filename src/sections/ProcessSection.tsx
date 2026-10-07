import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { MagneticButton } from '../components/MagneticButton';
import { HOW_WE_WORK_STEPS } from '../data/companyData';

interface ProcessSectionProps {
  onOpenAssessment: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section id="process" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[var(--accent-gold-glow)] rounded-full blur-[170px] pointer-events-none opacity-15" />

      <Container>
        <SectionHeading
          number="METHODOLOGY"
          badge="Structured Advisory Lifecycle"
          title="The 6 Milestone Roadmap to"
          italicWord="International Arrival"
          subtitle="At AuraWise, predictability builds confidence. Every candidate receives a time-stamped, step-by-step roadmap from day one — zero surprises, complete legal clarity."
        />

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Center Guideline for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[var(--border-gold)] to-transparent" />

          <div className="space-y-8 lg:space-y-12">
            {HOW_WE_WORK_STEPS.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-6 lg:gap-16`}
                >
                  {/* Step Card with Staggered Viewport Entrance */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.75, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-prominent)] p-5 sm:p-8 transition-all duration-400 hover:shadow-editorial group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-3xl font-semibold text-[var(--accent-gold)] block">
                          {step.number}
                        </span>
                        <span className="text-[9.5px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] border border-[var(--border-gold)] px-2.5 py-1 bg-[var(--accent-gold-subtle)] font-mono">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-gold)] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-[11px] font-medium text-[var(--accent-gold)] uppercase tracking-wider mb-3">
                        {step.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]/85 leading-relaxed font-light mb-5">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="border-t border-[var(--border-subtle)] pt-4 space-y-1.5">
                        <span className="text-[9.5px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-semibold block mb-1">
                          Verified Deliverables:
                        </span>
                        {step.deliverables.map((deliv, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-primary)]/80 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Desktop Center Indicator Node with Spring physics */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 0.15 * index }}
                    className="hidden lg:flex w-9 h-9 bg-[var(--bg-canvas)] border border-[var(--accent-gold)] items-center justify-center text-xs font-mono text-[var(--accent-gold)] shadow-gold-subtle shrink-0 z-10"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Empty side for layout symmetry */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <MagneticButton strength={0.25} className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="sm:w-auto"
              onClick={onOpenAssessment}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Initiate Profile Assessment
            </Button>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
};
