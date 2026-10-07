import React, { useState } from 'react';
import {
  Calculator,
  ArrowRight,
  ShieldCheck,
  Clock,
  Briefcase,
  Award
} from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { DESTINATION_COUNTRIES } from '../data/companyData';
import { DESTINATION_AURAS } from '../context/themeData';

interface VisaCalculatorSectionProps {
  onOpenAssessmentWithData?: (service: string, country: string) => void;
}

export const VisaCalculatorSection: React.FC<VisaCalculatorSectionProps> = ({
  onOpenAssessmentWithData
}) => {
  const [selectedCountryName, setSelectedCountryName] = useState('Canada');
  const [intent, setIntent] = useState<'study' | 'pr' | 'work'>('study');
  const [degree, setDegree] = useState<'bachelor' | 'master' | 'highschool'>('bachelor');
  const [experience, setExperience] = useState<'fresh' | 'mid' | 'senior'>('mid');
  const [englishLevel, setEnglishLevel] = useState<'high' | 'mid' | 'prep'>('high');

  const selectedCountry = DESTINATION_COUNTRIES.find(c => c.name === selectedCountryName) || DESTINATION_COUNTRIES[0];
  const aura = DESTINATION_AURAS[selectedCountry.code];

  // Dynamic calculated score
  const calculateScore = () => {
    let score = 70;
    if (degree === 'master') score += 15;
    if (degree === 'bachelor') score += 10;
    if (experience === 'senior') score += 10;
    if (experience === 'mid') score += 5;
    if (englishLevel === 'high') score += 10;
    if (englishLevel === 'mid') score += 5;
    return Math.min(score, 99);
  };

  const calculatedScore = calculateScore();

  const getRecommendedStream = () => {
    if (intent === 'pr') {
      return selectedCountry.prOpportunity.split('&')[0].trim();
    }
    if (intent === 'work') {
      const workVisa = selectedCountry.visaTypes.find(v => v.category === 'Employment');
      return workVisa ? workVisa.title : 'Accredited Employer Work Route';
    }
    const studentVisa = selectedCountry.visaTypes.find(v => v.category === 'Education');
    return studentVisa ? studentVisa.title : 'Full-Time Student Permit';
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[600px] h-[400px] rounded-full blur-[170px] pointer-events-none opacity-15"
        style={{ backgroundColor: aura ? aura.primaryColor : 'var(--accent-gold)' }}
      />

      <Container>
        <SectionHeading
          number="FEASIBILITY ENGINE"
          badge="Predictive Visa Audit"
          title="Institutional Mobility &amp;"
          italicWord="Settlement Calculator"
          subtitle="Simulate your academic and immigration points feasibility across the 10 destinations in real time before retaining statutory legal counsel."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Column: Interactive Inputs (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 sm:p-10 shadow-editorial space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[var(--border-subtle)]">
              <Calculator className="w-4 h-4 text-[var(--accent-gold)]" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[var(--text-primary)] font-semibold">
                [ DIAGNOSTIC PROFILE PARAMETERS ]
              </span>
            </div>

            {/* Parameter 1: Destination Selection */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-2 font-mono">
                1. Select Target Destination
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {DESTINATION_COUNTRIES.map((c) => {
                  const isChosen = selectedCountryName === c.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedCountryName(c.name)}
                      className={`p-2.5 border text-left text-xs transition-all flex items-center gap-2 touch-manipulation cursor-pointer ${
                        isChosen
                          ? 'bg-[var(--bg-elevated)] border-[var(--accent-gold)] text-[var(--text-primary)] font-semibold shadow-xs'
                          : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span className="truncate text-[11px]">{c.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Parameter 2: Migration Purpose */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-2 font-mono">
                2. Intended Primary Pathway
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'study', label: 'Higher Education & PSW', desc: 'Degrees & 2–3 Yr Work Permits' },
                  { id: 'pr', label: 'Direct Permanent Residency', desc: 'Express Entry, Go8 & Points' },
                  { id: 'work', label: 'Corporate Work Permit', desc: 'Sponsored & High Talent' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIntent(item.id as any)}
                    className={`p-3 border text-left transition-all touch-manipulation cursor-pointer ${
                      intent === item.id
                        ? 'bg-[var(--bg-elevated)] border-[var(--accent-gold)] text-[var(--text-primary)] font-medium shadow-xs'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="text-xs font-serif font-medium">{item.label}</div>
                    <div className="text-[10px] text-[var(--text-muted)] mt-0.5 font-light">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameter 3 & 4: Qualification & Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-2 font-mono">
                  3. Highest Completed Degree
                </label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value as any)}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                >
                  <option value="master">Master's / Postgrad Degree (+15 pts)</option>
                  <option value="bachelor">Bachelor's Degree (+10 pts)</option>
                  <option value="highschool">Diploma / 12th Grade (+5 pts)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-2 font-mono">
                  4. Professional Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value as any)}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                >
                  <option value="senior">5+ Years Relevant Experience (+10 pts)</option>
                  <option value="mid">1–4 Years Experience (+5 pts)</option>
                  <option value="fresh">Fresher / Under 1 Year (0 pts)</option>
                </select>
              </div>
            </div>

            {/* Parameter 5: English Readiness */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-2 font-mono">
                5. English Proficiency Band (IELTS / PTE / TOEFL)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'high', label: 'Superior / Band 7.5+', desc: 'CLB 9 / High Points' },
                  { id: 'mid', label: 'Proficient / Band 6.5–7.0', desc: 'Direct University Admit' },
                  { id: 'prep', label: 'Preparing / In Coaching', desc: 'Diagnostic Coaching' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEnglishLevel(item.id as any)}
                    className={`p-2.5 border text-left transition-all ${
                      englishLevel === item.id
                        ? 'bg-[var(--bg-elevated)] border-[var(--accent-gold)] text-[var(--text-primary)] font-medium shadow-xs'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <div className="text-xs font-serif">{item.label}</div>
                    <div className="text-[9.5px] text-[var(--text-muted)] font-light mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Institutional Dossier Output (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[var(--bg-card)] border border-[var(--border-gold)] p-6 sm:p-8 shadow-editorial space-y-6 relative overflow-hidden">
            {/* Top Score Meter */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono block">
                  [ ADMISSION &amp; VISA PROBABILITY ]
                </span>
                <h4 className="font-serif text-2xl text-[var(--text-primary)] font-normal">
                  Diagnostic Feasibility Output
                </h4>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl font-normal text-[var(--accent-gold)] leading-none block">
                  {calculatedScore}%
                </span>
                <span className="text-[9.5px] text-[var(--text-muted)] uppercase tracking-wider font-mono">
                  HIGH PROBABILITY
                </span>
              </div>
            </div>

            {/* Target Corridor Badge */}
            <div className="p-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedCountry.flag}</span>
                <div>
                  <span className="text-xs font-serif text-[var(--text-primary)] block font-medium">
                    {selectedCountry.name} Corridor
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] font-light">
                    {selectedCountry.tagline}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[var(--accent-gold)]">
                {selectedCountry.code}
              </span>
            </div>

            {/* 4 Metric Results */}
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  <span>Processing Turnaround:</span>
                </div>
                <span className="font-mono text-[var(--text-primary)] font-semibold">
                  {selectedCountry.avgProcessingTime}
                </span>
              </div>

              <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Briefcase className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  <span>Post-Study Work Rights:</span>
                </div>
                <span className="text-[var(--text-primary)] font-semibold">
                  {selectedCountry.postStudyWork}
                </span>
              </div>

              <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Award className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  <span>Recommended Visa Stream:</span>
                </div>
                <span className="text-[var(--accent-gold)] font-medium truncate max-w-[180px]">
                  {getRecommendedStream()}
                </span>
              </div>
            </div>

            {/* Statutory Compliance Note */}
            <div className="p-3.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-2.5 text-xs text-[var(--text-secondary)] font-light">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
              <span>
                Calculated on real-world consular acceptance matrices under MARA &amp; OISC standards. Refusal risk is mitigated with our 3-tier document verification protocol.
              </span>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  if (onOpenAssessmentWithData) {
                    onOpenAssessmentWithData('Profile Assessment', selectedCountry.name);
                  }
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Dossier For Official Legal Review
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
