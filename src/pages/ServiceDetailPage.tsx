import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { CORE_SERVICES } from '../data/companyData';

interface ServiceDetailPageProps {
  onOpenAssessment: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenAssessment }) => {
  const { slug } = useParams<{ slug: string }>();

  const service = CORE_SERVICES.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Redirect alias/id requests to the canonical URL slug
  if (slug !== service.slug) {
    return <Navigate to={`/services/${service.slug}`} replace />;
  }

  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title={`${service.title} | AuraWise International — Pillar [${service.number}]`}
        description={`${service.shortDesc} Handled with statutory precision by MARA & OISC certified advisors with written retainer agreements.`}
        keywords={`${service.title}, ${service.subtitle}, overseas education advisory, student visa filing, university admissions`}
        canonicalPath={`/services/${service.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Advisory Pillars', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': service.title,
          'serviceType': service.subtitle,
          'description': service.fullDesc,
          'provider': {
            '@type': 'EducationalOrganization',
            '@id': 'https://aurawise.international/#organization',
            'name': 'AuraWise International',
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': `${service.title} Deliverables`,
            'itemListElement': service.deliverables.map((deliv) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': deliv,
              },
            })),
          },
        }}
      />

      {/* Header Breadcrumb & Hero */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="mb-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-gold)] hover:text-[var(--text-primary)] transition-colors font-mono"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to 10 Advisory Pillars</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[var(--accent-gold)] font-semibold tracking-widest">
                [{service.number} / 10]
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
                <span>{service.badge}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              {service.title}
            </h1>
            <p className="text-xs sm:text-sm text-[var(--accent-gold)] uppercase tracking-[0.2em] font-light font-mono">
              {service.subtitle}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl pt-2">
              {service.shortDesc}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="md" fullWidth className="sm:w-auto" onClick={onOpenAssessment} icon={<ArrowRight className="w-4 h-4" />}>
                Assess {service.title} Profile
              </Button>
              <a
                href="#apply-form"
                className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--accent-gold)] underline underline-offset-4 font-mono text-center sm:text-left py-1"
              >
                Jump to Consultation Form
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Content & Specifications */}
      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Protocol Guide (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Detailed Overview */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-semibold font-mono block mb-2">
                  [ ADVISORY SCOPE &amp; METHODOLOGY ]
                </span>
                <h2 className="font-serif text-3xl font-normal text-[var(--text-primary)] mb-4">
                  Standard Operating Protocol
                </h2>
                <div className="h-[1px] w-16 bg-[var(--accent-gold)] mb-6" />
                <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed font-light mb-6">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono block">
                  Pillar Highlights &amp; Safeguards
                </span>
                <div className="space-y-3">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] font-light">
                      <Check className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Docket */}
              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono block">
                  Mandatory Verified Deliverables
                </span>
                <div className="space-y-3">
                  {service.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] font-light">
                      <span className="w-1.5 h-1.5 bg-[var(--accent-gold)] shrink-0 mt-2" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-8 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono block">
                  Client Documentation Checklist
                </span>
                <div className="space-y-3">
                  {service.documentsNeeded.map((doc, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] font-light">
                      <span className="w-1.5 h-1.5 bg-[var(--accent-gold)] shrink-0 mt-2" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Consultation Form (5 cols) */}
            <div id="apply-form" className="lg:col-span-5 sticky top-28 space-y-6">
              <ContactForm
                initialService={service.title}
                initialCountry={service.popularDestinations[0] || 'Canada'}
              />

              {/* Regulatory Assurance Callout */}
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[var(--accent-gold)] font-mono uppercase tracking-wider text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Compliance Protection</span>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed font-light">
                  AuraWise files all client representations under MARA (Australia Code of Conduct), OISC (UK Statutory Standards), and AIRC governance. No document falsification, 100% genuine legal verification.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
