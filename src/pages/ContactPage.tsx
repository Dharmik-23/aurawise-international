import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { ContactSection } from '../sections/ContactSection';
import { Car, Train, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="Contact AuraWise International | Ahmedabad Headquarters & Free Consultation"
        description="Connect with AuraWise International at PNTC, Times Of India Press Road, Vejalpur, Ahmedabad. Call +91 98765 43210 or email info@aurawise.in. Book your free profile evaluation today."
        keywords="contact AuraWise International, overseas education consultancy Ahmedabad contact, study abroad consultation Ahmedabad, PNTC Vejalpur education advisor, visa consultant phone number"
        canonicalPath="/contact"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' },
        ]}
        structuredData={{
          '@type': 'ContactPage',
          '@id': 'https://aurawise.international/contact#webpage',
          url: 'https://aurawise.international/contact',
          name: 'Contact AuraWise International',
          mainEntity: {
            '@type': 'LocalBusiness',
            name: 'AuraWise International LLP',
            telephone: '+919876543210',
            email: 'info@aurawise.in',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'C-1001, PNTC, Times Of India Press Road, Vejalpur',
              addressLocality: 'Ahmedabad',
              addressRegion: 'Gujarat',
              postalCode: '380015',
              addressCountry: 'IN',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
            ],
          },
        }}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ CORPORATE ADVISORY DESK ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              Let's Chart Your Global <br />
              <span className="italic font-light text-[var(--text-secondary)]">Trajectory Together.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              Visit our headquarters in Ahmedabad, schedule a high-definition video evaluation, or speak directly with our certified MARA &amp; OISC registered advisors.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Section with Form & Address */}
      <ContactSection />

      {/* Visiting Our Ahmedabad Office Info */}
      <section className="py-10 sm:py-16 lg:py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
        <Container>
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 sm:p-10 max-w-5xl mx-auto shadow-editorial">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono block mb-2">
              [ VISITOR PROTOCOL ]
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--text-primary)] mb-4">
              Visiting Our Ahmedabad Headquarters
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-8">
              Our office is located in the commercial complex of PNTC on Times of India Press Road (Radio Mirchi lane) in Vejalpur, easily accessible from SG Highway, Prahlad Nagar, and Satellite.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--bg-surface)] p-5 border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono">
                  <Car className="w-4 h-4" />
                  <span>Road &amp; Parking</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                  Ample designated visitor parking within the PNTC complex basement. Landmark: Near Radio Mirchi / Times of India Press.
                </p>
              </div>

              <div className="bg-[var(--bg-surface)] p-5 border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono">
                  <Train className="w-4 h-4" />
                  <span>Metro &amp; Transit</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                  Proximity to Jivraj Park &amp; APMC Metro stations. Direct BRTS and AMTS bus links along Shivranjani and Vejalpur corridors.
                </p>
              </div>

              <div className="bg-[var(--bg-surface)] p-5 border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-gold)] font-mono">
                  <Clock className="w-4 h-4" />
                  <span>Appointments</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                  Mon – Sat: 9:00 AM – 6:00 PM. Prior booking recommended for dedicated one-on-one document assessment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
