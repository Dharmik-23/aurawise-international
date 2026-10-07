import React from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { FAQAccordion } from '../components/FAQAccordion';
import { FAQS } from '../data/companyData';

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      <Container>
        <SectionHeading
          number="KNOWLEDGE BASE"
          badge="Clarity &amp; Statutory Counsel"
          title="Frequently Asked Questions on"
          italicWord="Immigration &amp; Admissions"
          subtitle="Answers to vital queries regarding visa probabilities, university cutoffs, financial documentation, and post-study work rights."
        />

        <FAQAccordion items={FAQS} allowFilter={true} />
      </Container>
    </section>
  );
};
