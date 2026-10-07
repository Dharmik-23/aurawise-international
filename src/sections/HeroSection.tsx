import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PhoneCall, Globe2, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { MagneticButton } from '../components/MagneticButton';
import { Container } from '../components/Container';
import { COMPANY_INFO, DESTINATION_COUNTRIES } from '../data/companyData';
import { useTheme } from '../context/useTheme';
import { DESTINATION_AURAS } from '../context/themeData';

interface HeroSectionProps {
  onOpenAssessment: () => void;
  onSelectCountry?: (countryName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAssessment, onSelectCountry }) => {
  const { setActiveDestinationAura } = useTheme();

  return (
    <section className="relative min-h-0 lg:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[var(--bg-canvas)] py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)]">
      {/* Background Imagery with Cinematic Multi-Tier Vignette & Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 0.24 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85"
          alt="International architectural cityscape representing global migration and abroad education destinations"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="2200"
          height="1200"
          className="w-full h-full object-cover object-center filter contrast-[1.2] brightness-75"
        />

        {/* Multi-layered Vignettes adopting current theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-canvas)] via-[var(--bg-canvas)]/85 to-[var(--bg-canvas)]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-canvas)] via-transparent to-[var(--bg-canvas)]/90" />

        {/* Ambient Subtle Glows that react to Theme & Destination Aura */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/3 w-[650px] h-[450px] rounded-full blur-[170px]"
          style={{ backgroundColor: 'var(--dest-active-color, var(--accent-gold))' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] rounded-full blur-[140px]"
          style={{ backgroundColor: 'var(--accent-gold-glow)' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Left Content (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
            {/* Dramatic Oversized Editorial Headline */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[var(--text-primary)] leading-[1.08] sm:leading-[1.04] break-words"
              >
                Global Vision. <br />
                <span className="italic font-light text-[var(--text-secondary)]">Trusted Expertise.</span> <br />
                <span className="gold-editorial-text font-normal">Limitless Pathways.</span>
              </motion.h1>
            </div>

            {/* Positioning Copy */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-base md:text-lg text-[var(--text-secondary)]/85 font-light max-w-2xl leading-relaxed"
            >
              India's premier international education and legal immigration practice. Providing uncompromising statutory guidance for university admissions, student visas, and permanent residency across 10 prime global destinations.
            </motion.p>

            {/* Credibility Key Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 lg:gap-8 text-xs text-[var(--text-primary)]/85 font-light pt-1"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>98% Audited Visa Grant Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>500+ Accredited Global Institutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                <span>100% Upfront Written Retainers</span>
              </div>
            </motion.div>

            {/* Editorial CTAs with Magnetic physics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 sm:pt-3 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full"
            >
              <MagneticButton strength={0.22} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={onOpenAssessment}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Assess Profile Eligibility
                </Button>
              </MagneticButton>

              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  to="/countries"
                >
                  Explore 10 Destinations
                </Button>
              </MagneticButton>

              <MagneticButton strength={0.18} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  icon={<PhoneCall className="w-4 h-4 text-[var(--accent-gold)]" />}
                  iconPosition="left"
                >
                  Call Headquarters
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Floating Asymmetric Editorial Card (4 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative p-7 bg-[var(--bg-card)]/90 border border-[var(--border-gold)] backdrop-blur-xl shadow-editorial space-y-6">
              {/* Corner Architectural Stamp */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>AHMEDABAD HQ</span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">23.0039° N, 72.5186° E</span>
              </div>

              {/* Status Ticker */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-light block">
                  Intake Calendar 2026–2027
                </span>
                <h4 className="font-serif text-2xl text-[var(--text-primary)] font-normal leading-snug">
                  Fall &amp; Spring Admissions Active
                </h4>
                <p className="text-xs text-[var(--text-secondary)]/80 font-light leading-relaxed pt-1">
                  SDS Canada, Subclass 500 Australia, CAS UK &amp; Germany Winter applications currently in priority review.
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border-subtle)] text-xs">
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                  <span className="font-mono text-xs text-[var(--accent-gold)] block font-semibold">15+ YEARS</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Continuous Operations</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                  <span className="font-mono text-xs text-[var(--accent-gold)] block font-semibold">5,000+</span>
                  <span className="text-[10px] text-[var(--text-muted)]">Scholars &amp; Migrants</span>
                </div>
              </div>

              {/* Accreditations Ribbon */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-[var(--text-primary)]/70 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-1.5 text-[var(--accent-gold)]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold">MARA • OISC</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)]">Zero Refusal Guarantee Desk</span>
              </div>

              {/* Subtle hairline glow */}
              <div className="absolute -bottom-px left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* PROMINENT 10 DESTINATIONS INTERACTIVE BAR WITH CHROMATIC HOVER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-12 lg:mt-16 pt-4 sm:pt-6 lg:pt-8 border-t border-[var(--border-subtle)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--accent-gold)]" />
              <span className="text-[9.5px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.3em] uppercase text-[var(--accent-gold)] font-semibold font-mono">
                [ 10 PRIME GLOBAL DESTINATIONS ]
              </span>
            </div>
            <span className="text-xs text-[var(--text-muted)] font-light hidden sm:inline-block">
              Hover over any destination to sample its unique chromatic aura, or click to assess
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {DESTINATION_COUNTRIES.map((country) => {
              const aura = DESTINATION_AURAS[country.code];
              return (
                <motion.button
                  key={country.name}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => aura && setActiveDestinationAura(aura)}
                  onMouseLeave={() => setActiveDestinationAura(null)}
                  onClick={() => onSelectCountry && onSelectCountry(country.name)}
                  className="group p-2.5 sm:p-3 bg-[var(--bg-card)]/80 hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] transition-all duration-300 text-left relative overflow-hidden shadow-sm touch-manipulation cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg sm:text-2xl filter group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </span>
                    <span className="font-mono text-[9px] text-[var(--accent-gold)] font-semibold tracking-wider">
                      {country.code}
                    </span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-serif text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors truncate">
                    {country.name}
                  </div>
                  <div className="text-[9px] text-[var(--text-muted)] font-light truncate mt-0.5">
                    {country.avgProcessingTime}
                  </div>
                  {/* Hairline hover accent styled with country's specific accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: aura ? aura.primaryColor : 'var(--accent-gold)' }}
                  />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
