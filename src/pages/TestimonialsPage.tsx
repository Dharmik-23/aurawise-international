import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { Button } from '../components/Button';
import { ArrowRight, Star } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenAssessment: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenAssessment }) => {
  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      <SEOHead
        title="Client Reviews &amp; Verified Outcomes | AuraWise International"
        description="Read authentic reviews and success stories from 5,000+ students and families who achieved their global study and PR ambitions with AuraWise International."
        keywords="AuraWise International reviews, study abroad consultant testimonials Ahmedabad, Canadian PR success stories, UK student visa reviews"
        canonicalPath="/testimonials"
        ogType="website"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Client Reviews', path: '/testimonials' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-semibold border border-[var(--border-gold)] bg-[var(--accent-gold-subtle)] text-[var(--accent-gold)] font-mono">
              <span>[ VERIFIED CLIENT REVIEWS ]</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text-primary)] leading-tight break-words">
              Real Aspirations. <br />
              <span className="italic font-light text-[var(--text-secondary)]">Tangible International Outcomes.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)]/90 leading-relaxed font-light max-w-3xl">
              Over 5,000 students and families have achieved their global education and migration milestones with AuraWise. Explore their authentic experiences across Canada, Australia, the UK, the USA, and Germany.
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials Showcase */}
      <TestimonialsSection />

      {/* Trust Quote Banner */}
      <section className="py-10 sm:py-16 lg:py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)]">
        <Container>
          <div className="bg-[var(--bg-card)] border border-[var(--border-gold)] p-6 sm:p-12 max-w-4xl mx-auto text-center space-y-6 shadow-editorial">
            <div className="flex items-center justify-center gap-1 text-[var(--accent-gold)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--text-primary)]">
              Ready to Write Your Own International Success Story?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]/85 max-w-lg mx-auto font-light leading-relaxed">
              Join thousands of successful candidates who trusted AuraWise International since 2009. Your initial 30-minute consultation is completely free.
            </p>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="sm:w-auto"
              onClick={onOpenAssessment}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start Free Profile Assessment
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
