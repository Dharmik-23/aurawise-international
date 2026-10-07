import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { CountriesSection } from '../sections/CountriesSection';
import { DESTINATION_COUNTRIES } from '../data/companyData';
import { Button } from '../components/Button';
import { MagneticButton } from '../components/MagneticButton';
import { ArrowRight, Plane } from 'lucide-react';

interface CountriesPageProps {
  onSelectCountry: (countryName: string) => void;
  onOpenAssessment: () => void;
}

export const CountriesPage: React.FC<CountriesPageProps> = ({
  onSelectCountry,
  onOpenAssessment,
}) => {
  const [compareCountryA, setCompareCountryA] = useState('Canada');
  const [compareCountryB, setCompareCountryB] = useState('Australia');

  const countryA = DESTINATION_COUNTRIES.find(c => c.name === compareCountryA) || DESTINATION_COUNTRIES[0];
  const countryB = DESTINATION_COUNTRIES.find(c => c.name === compareCountryB) || DESTINATION_COUNTRIES[1];

  const mobilityHighlights = [
    { destination: 'Canada', flightHours: '15.5h', timezone: 'UTC-5', minCost: 'CAD 20,635 GIC', status: 'SDS Active' },
    { destination: 'Australia', flightHours: '12h', timezone: 'UTC+10', minCost: 'AUD 29,710', status: 'Subclass 500 Open' },
    { destination: 'United Kingdom', flightHours: '9h', timezone: 'UTC+0', minCost: 'GBP 12,006 28-day', status: 'Priority CAS' },
    { destination: 'United States', flightHours: '16h', timezone: 'UTC-5', minCost: 'USD 35,000 I-20', status: 'F-1 Priority Slots' },
    { destination: 'Germany', flightHours: '8.5h', timezone: 'UTC+1', minCost: 'EUR 11,904 Blocked', status: 'APS / Chancenkarte' },
    { destination: 'Ireland', flightHours: '10.5h', timezone: 'UTC+0', minCost: 'EUR 10,000 Stamp 2', status: 'CSEP / Stamp 1G' },
    { destination: 'New Zealand', flightHours: '16h', timezone: 'UTC+12', minCost: 'NZD 20,000 FTS', status: 'Green List Open' },
    { destination: 'United Arab Emirates', flightHours: '3.5h', timezone: 'UTC+4', minCost: 'AED 30,000', status: '10-Yr Golden Visa' },
    { destination: 'France', flightHours: '9.5h', timezone: 'UTC+1', minCost: 'EUR 7,380 VLS-TS', status: '5-Yr Alumni Route' },
    { destination: 'Italy', flightHours: '9h', timezone: 'UTC+1', minCost: 'EUR 6,000 Universitaly', status: 'DSU Grant Open' },
  ];

  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="10 Prime Global Destinations | AuraWise International — Visas &amp; PR Pathways"
        description="Compare study, work, and settlement corridors across Canada, Australia, New Zealand, UK, USA, Germany, Ireland, UAE, France, and Italy with real-time consular criteria."
        keywords="study abroad destinations, Canada PR Express Entry, Australia subclass 500, UK student visa, Germany Chancenkarte, Ireland Stamp 2, New Zealand Green List"
        canonicalPath="/countries"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: '10 Destinations', path: '/countries' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ 10 PRIME GLOBAL DESTINATIONS ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              10 Global Corridors. <br />
              <span className="italic font-light text-[var(--text-secondary)]">Verified Legal Pathways.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              From the permanent residency streams of Canada, Australia and New Zealand to the tech hubs of the UK, USA, Germany and Ireland, and the European opportunities of France and Italy—navigate verified visa routes with MARA &amp; OISC registered counsel.
            </p>
          </div>
        </Container>
      </section>

      {/* Global Mobility Ticker Cards */}
      <section className="py-8 sm:py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] overflow-hidden">
        <Container>
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-[var(--accent-gold)]" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[var(--accent-gold)] font-semibold">
                [ MOBILITY &amp; CONSULAR READINESS INDEX ]
              </span>
            </div>
            <span className="text-xs text-[var(--text-muted)] font-light hidden sm:inline">
              Flight times from India (AMD / BOM / DEL)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {mobilityHighlights.map((m) => (
              <div
                key={m.destination}
                className="p-2.5 sm:p-3 bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-gold)] transition-colors space-y-1 min-w-0"
              >
                <div className="flex items-center justify-between text-[11px] font-serif font-medium text-[var(--text-primary)] truncate">
                  <span className="truncate">{m.destination}</span>
                </div>
                <div className="text-[10px] font-mono text-[var(--accent-gold)] font-semibold">
                  {m.flightHours}
                </div>
                <div className="text-[9px] text-[var(--text-muted)] truncate">
                  {m.status}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Countries Pavilion Section */}
      <CountriesSection onSelectCountry={onSelectCountry} />

      {/* Interactive Side-by-Side Comparison Dossier */}
      <section className="py-10 sm:py-20 lg:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <SectionHeading
            number="SIDE-BY-SIDE AUDIT"
            badge="Direct Comparative Intelligence"
            title="Benchmark Two Corridors"
            italicWord="Side-by-Side"
            subtitle="Compare work permits, PR points thresholds, and processing speed between any two destination countries."
          />

          {/* Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-3.5 sm:p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-[var(--text-muted)] shrink-0">CORRIDOR A:</span>
              <select
                value={compareCountryA}
                onChange={(e) => setCompareCountryA(e.target.value)}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3 py-1.5 text-base sm:text-xs font-serif font-medium focus:outline-none max-w-[200px]"
              >
                {DESTINATION_COUNTRIES.map(c => (
                  <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                ))}
              </select>
            </div>

            <div className="p-3.5 sm:p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-[var(--text-muted)] shrink-0">CORRIDOR B:</span>
              <select
                value={compareCountryB}
                onChange={(e) => setCompareCountryB(e.target.value)}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3 py-1.5 text-base sm:text-xs font-serif font-medium focus:outline-none max-w-[200px]"
              >
                {DESTINATION_COUNTRIES.map(c => (
                  <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Matrix Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Country A Card */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-prominent)] p-5 sm:p-8 space-y-6 shadow-editorial">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{countryA.flag}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-[var(--text-primary)]">{countryA.name}</h3>
                    <span className="text-[10px] text-[var(--accent-gold)] font-mono">{countryA.code} • {countryA.editorialSubtitle}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex justify-between">
                  <span className="text-[var(--text-muted)]">Processing Window:</span>
                  <span className="font-mono text-[var(--text-primary)] font-semibold">{countryA.avgProcessingTime}</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex justify-between">
                  <span className="text-[var(--text-muted)]">Post-Study Work:</span>
                  <span className="text-[var(--text-primary)] font-semibold">{countryA.postStudyWork}</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex justify-between">
                  <span className="text-[var(--text-muted)]">PR Pathway:</span>
                  <span className="text-[var(--accent-gold)] font-medium truncate max-w-[200px]">{countryA.prOpportunity}</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-[var(--text-muted)] block">Top Disciplines:</span>
                  <span className="text-[var(--text-primary)] font-light">{countryA.topPrograms.join(' • ')}</span>
                </div>
              </div>

              <Button variant="primary" size="sm" className="w-full" onClick={() => onSelectCountry(countryA.name)}>
                Assess {countryA.name} Eligibility
              </Button>
            </div>

            {/* Country B Card */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-prominent)] p-5 sm:p-8 space-y-6 shadow-editorial">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{countryB.flag}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-[var(--text-primary)]">{countryB.name}</h3>
                    <span className="text-[10px] text-[var(--accent-gold)] font-mono">{countryB.code} • {countryB.editorialSubtitle}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex justify-between">
                  <span className="text-[var(--text-muted)]">Processing Window:</span>
                  <span className="font-mono text-[var(--text-primary)] font-semibold">{countryB.avgProcessingTime}</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex justify-between">
                  <span className="text-[var(--text-muted)]">Post-Study Work:</span>
                  <span className="text-[var(--text-primary)] font-semibold">{countryB.postStudyWork}</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex justify-between">
                  <span className="text-[var(--text-muted)]">PR Pathway:</span>
                  <span className="text-[var(--accent-gold)] font-medium truncate max-w-[200px]">{countryB.prOpportunity}</span>
                </div>
                <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-[var(--text-muted)] block">Top Disciplines:</span>
                  <span className="text-[var(--text-primary)] font-light">{countryB.topPrograms.join(' • ')}</span>
                </div>
              </div>

              <Button variant="primary" size="sm" className="w-full" onClick={() => onSelectCountry(countryB.name)}>
                Assess {countryB.name} Eligibility
              </Button>
            </div>
          </div>

          {/* 10 Destinations Full Comparative Table */}
          <div className="overflow-x-auto shadow-editorial border border-[var(--border-subtle)] no-scrollbar touch-pan-x">
            <div className="p-2.5 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] text-[10px] text-[var(--accent-gold)] font-mono flex items-center justify-between sm:hidden">
              <span>⇄ SWIPE TABLE TO VIEW ALL METRICS</span>
              <span>10 DESTINATIONS</span>
            </div>
            <table className="w-full min-w-[700px] text-left text-xs bg-[var(--bg-card)]">
              <thead className="bg-[var(--bg-surface)] text-[var(--accent-gold)] uppercase tracking-[0.2em] font-semibold border-b border-[var(--border-subtle)] font-mono">
                <tr>
                  <th className="p-3.5 sm:p-5">Destination</th>
                  <th className="p-3.5 sm:p-5">Processing Time</th>
                  <th className="p-3.5 sm:p-5">Post-Study Work</th>
                  <th className="p-3.5 sm:p-5">PR / Settlement Pathway</th>
                  <th className="p-3.5 sm:p-5">Key Programs</th>
                  <th className="p-3.5 sm:p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)] font-light">
                {DESTINATION_COUNTRIES.map((country, idx) => (
                  <tr key={country.name} className="hover:bg-[var(--bg-elevated)] transition-colors">
                    <td className="p-3.5 sm:p-5 font-medium text-[var(--text-primary)] flex items-center gap-2.5">
                      <span className="text-xl shrink-0">{country.flag}</span>
                      <div>
                        <span className="font-serif text-sm block leading-none">{country.name}</span>
                        <span className="font-mono text-[9px] text-[var(--accent-gold)] tracking-wider">0{idx + 1}</span>
                      </div>
                    </td>
                    <td className="p-3.5 sm:p-5 font-mono text-[11px]">{country.avgProcessingTime}</td>
                    <td className="p-3.5 sm:p-5 text-[var(--text-primary)] font-medium">{country.postStudyWork}</td>
                    <td className="p-3.5 sm:p-5 text-[var(--accent-gold)] font-light max-w-xs">{country.prOpportunity}</td>
                    <td className="p-3.5 sm:p-5">
                      <span className="truncate block max-w-xs text-xs text-[var(--text-muted)]">{country.topPrograms.slice(0, 2).join(', ')}</span>
                    </td>
                    <td className="p-3.5 sm:p-5 text-right">
                      <button
                        onClick={() => onSelectCountry(country.name)}
                        className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] font-medium hover:underline underline-offset-4 transition-colors font-mono touch-manipulation py-1"
                      >
                        Assess
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 sm:mt-14 text-center">
            <MagneticButton strength={0.25} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="sm:w-auto"
                onClick={onOpenAssessment}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Free Country Compatibility Audit
              </Button>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </div>
  );
};
