import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { FAQSection } from '../sections/FAQSection';
import { Button } from '../components/Button';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/companyData';

interface FAQPageProps {
  onOpenAssessment: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenAssessment }) => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="Immigration & Study FAQs | AuraWise International Knowledge Base"
        description="Verified answers on IELTS cutoffs, post-study work permits (PGWP/PSW), proof of funds requirements, PR points criteria, and visa timelines for 10 countries."
        keywords="study abroad FAQ, student visa questions, IELTS minimum score Canada, work permit rules abroad, Express Entry PR questions"
        canonicalPath="/faq"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'FAQs', path: '/faq' },
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ KNOWLEDGE BASE &amp; FAQS ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              Clear Answers to <br />
              <span className="italic font-light text-[var(--text-secondary)]">Crucial Migration Questions.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              We believe informed clients make the best international decisions. Browse our verified answers on eligibility, intake timelines, costs, scholarships, and consular procedures.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs list with interactive search and category filter */}
      <FAQSection />

      {/* Still Have Questions Box */}
      <section className="py-10 sm:py-16 lg:py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
        <Container>
          <div className="bg-[var(--bg-card)] border border-[var(--border-gold)] p-6 sm:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-editorial">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--text-primary)]">
                Have a specific query not covered here?
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light">
                Our certified advisors are available on phone, email, and WhatsApp to answer your case-specific questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Button
                variant="primary"
                size="md"
                fullWidth
                className="sm:w-auto"
                onClick={onOpenAssessment}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Ask a Legal Advisor
              </Button>
              <Button
                variant="outline"
                size="md"
                fullWidth
                className="sm:w-auto"
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                icon={<PhoneCall className="w-4 h-4 text-[var(--accent-gold)]" />}
                iconPosition="left"
              >
                Call Office
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
