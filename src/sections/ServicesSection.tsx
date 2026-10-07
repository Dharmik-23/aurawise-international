import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Layers,
  LayoutGrid,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { MagneticButton } from '../components/MagneticButton';
import { CORE_SERVICES } from '../data/companyData';
import type { ServiceItem } from '../data/companyData';

interface ServicesSectionProps {
  onOpenAssessment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAssessment }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(CORE_SERVICES[0]);
  const [viewMode, setViewMode] = useState<'interactive' | 'grid'>('interactive');
  const [activeCategory, setActiveCategory] = useState<'all' | 'admissions' | 'consular' | 'transition'>('all');
  const [activeGoalPreset, setActiveGoalPreset] = useState<string | null>(null);

  const goalPresets = [
    { id: 'study', label: 'Study Abroad / Masters', pillars: ['01', '02', '03', '04', '06'] },
    { id: 'pr', label: 'Skilled PR / Express Entry', pillars: ['01', '04', '05', '07'] },
    { id: 'visa-refusal', label: 'Prior Visa Refusal Appeal', pillars: ['04', '05', '06', '08'] },
    { id: 'landing', label: 'Ready to Fly & Relocate', pillars: ['07', '09', '10'] },
  ];

  const filteredServices = CORE_SERVICES.filter((s) => {
    if (activeGoalPreset) {
      const preset = goalPresets.find(p => p.id === activeGoalPreset);
      if (preset && !preset.pillars.includes(s.number)) return false;
    }
    if (activeCategory === 'admissions') {
      return ['profile-assessment', 'course-university-selection', 'admission-management', 'sop-lor-crafting'].includes(s.id);
    }
    if (activeCategory === 'consular') {
      return ['visa-filing', 'documentation-review', 'financial-guidance', 'interview-preparation'].includes(s.id);
    }
    if (activeCategory === 'transition') {
      return ['pre-departure-briefing', 'post-arrival-support'].includes(s.id);
    }
    return true;
  });

  const handleServiceSelect = (service: ServiceItem) => {
    setSelectedService(service);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const el = document.getElementById('service-preview-stage');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  return (
    <section id="services" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[var(--accent-gold-glow)] rounded-full blur-[160px] pointer-events-none opacity-20" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 sm:mb-12">
          <div className="max-w-2xl">
            <SectionHeading
              number="OUR SERVICES"
              badge="End-to-End Advisory Framework"
              title="10 Core Advisory Pillars"
              italicWord="from Evaluation to Touchdown"
              subtitle="A structured, multidisciplinary framework ensuring every milestone—from initial profile audit to foreign housing settlement—is executed with statutory precision."
            />
          </div>

          {/* View Mode Toggle: Interactive Exhibition vs Full Grid */}
          <div className="flex items-center gap-1.5 sm:gap-2 self-start md:self-end border border-[var(--border-subtle)] p-1 bg-[var(--bg-card)] shrink-0 max-w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs uppercase tracking-wider transition-colors touch-manipulation whitespace-nowrap ${
                viewMode === 'interactive'
                  ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>Interactive Exhibition</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs uppercase tracking-wider transition-colors touch-manipulation whitespace-nowrap ${
                viewMode === 'grid'
                  ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
              <span>10-Pillar Grid</span>
            </button>
          </div>
        </div>

        {/* Interactive Pathway Preset Finder */}
        <div className="mb-10 p-4 sm:p-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[var(--text-primary)] font-semibold">
              QUICK PATHWAY FILTER:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveGoalPreset(null)}
              className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                activeGoalPreset === null
                  ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] font-semibold'
                  : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
              }`}
            >
              All 10 Pillars
            </button>
            {goalPresets.map((gp) => (
              <button
                key={gp.id}
                onClick={() => setActiveGoalPreset(gp.id === activeGoalPreset ? null : gp.id)}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeGoalPreset === gp.id
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] font-semibold'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                }`}
              >
                {gp.label}
              </button>
            ))}
          </div>
        </div>

        {/* INTERACTIVE EXHIBITION VIEW (DEFAULT) */}
        {viewMode === 'interactive' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Numbered Editorial Register (5 cols on lg) */}
            <div className="lg:col-span-5 divide-y divide-[var(--border-subtle)] border border-[var(--border-gold)] bg-[var(--bg-card)]/90">
              <div className="p-3.5 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono">
                <span>[ 10 ADVISORY REGISTERS ]</span>
                <span className="text-[var(--text-muted)]">SELECT TO REVEAL</span>
              </div>

              {filteredServices.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setSelectedService(service)}
                    onClick={() => handleServiceSelect(service)}
                    className={`p-4 transition-all duration-300 cursor-pointer flex items-center justify-between group relative touch-manipulation ${
                      isSelected
                        ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                        : 'hover:bg-[var(--bg-surface)] text-[var(--text-primary)]/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)]'}`}>
                        {service.number}
                      </span>
                      <div>
                        <div className={`font-serif text-sm sm:text-base font-normal transition-colors ${isSelected ? 'text-[var(--text-primary)] font-medium' : 'group-hover:text-[var(--accent-gold)]'}`}>
                          {service.title}
                        </div>
                        <div className="text-[10px] text-[var(--text-muted)] font-light truncate max-w-[200px] sm:max-w-[220px]">
                          {service.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-mono ${
                        isSelected
                          ? 'bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] border border-[var(--border-gold)]'
                          : 'bg-black/20 text-[var(--text-muted)]'
                      }`}>
                        {service.badge}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'text-[var(--accent-gold)] translate-x-1' : 'text-gray-600'}`} />
                    </div>

                    {/* Active Left Indicator Bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="active-service-bar"
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent-gold)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Immersive Service Preview Canvas (7 cols on lg) */}
            <div id="service-preview-stage" className="lg:col-span-7 sticky top-28 scroll-mt-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[var(--bg-card)] border border-[var(--border-gold)] p-5 sm:p-10 shadow-editorial relative overflow-hidden space-y-6"
                >
                  {/* Giant Monospaced Watermark Number */}
                  <span className="absolute -bottom-8 -right-4 font-serif text-[120px] sm:text-[180px] font-bold text-white/[0.03] select-none pointer-events-none leading-none">
                    {selectedService.number}
                  </span>

                  {/* Header Meta */}
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-xs sm:text-sm text-[var(--accent-gold)] font-bold tracking-widest">
                        [{selectedService.number} / 10]
                      </span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] px-2 sm:px-2.5 py-0.5 sm:py-1 border border-[var(--border-gold)] font-mono">
                        {selectedService.badge}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {selectedService.timeline}
                    </span>
                  </div>

                  {/* Title & Narrative Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[var(--text-primary)]">
                      {selectedService.title}
                    </h3>
                    <p className="text-xs text-[var(--accent-gold)] uppercase tracking-wider font-light">
                      {selectedService.subtitle}
                    </p>
                  </div>

                  {/* Full Scope Description */}
                  <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed font-light">
                    {selectedService.fullDesc}
                  </p>

                  {/* Key Deliverables & Scope Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] block">
                        Verified Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] font-light">
                        {selectedService.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[var(--accent-gold)] shrink-0 mt-1.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] block">
                        Prerequisites &amp; Scope
                      </span>
                      <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] font-light">
                        {selectedService.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <Link
                      to={`/services/${selectedService.slug}`}
                      className="text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--accent-gold)] flex items-center justify-center sm:justify-start gap-1.5 font-medium transition-colors py-1"
                    >
                      <span>Read Complete Protocol Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <MagneticButton strength={0.2} className="w-full sm:w-auto">
                      <Button
                        variant="primary"
                        size="md"
                        fullWidth
                        className="sm:w-auto"
                        onClick={onOpenAssessment}
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Assess Profile For This Pillar
                      </Button>
                    </MagneticButton>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* FULL 10-PILLAR GRID VIEW */}
        {viewMode === 'grid' && (
          <div>
            {/* Phase Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              <button
                onClick={() => setActiveCategory('all')}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 border transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] border-[var(--accent-gold)] font-semibold shadow-gold-subtle'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)]'
                }`}
              >
                All 10 Pillars ({filteredServices.length})
              </button>
              <button
                onClick={() => setActiveCategory('admissions')}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 border transition-all duration-300 ${
                  activeCategory === 'admissions'
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] border-[var(--accent-gold)] font-semibold shadow-gold-subtle'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)]'
                }`}
              >
                Admissions &amp; Editorial (01–03, 06)
              </button>
              <button
                onClick={() => setActiveCategory('consular')}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 border transition-all duration-300 ${
                  activeCategory === 'consular'
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] border-[var(--accent-gold)] font-semibold shadow-gold-subtle'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)]'
                }`}
              >
                Consular &amp; Legal (04, 05, 07, 08)
              </button>
              <button
                onClick={() => setActiveCategory('transition')}
                className={`text-xs uppercase tracking-[0.2em] px-4 py-2.5 border transition-all duration-300 ${
                  activeCategory === 'transition'
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] border-[var(--accent-gold)] font-semibold shadow-gold-subtle'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)]'
                }`}
              >
                Departure &amp; Settlement (09, 10)
              </button>
            </div>

            {/* 10 Services Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onQuickAssess={() => onOpenAssessment()}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Statutory Guarantee Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 bg-[var(--bg-card)] border border-[var(--border-gold)] flex flex-col md:flex-row items-center justify-between gap-6 shadow-editorial">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-semibold font-mono block">
              [ STATUTORY TRANSPARENCY PROTOCOL ]
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--text-primary)]">
              Every stage directed by MARA &amp; OISC registered practitioners.
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]/80 font-light">
              We provide fixed written fee agreements upfront. Zero hidden charges, 100% legal clarity.
            </p>
          </div>
          <MagneticButton strength={0.25} className="w-full md:w-auto">
            <Button
              variant="primary"
              size="md"
              fullWidth
              className="md:w-auto"
              onClick={onOpenAssessment}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Free Assessment
            </Button>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
};
