import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation
} from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      <Container>
        <SectionHeading
          number="HEADQUARTERS"
          badge="Advisory Consultation &amp; Visits"
          title="Begin Your Journey with"
          italicWord="AuraWise International"
          subtitle="Visit our flagship Ahmedabad corporate office or schedule an in-depth remote video assessment with our MARA &amp; OISC registered practitioners."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Office Details & Location Info (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 sm:p-8 space-y-6 shadow-editorial">
              <div className="border-b border-[var(--border-subtle)] pb-4">
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono block mb-1">
                  [ AHMEDABAD HEADQUARTERS ]
                </span>
                <h3 className="font-serif text-2xl font-normal text-[var(--text-primary)]">
                  Corporate Advisory Office
                </h3>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[var(--bg-surface)] border border-[var(--border-gold)] text-[var(--accent-gold)] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold mb-1 font-mono">
                    Corporate Address
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)]/85 leading-relaxed font-light">
                    {COMPANY_INFO.contact.address.line1}, <br />
                    {COMPANY_INFO.contact.address.locality}, {COMPANY_INFO.contact.address.city}, <br />
                    {COMPANY_INFO.contact.address.state} — {COMPANY_INFO.contact.address.pincode}, India.
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-1 font-light">
                    Landmark: {COMPANY_INFO.contact.address.landmark}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[var(--bg-surface)] border border-[var(--border-gold)] text-[var(--accent-gold)] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold mb-1 font-mono">
                    Direct Telephones
                  </h4>
                  <div className="flex flex-col gap-0.5 font-mono text-xs sm:text-sm">
                    <a
                      href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                      className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                      {COMPANY_INFO.contact.primaryPhone} (Mobile / WhatsApp)
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contact.landline.replace(/\s+/g, '')}`}
                      className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                      {COMPANY_INFO.contact.landline} (Board Line)
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[var(--bg-surface)] border border-[var(--border-gold)] text-[var(--accent-gold)] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold mb-1 font-mono">
                    Official Enquiries
                  </h4>
                  <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-light">
                    <a
                      href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                      className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                      {COMPANY_INFO.contact.primaryEmail} (General)
                    </a>
                    <a
                      href="mailto:visa@aurawise.in"
                      className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                      visa@aurawise.in (Immigration Desk)
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[var(--bg-surface)] border border-[var(--border-gold)] text-[var(--accent-gold)] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)] font-semibold mb-1 font-mono">
                    Consultation Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)]/85 font-light">
                    {COMPANY_INFO.contact.workingHours}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] mt-0.5 font-light">
                    Prior appointment recommended for thorough profile evaluations.
                  </p>
                </div>
              </div>
            </div>

            {/* Styled Map Preview Card */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-5 space-y-3 shadow-editorial">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold font-mono">
                  <Navigation className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  <span>Google Maps Coordinates</span>
                </div>
                <a
                  href="https://maps.google.com/?q=PNTC+Times+Of+India+Press+Road+Vejalpur+Ahmedabad+Gujarat+380015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-wider text-[var(--accent-gold)] hover:underline"
                >
                  Open in Maps
                </a>
              </div>
              <div className="h-44 w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] relative overflow-hidden flex items-center justify-center">
                <iframe
                  title="AuraWise International Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4839556811776!2d72.516104!3d23.004456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851a7e4726ef%3A0x6d90bc8ce6a6a090!2sTimes%20Of%20India%20Press%20Rd%2C%20Vejalpur%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert contrast-125 opacity-70"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Booking Form (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
