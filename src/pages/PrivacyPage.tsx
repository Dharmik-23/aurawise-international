import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { COMPANY_INFO } from '../data/companyData';
import { Lock } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="Privacy Policy | AuraWise International — Data Protection & Confidentiality"
        description="Learn how AuraWise International LLP safeguards client transcripts, passport records, and immigration dossiers under Indian and international statutory standards."
        keywords="AuraWise privacy policy, student data protection, immigration document security, client confidentiality"
        canonicalPath="/privacy"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ]}
      />

      <section className="py-8 sm:py-16 lg:py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container size="narrow">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>[ DATA PROTECTION &amp; CONFIDENTIALITY ]</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-6xl font-normal tracking-tight text-[var(--text-primary)] mb-4 break-words">
            Privacy Policy
          </h1>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            LAST REVISED: OCTOBER 2026 • GOVERNING {COMPANY_INFO.legalName.toUpperCase()}
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <Container size="narrow">
          <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 sm:p-12 shadow-editorial text-[var(--text-secondary)] space-y-8 text-xs sm:text-sm leading-relaxed font-light">
            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                1. Commitment to Client Confidentiality
              </h2>
              <p>
                At AuraWise International LLP ("AuraWise", "we", "our"), we recognize that applying for international university admissions, student visas, and permanent residency involves sharing sensitive personal, financial, and educational records. We are committed to safeguarding your privacy in strict conformity with applicable Indian data protection laws and international statutory immigration standards (including MARA and OISC privacy regulations).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                2. Information We Collect
              </h2>
              <p>
                In the course of providing advisory and representation services, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm mt-2 text-[var(--text-secondary)]/90">
                <li>Personal identification details (Name, date of birth, passport details, photographs).</li>
                <li>Contact information (Email address, telephone/WhatsApp numbers, residential address).</li>
                <li>Academic credentials (Transcripts, graduation diplomas, standardized test scores such as IELTS, PTE, GRE).</li>
                <li>Employment and tax records (Work experience certificates, resumes, salary statements, Income Tax Returns).</li>
                <li>Financial documents necessary for consular proof of funds (Bank certificates, affidavit of support).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                3. Purpose of Data Processing
              </h2>
              <p>
                Your documentation is gathered exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm mt-2 text-[var(--text-secondary)]/90">
                <li>Perform diagnostic eligibility evaluations across designated destination countries.</li>
                <li>Submit official university and college applications via designated representative portals.</li>
                <li>Prepare and submit consular visa dossiers to embassies and high commissions.</li>
                <li>Coordinate financial clearances, apostilles, and government verifications.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                4. Data Protection &amp; Third-Party Non-Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal data to commercial marketing third parties under any circumstances. Records are transmitted strictly to educational institutions, authorized visa portals (such as IRCC, UKVI, Australian Home Affairs, US Department of State), and verified banking partners under your express written authorization.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                5. Contacting the Compliance Officer
              </h2>
              <p>
                For questions regarding document retention, correction, or deletion requests, contact our compliance officer at: <strong className="text-[var(--accent-gold)]">privacy@aurawise.in</strong> or write to our Ahmedabad corporate office: {COMPANY_INFO.contact.address.line1}, {COMPANY_INFO.contact.address.locality}, {COMPANY_INFO.contact.address.city} - {COMPANY_INFO.contact.address.pincode}, Gujarat, India.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
