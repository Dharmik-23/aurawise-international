import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ProcessSection } from '../sections/ProcessSection';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

interface ProcessPageProps {
  onOpenAssessment: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenAssessment }) => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="Our 6-Milestone Roadmap | AuraWise International — Transparent Methodology"
        description="A proven, transparent 6-step roadmap from initial profile diagnostic to foreign touchdown. 15+ years of refined processes ensuring 98% visa approval."
        keywords="study abroad process, student visa roadmap, immigration milestones, visa diagnostic session, SOP writing, university offer negotiation"
        canonicalPath="/process"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Advisory Methodology', path: '/process' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ ADVISORY METHODOLOGY ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              A Transparent Roadmap to <br />
              <span className="italic font-light text-[var(--text-secondary)]">Your Global Destination.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              We eliminate anxiety by establishing clear milestones from day one. You will always know where your file stands, what documents are required, and the next consular milestone.
            </p>
          </div>
        </Container>
      </section>

      {/* 6-Step Roadmap */}
      <ProcessSection onOpenAssessment={onOpenAssessment} />

      {/* Preparation Checklist Section */}
      <section className="py-10 sm:py-20 lg:py-24 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
        <Container>
          <SectionHeading
            number="PREPARATION"
            badge="Diagnostic Readiness"
            title="How to Prepare for Your Initial Consultation"
            subtitle="To make your free 30-minute diagnostic session as impactful as possible, having these details ready helps our advisors give you an immediate feasibility assessment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[var(--bg-card)] p-5 sm:p-6 border border-[var(--border-subtle)] space-y-3 shadow-editorial">
              <span className="font-mono text-xs text-[var(--accent-gold)] font-semibold tracking-widest">
                [STEP 01]
              </span>
              <h3 className="font-serif text-xl font-normal text-[var(--text-primary)]">
                Academic Background
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                Have your marks cards / transcripts (10th, 12th, graduation marks sheets, backlogs certificate if any) handy. An approximate CGPA is sufficient for initial audit.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] p-5 sm:p-6 border border-[var(--border-subtle)] space-y-3 shadow-editorial">
              <span className="font-mono text-xs text-[var(--accent-gold)] font-semibold tracking-widest">
                [STEP 02]
              </span>
              <h3 className="font-serif text-xl font-normal text-[var(--text-primary)]">
                Test Scores or Timelines
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                Whether you have already taken IELTS / PTE / GRE or have scheduled an exam date, let us know your scores or test preparation timeline.
              </p>
            </div>

            <div className="bg-[var(--bg-card)] p-5 sm:p-6 border border-[var(--border-subtle)] space-y-3 shadow-editorial">
              <span className="font-mono text-xs text-[var(--accent-gold)] font-semibold tracking-widest">
                [STEP 03]
              </span>
              <h3 className="font-serif text-xl font-normal text-[var(--text-primary)]">
                Budget &amp; Funding Plan
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                Be clear about your tuition and living expense budget, willingness to take an education loan, and financial sponsorship capacity.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-14 text-center">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="sm:w-auto"
              onClick={onOpenAssessment}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Free 30-Minute Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
