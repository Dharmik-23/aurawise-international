import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Logo } from './Logo';
import { Container } from './Container';
import { COMPANY_INFO, DESTINATION_COUNTRIES, CORE_SERVICES } from '../data/companyData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-canvas)] text-[var(--text-primary)] border-t border-[var(--border-gold)] relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-gold-glow)] rounded-full blur-[160px] pointer-events-none opacity-15" />

      {/* Main Footer Grid */}
      <div className="pt-12 sm:pt-20 pb-10 sm:pb-12 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-10 sm:mb-16">
            {/* Column 1: Brand & Credentials (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <Logo size="lg" />
              <p className="text-[var(--text-secondary)]/80 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                India's premier international education and legal immigration consultancy since 2009. Registered with MARA, OISC &amp; AIRC. Empowering ambitious students and families to access world-class universities and legitimate residency across 10 prime destinations.
              </p>

              {/* Accreditations Trust Badges */}
              <div className="pt-2">
                <span className="text-[9.5px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono block mb-2.5">
                  [ VERIFIED STATUTORY ACCREDITATIONS ]
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {COMPANY_INFO.accreditations.map((acc) => (
                    <div
                      key={acc.code}
                      className="flex items-center gap-2 p-2 bg-[var(--bg-card)] border border-[var(--border-subtle)]"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0" />
                      <div className="leading-tight">
                        <span className="font-semibold text-[var(--text-primary)] block text-xs">{acc.code}</span>
                        <span className="text-[10px] text-[var(--text-muted)] font-light">{acc.country}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: 10 Destinations (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-serif text-lg font-normal text-[var(--text-primary)] tracking-wide border-b border-[var(--border-gold)] pb-2 inline-block">
                10 Destinations
              </h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]/80 font-light">
                {DESTINATION_COUNTRIES.map((c) => (
                  <li key={c.name}>
                    <Link
                      to="/countries"
                      className="hover:text-[var(--accent-gold)] transition-colors flex items-center justify-between py-0.5 group"
                    >
                      <span className="flex items-center gap-2">
                        <span>{c.flag}</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">{c.name}</span>
                      </span>
                      <span className="font-mono text-[9px] text-[var(--text-muted)]">{c.code}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: 10 Services (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-serif text-lg font-normal text-[var(--text-primary)] tracking-wide border-b border-[var(--border-gold)] pb-2 inline-block">
                Advisory Pillars
              </h3>
              <ul className="space-y-1.5 text-[11px] text-[var(--text-secondary)]/80 font-light">
                {CORE_SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="hover:text-[var(--accent-gold)] transition-colors flex items-center gap-1.5 truncate group"
                    >
                      <span className="font-mono text-[9px] text-[var(--accent-gold)]">{s.number}</span>
                      <span className="truncate group-hover:translate-x-0.5 transition-transform">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Office (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-serif text-lg font-normal text-[var(--text-primary)] tracking-wide border-b border-[var(--border-gold)] pb-2 inline-block">
                Headquarters
              </h3>

              <div className="space-y-3.5 text-xs text-[var(--text-secondary)]/80 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-[var(--text-primary)] block font-medium">Ahmedabad Office</strong>
                    <span>{COMPANY_INFO.contact.address.line1}, {COMPANY_INFO.contact.address.locality}, {COMPANY_INFO.contact.address.city}, {COMPANY_INFO.contact.address.state} {COMPANY_INFO.contact.address.pincode}, India</span>
                    <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">({COMPANY_INFO.contact.address.landmark})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                  <div className="flex flex-col font-mono text-xs">
                    <a href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`} className="text-[var(--text-primary)] hover:text-[var(--accent-gold)]">
                      {COMPANY_INFO.contact.primaryPhone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.contact.landline.replace(/\s+/g, '')}`} className="text-[var(--text-muted)] hover:text-[var(--accent-gold)]">
                      {COMPANY_INFO.contact.landline}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                  <div className="flex flex-col text-xs">
                    <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} className="text-[var(--text-primary)] hover:text-[var(--accent-gold)]">
                      {COMPANY_INFO.contact.primaryEmail}
                    </a>
                    <a href="mailto:visa@aurawise.in" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)]">
                      visa@aurawise.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[var(--accent-gold)] shrink-0" />
                  <span className="text-xs">{COMPANY_INFO.contact.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Disclaimers */}
          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between text-xs text-[var(--text-muted)] gap-4 font-light">
            <div className="text-center md:text-left">
              &copy; {CURRENT_YEAR} {COMPANY_INFO.legalName}. All rights reserved. Registered under statutory immigration directives.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-[var(--accent-gold)] transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-[var(--accent-gold)] transition-colors">
                Regulatory Disclaimers
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
