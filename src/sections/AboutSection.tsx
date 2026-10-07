import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, ArrowRight, Check } from 'lucide-react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { MagneticButton } from '../components/MagneticButton';

interface AboutSectionProps {
  onOpenAssessment?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section id="about" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative overflow-hidden border-b border-[var(--border-subtle)]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-[var(--accent-gold-glow)] rounded-full blur-[160px] pointer-events-none opacity-15" />

      <Container>
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Architectural Imagery & Floating Credential Badge (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 border border-[var(--border-gold)] p-2 sm:p-3 bg-[var(--bg-card)]/80 backdrop-blur-sm shadow-editorial overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=900&q=80"
                alt="AuraWise International executive consultation and abroad education leadership council"
                loading="lazy"
                decoding="async"
                width="900"
                height="600"
                className="w-full h-[320px] sm:h-[460px] md:h-[540px] object-cover object-center filter brightness-[0.85] contrast-[1.12] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-canvas)] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlapping Floating Credential Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="static sm:absolute sm:-bottom-8 sm:-right-6 mt-4 sm:mt-0 z-20 bg-[var(--bg-surface)] border border-[var(--accent-gold)] p-4 sm:p-6 shadow-editorial max-w-full sm:max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[var(--accent-gold-subtle)] border border-[var(--accent-gold)] text-[var(--accent-gold)] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-2xl font-normal text-[var(--text-primary)] block leading-none">
                    Since 2009
                  </span>
                  <span className="text-[9.5px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono">
                    15+ Years Registered
                  </span>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                Headquartered in Ahmedabad, Gujarat, setting the national benchmark for statutory immigration compliance.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Story, Mission, Vision & Values (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ ABOUT AURAWISE INTERNATIONAL ]</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text-primary)] leading-[1.12]">
              India's Benchmark for Overseas Education &amp; <span className="italic font-light text-[var(--text-secondary)]">Migration Law.</span>
            </h2>

            <div className="h-[1px] w-16 bg-gradient-to-r from-[var(--accent-gold)] to-transparent my-3" />

            <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed font-light">
              Founded in 2009 in Ahmedabad, Gujarat, <strong>AuraWise International</strong> was established to eliminate opacity, unqualified agency representation, and visa refusals from the overseas journey.
            </p>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light">
              Over 15 years, our practice has grown into an interdisciplinary council of 50+ certified counsellors and registered attorneys accredited by <strong>MARA (Australia)</strong>, <strong>OISC (United Kingdom)</strong>, and <strong>AIRC (United States)</strong>. We maintain formal representation channels with over 500 accredited universities and colleges across 10 prime global destinations.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 group hover:border-[var(--border-gold)] transition-colors">
                <div className="flex items-center gap-2.5 text-[var(--accent-gold)] font-medium text-xs uppercase tracking-[0.2em] mb-2 font-mono">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                  To provide transparent, legally verified pathways that match each candidate's unique academic merits, budgetary reality, and long-term residency goals.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 group hover:border-[var(--border-gold)] transition-colors">
                <div className="flex items-center gap-2.5 text-[var(--accent-gold)] font-medium text-xs uppercase tracking-[0.2em] mb-2 font-mono">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                  To remain the premier advisory practice for integrity, zero-error documentation, and outcome certainty in international student admissions and skilled migration.
                </p>
              </div>
            </div>

            {/* Foundational Pillars */}
            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-primary)]/85 font-light">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                  <span>Certified MARA &amp; OISC Practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                  <span>Dedicated Relationship Manager for Every File</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                  <span>100% Upfront Written Fee Agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                  <span>Pre-Departure to Post-Landing Continuity</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <Button to="/about" variant="primary" size="md" className="w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />}>
                  Read Our Full Story
                </Button>
              </MagneticButton>
              {onOpenAssessment && (
                <MagneticButton strength={0.18} className="w-full sm:w-auto">
                  <Button variant="secondary" size="md" className="w-full sm:w-auto" onClick={onOpenAssessment}>
                    Consult An Advisor
                  </Button>
                </MagneticButton>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
