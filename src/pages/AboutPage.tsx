import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { TeamSection } from '../sections/TeamSection';
import { TrustSection } from '../sections/TrustSection';

interface AboutPageProps {
  onOpenAssessment: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAssessment }) => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="About Us | AuraWise International — 15+ Years Registered Legal Advisory"
        description="Founded in 2009 in Ahmedabad, AuraWise International combines 15+ years of excellence, 50+ MARA & OISC registered counsel, and 500+ university partners to deliver 98% visa certainty."
        keywords="about AuraWise International, study abroad consultancy history Ahmedabad, MARA registered agents, OISC UK legal counsel, AIRC certified consultants"
        canonicalPath="/about"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ ABOUT OUR PRACTICE ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              A Legacy of Trust, Global Vision &amp; <br />
              <span className="italic font-light text-[var(--text-secondary)]">Outcome Certainty.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              Since 2009, AuraWise International has transformed the overseas education and migration landscape across India by replacing guesswork with government-certified legal precision.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust Metrics */}
      <div className="pt-2 sm:pt-4">
        <TrustSection />
      </div>

      {/* In-Depth Story & Split Section */}
      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-semibold font-mono block">
                Foundational Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--text-primary)]">
                Our Genesis &amp; 15-Year Evolution
              </h2>
              <div className="h-[1px] w-16 bg-[var(--accent-gold)]" />
              <p className="text-sm sm:text-base text-[var(--text-primary)]/90 leading-relaxed font-light">
                AuraWise was incorporated with a singular mandate: to provide honest, transparent, and legally sound advisory services to Indian students and working professionals aiming for higher education and permanent relocation abroad.
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                Beginning from our headquarters in Ahmedabad, Gujarat, we recognized that the majority of visa refusals stemmed from poor representation, incorrect financial documentation, and unaccredited agency handlers. Over the past 15 years, we have built a team of over 50 professionals licensed with <strong>MARA (Australia)</strong>, <strong>OISC (UK)</strong>, and <strong>AIRC (US)</strong>.
              </p>
              <div className="pt-2">
                <Button variant="primary" size="md" fullWidth className="sm:w-auto" onClick={onOpenAssessment} icon={<ArrowRight className="w-4 h-4" />}>
                  Schedule Founder Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative border border-[var(--border-gold)] p-2 sm:p-3 bg-[var(--bg-card)] shadow-editorial">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="AuraWise International senior immigration advisory council collaborating in Ahmedabad headquarters"
                  className="w-full h-[280px] sm:h-[460px] object-cover filter brightness-[0.9] contrast-[1.1]"
                  loading="lazy"
                  decoding="async"
                  width="1000"
                  height="667"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Principles Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
        <Container>
          <SectionHeading
            number="ETHICS & GOVERNANCE"
            badge="Foundational Tenets"
            title="The 4 Uncompromising Principles of"
            italicWord="AuraWise International"
            subtitle="How we maintain our 98% audited visa success rate year after year."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Statutory Integrity",
                desc: "We never fabricate experience, alter financial records, or cut corners. Every submitted file is bulletproof and legally compliant."
              },
              {
                number: "02",
                title: "Merit Matching",
                desc: "We do not push partner institutions based on commission rates. We recommend universities that truly match your profile, aspirations, and budget."
              },
              {
                number: "03",
                title: "Transparent Retainers",
                desc: "All client agreements feature fixed fees in writing. Zero hidden costs, zero surprise escalations at the eleventh hour."
              },
              {
                number: "04",
                title: "Lifelong Partnership",
                desc: "Our commitment extends beyond your visa grant. We provide housing support, airport greeting, and access to our active alumni network."
              }
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-gold)] p-6 space-y-3 transition-all hover:shadow-editorial"
              >
                <span className="font-mono text-2xl font-semibold text-[var(--accent-gold)] block">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl font-normal text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Meet The Leadership Team */}
      <TeamSection />
    </div>
  );
};
