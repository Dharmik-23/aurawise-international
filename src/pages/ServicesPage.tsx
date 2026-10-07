import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ServicesSection } from '../sections/ServicesSection';
import { CORE_SERVICES } from '../data/companyData';
import { Check, ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

interface ServicesPageProps {
  onOpenAssessment: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenAssessment }) => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="10 Core Advisory Pillars | AuraWise International — Admission to Touchdown"
        description="Explore our 10-pillar advisory framework: Profile Diagnostic, University Shortlisting, Admission Management, Visa Filing, Financial Guidance, and Post-Arrival Settlement."
        keywords="immigration advisory pillars, study abroad services, visa filing services Ahmedabad, university admissions consultant, SOP drafting, financial portfolio verification"
        canonicalPath="/services"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Advisory Pillars', path: '/services' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ 10 CORE ADVISORY PILLARS ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              A Complete Advisory Lifecycle. <br />
              <span className="italic font-light text-[var(--text-secondary)]">Statutory Precision at Every Step.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              From our initial diagnostic profile audit to housing settlement and local social insurance registrations, our 10-step methodology eliminates risks, prevents refusals, and accelerates your international success.
            </p>
          </div>
        </Container>
      </section>

      {/* Reusable Services Section */}
      <ServicesSection onOpenAssessment={onOpenAssessment} />

      {/* Detailed Service Deep-Dives for All 10 Pillars */}
      <section className="py-10 sm:py-20 lg:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
        <Container>
          <SectionHeading
            number="DETAILED PROTOCOLS"
            badge="Full Service Specifications"
            title="Comprehensive Deliverables &amp; Checklists"
            subtitle="Examine the exact scope, document checklists, and verifiable outcomes delivered under each of our 10 advisory pillars."
          />

          <div className="space-y-8 sm:space-y-12">
            {CORE_SERVICES.map((s) => (
              <div
                key={s.id}
                id={s.slug}
                className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 sm:p-10 scroll-mt-28 shadow-editorial"
              >
                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 border-b border-[var(--border-subtle)] pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-sm text-[var(--accent-gold)] font-semibold tracking-widest">
                        [{s.number}]
                      </span>
                      <span className="text-[9.5px] uppercase tracking-[0.2em] font-semibold bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] px-2.5 py-1 border border-[var(--border-gold)] font-mono">
                        {s.badge}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[var(--text-primary)]">
                      {s.title}
                    </h2>
                    <p className="text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1 font-light font-mono">
                      {s.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      className="sm:w-auto"
                      onClick={onOpenAssessment}
                    >
                      Assess Profile
                    </Button>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] hover:text-[var(--accent-gold)] flex items-center justify-center sm:justify-start gap-1 font-medium font-mono py-1"
                    >
                      <span>Full Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed font-light mb-8 max-w-4xl">
                  {s.fullDesc}
                </p>

                {/* 3-column breakdown: Highlights, Eligibility, Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="bg-[var(--bg-surface)] p-5 border border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Scope of Work</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-light">
                      {s.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[var(--bg-surface)] p-5 border border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono">
                      <Clock className="w-4 h-4" />
                      <span>Formal Deliverables</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-light">
                      {s.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[var(--accent-gold)] shrink-0 mt-1.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[var(--bg-surface)] p-5 border border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono">
                      <FileText className="w-4 h-4" />
                      <span>Required Documents</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-light">
                      {s.documentsNeeded.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[var(--accent-gold)] shrink-0 mt-1.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
