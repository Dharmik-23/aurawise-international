import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { COMPANY_INFO } from '../data/companyData';
import { Scale } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="Terms of Service & Advisory Agreement | AuraWise International"
        description="Terms of service, client advisory agreement policies, fee transparency, and legal disclaimers governing AuraWise International LLP immigration and education consulting."
        keywords="AuraWise terms of service, advisory agreement, immigration consulting terms, study abroad refund policy"
        canonicalPath="/terms"
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms' },
        ]}
      />

      <section className="py-8 sm:py-16 lg:py-20 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container size="narrow">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>[ ADVISORY AGREEMENT &amp; DISCLAIMERS ]</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-6xl font-normal tracking-tight text-[var(--text-primary)] mb-4 break-words">
            Terms of Service
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
                1. Scope of Advisory Services
              </h2>
              <p>
                AuraWise International LLP operates as an authorized education recruitment partner for accredited foreign universities and a certified migration advisory firm registered with MARA (Australia) and OISC (United Kingdom). By engaging our consulting services, the client agrees to the terms and service specifications detailed in their formal client retainer agreement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                2. Consular Sovereign Authority &amp; Guarantee Disclaimer
              </h2>
              <p>
                <strong>Statutory Notice:</strong> Under international immigration law and consular treaties, the final decision to approve, reject, or issue any visa or permanent residency permit rests exclusively and sovereignly with the respective government's embassy, high commission, or department of immigration (e.g. IRCC Canada, UKVI, US Department of State, Australian Department of Home Affairs). No consultant, agency, or individual can legally or ethically guarantee visa approval.
              </p>
              <p className="mt-2">
                AuraWise International delivers rigorous documentation verification, mock consular preparation, and error-free filing based on statutory standards to maximize approval prospects, achieving our audited 98% historic success rate.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                3. Authenticity of Client Information
              </h2>
              <p>
                The client warrants that all educational certificates, employment credentials, statements of account, and biographical documents submitted to AuraWise for application processing are genuine, unaltered, and verifiable. Submission of falsified documentation is strictly prohibited under international consular codes and will lead to immediate file termination.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                4. Transparent Retainers &amp; Refund Policy
              </h2>
              <p>
                Professional advisory fees are agreed upon in advance within written retainers. Any third-party fees (university application charges, embassy visa fees, biometrics, IELTS test costs, medical clearances, and courier charges) are statutory governmental fees and non-refundable by consular bodies once incurred.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3">
                5. Jurisdiction &amp; Dispute Resolution
              </h2>
              <p>
                These terms are governed by the statutory laws of the Republic of India. Any legal dispute or claim arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
