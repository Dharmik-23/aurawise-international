import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Briefcase,
  Award,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Scale
} from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { MagneticButton } from '../components/MagneticButton';
import { DESTINATION_COUNTRIES } from '../data/companyData';
import type { CountryItem } from '../data/companyData';
import { useTheme } from '../context/useTheme';
import { DESTINATION_AURAS } from '../context/themeData';

interface CountriesSectionProps {
  onSelectCountry?: (countryName: string) => void;
}

export const CountriesSection: React.FC<CountriesSectionProps> = ({ onSelectCountry }) => {
  const { setActiveDestinationAura } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState<CountryItem>(DESTINATION_COUNTRIES[0]);
  const [activePathwayIndex, setActivePathwayIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'visas' | 'programs' | 'settlement'>('visas');
  const [regionFilter, setRegionFilter] = useState<'all' | 'americas' | 'europe' | 'australasia' | 'middle-east'>('all');

  const filteredCountries = DESTINATION_COUNTRIES.filter((c) => {
    if (regionFilter === 'americas') return ['CA', 'US'].includes(c.code);
    if (regionFilter === 'europe') return ['GB', 'DE', 'IE', 'FR', 'IT'].includes(c.code);
    if (regionFilter === 'australasia') return ['AU', 'NZ'].includes(c.code);
    if (regionFilter === 'middle-east') return ['AE'].includes(c.code);
    return true;
  });

  const aura = DESTINATION_AURAS[selectedCountry.code];

  const handleCountryChange = (country: CountryItem) => {
    setSelectedCountry(country);
    setActivePathwayIndex(0);
    const countryAura = DESTINATION_AURAS[country.code];
    if (countryAura) {
      setActiveDestinationAura(countryAura);
    }
  };

  return (
    <section id="countries" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Dynamic Ambient Glow adapting to destination aura */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-[170px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: aura ? aura.primaryColor : 'var(--accent-gold)' }}
      />

      <Container>
        <SectionHeading
          number="10 DESTINATIONS"
          badge="Global Migration Corridors"
          title="The 10 Prime Global Destinations"
          italicWord="&amp; Pathways"
          subtitle="Explore legitimate visa regimes, post-study work privileges, and permanent residency criteria across the world's premier economies."
        />

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 pb-3 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x pb-1 max-w-full">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] font-mono mr-2 hidden sm:inline">
              REGION:
            </span>
            {[
              { id: 'all', label: 'All 10 Hubs' },
              { id: 'americas', label: 'Americas (2)' },
              { id: 'europe', label: 'Europe (5)' },
              { id: 'australasia', label: 'Australasia (2)' },
              { id: 'middle-east', label: 'Middle East (1)' },
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setRegionFilter(r.id as any)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-all shrink-0 touch-manipulation ${
                  regionFilter === r.id
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] font-semibold shadow-xs'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-gold-subtle)]'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <span className="text-[11px] font-mono text-[var(--accent-gold)]">
            DISPLAYING: {filteredCountries.length} OF 10 DESTINATIONS
          </span>
        </div>

        {/* 10 Destinations Interactive Selector Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 no-scrollbar touch-pan-x">
          {filteredCountries.map((country, idx) => {
            const isSelected = selectedCountry.name === country.name;
            const itemAura = DESTINATION_AURAS[country.code];

            return (
              <button
                key={country.name}
                onClick={() => handleCountryChange(country)}
                className={`flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs uppercase tracking-[0.2em] font-medium shrink-0 transition-all duration-300 border relative touch-manipulation cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--bg-card)] text-[var(--accent-gold)] border-[var(--border-prominent)] shadow-editorial'
                    : 'bg-transparent text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--border-gold)]'
                }`}
              >
                <span className="text-base">{country.flag}</span>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">0{idx + 1}</span>
                <span className="font-medium">{country.name}</span>

                {/* Active Country Hairline Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="active-country-line"
                    className="absolute -bottom-px left-0 right-0 h-[2px]"
                    style={{ backgroundColor: itemAura ? itemAura.primaryColor : 'var(--accent-gold)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Immersive Destination Exhibition Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCountry.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--bg-card)] border border-[var(--border-gold)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-editorial relative"
          >
            {/* Cinematic Image Side (5 cols on lg) */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[380px] lg:min-h-[640px] overflow-hidden group">
              <motion.img
                key={selectedCountry.code}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={selectedCountry.heroImage}
                alt={`Study abroad, work permits and permanent residency in ${selectedCountry.name} — ${selectedCountry.tagline}`}
                className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.2] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('photo-1503614472-8c93d56e92ce')) {
                    target.src = 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85';
                  }
                }}
              />

              {/* Scrim Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/40 to-transparent" />
              <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-transparent to-[var(--bg-card)]" />

              {/* Destination Monogram & Eyebrow */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span
                  className="px-3 py-1 bg-black/60 backdrop-blur-md border text-[10px] uppercase tracking-[0.25em] font-mono text-white"
                  style={{ borderColor: aura ? aura.primaryColor : 'var(--border-gold)' }}
                >
                  {selectedCountry.code} // DESTINATION DOSSIER
                </span>
                <span className="text-3xl filter drop-shadow-md">{selectedCountry.flag}</span>
              </div>

              {/* Country Headline & Poetry Overlay */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  {selectedCountry.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-light">
                  {selectedCountry.editorialSubtitle}
                </p>
                <div
                  className="pt-2 text-[11px] flex items-center gap-1.5 font-light"
                  style={{ color: aura ? aura.secondaryColor : 'var(--accent-gold)' }}
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>{selectedCountry.tagline}</span>
                </div>
              </div>
            </div>

            {/* Details & Immigration Pathways (7 cols on lg) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Header narrative */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono font-semibold">
                      [ STRATEGIC SETTLEMENT PROFILE ]
                    </span>
                    <span className="text-[10px] text-[var(--text-muted)] font-mono">
                      INTAKE: 2026–2027 ACTIVE
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed font-light">
                    {selectedCountry.description}
                  </p>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
                  <div className="space-y-1">
                    <span className="text-[9.5px] uppercase tracking-wider text-[var(--text-muted)] block">
                      Processing Window
                    </span>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                      <span>{selectedCountry.avgProcessingTime}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9.5px] uppercase tracking-wider text-[var(--text-muted)] block">
                      Post-Study Work
                    </span>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      <Briefcase className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                      <span>{selectedCountry.postStudyWork}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9.5px] uppercase tracking-wider text-[var(--text-muted)] block">
                      Permanent Residency
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-gold)]">
                      <Award className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                      <span className="truncate">{selectedCountry.prOpportunity.substring(0, 26)}...</span>
                    </div>
                  </div>
                </div>

                {/* Interior Sub-tabs: Visa Streams vs Target Disciplines vs Legal Criteria */}
                <div className="border-b border-[var(--border-subtle)] flex items-center gap-4 sm:gap-6 text-xs uppercase tracking-wider overflow-x-auto no-scrollbar touch-pan-x whitespace-nowrap pb-1">
                  <button
                    onClick={() => setActiveTab('visas')}
                    className={`pb-2.5 font-medium transition-colors border-b-2 shrink-0 touch-manipulation ${
                      activeTab === 'visas'
                        ? 'border-[var(--accent-gold)] text-[var(--accent-gold)] font-semibold'
                        : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Visa Streams ({selectedCountry.visaTypes.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('programs')}
                    className={`pb-2.5 font-medium transition-colors border-b-2 shrink-0 touch-manipulation ${
                      activeTab === 'programs'
                        ? 'border-[var(--accent-gold)] text-[var(--accent-gold)] font-semibold'
                        : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    Priority Disciplines ({selectedCountry.topPrograms.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('settlement')}
                    className={`pb-2.5 font-medium transition-colors border-b-2 shrink-0 touch-manipulation ${
                      activeTab === 'settlement'
                        ? 'border-[var(--accent-gold)] text-[var(--accent-gold)] font-semibold'
                        : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    PR Architecture
                  </button>
                </div>

                {/* Tab 1: Visa Streams Interactive Accordion */}
                {activeTab === 'visas' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    {selectedCountry.visaTypes.map((v, i) => {
                      const isActive = activePathwayIndex === i;
                      return (
                        <div
                          key={i}
                          onClick={() => setActivePathwayIndex(isActive ? null : i)}
                          className={`p-3.5 border transition-all duration-300 cursor-pointer ${
                            isActive
                              ? 'bg-[var(--bg-elevated)] border-[var(--border-prominent)] shadow-xs'
                              : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-gold)]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <span className="font-serif text-sm sm:text-base font-normal text-[var(--text-primary)]">
                                {v.title}
                              </span>
                              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] border border-[var(--border-gold)] font-mono">
                                {v.category}
                              </span>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 text-[var(--accent-gold)] transition-transform duration-300 ${
                                isActive ? 'rotate-90' : ''
                              }`}
                            />
                          </div>

                          {/* Expandable Explanation */}
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="text-xs text-[var(--text-secondary)] font-light mt-2 pt-2 border-t border-[var(--border-subtle)] leading-relaxed"
                            >
                              {v.description}
                            </motion.p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tab 2: Priority Disciplines */}
                {activeTab === 'programs' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="text-xs text-[var(--text-secondary)] font-light">
                      International graduates in these designated disciplines receive priority post-study work authorization, higher median starting salaries, and accelerated regional PR nomination bonus points:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedCountry.topPrograms.map((p) => (
                        <div
                          key={p}
                          className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                            <span>{p}</span>
                          </div>
                          <span className="text-[9px] font-mono text-[var(--text-muted)]">TIER-1</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: PR Architecture */}
                {activeTab === 'settlement' && (
                  <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--accent-gold)] font-mono font-semibold">
                      <Scale className="w-4 h-4" />
                      <span>Statutory Permanent Settlement Matrix</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--text-primary)] font-light leading-relaxed">
                      {selectedCountry.prOpportunity}
                    </p>
                    <div className="pt-2 text-xs text-[var(--text-muted)] font-light border-t border-[var(--border-subtle)]">
                      AuraWise MARA &amp; OISC attorneys verify your CRS points, ANZSCO/NOC codes, and state nomination criteria prior to application submission.
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Country CTA */}
              <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[var(--text-muted)] font-light">
                  Ready to file an official visa dossier for <strong className="text-[var(--text-primary)]">{selectedCountry.name}</strong>?
                </span>
                <MagneticButton strength={0.2} className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    onClick={() => onSelectCountry && onSelectCountry(selectedCountry.name)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Assess {selectedCountry.name} Dossier
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
