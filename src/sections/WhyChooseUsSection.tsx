import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  TrendingUp,
  Building2,
  Scale,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { WHY_CHOOSE_US_POINTS } from '../data/companyData';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[var(--accent-gold)]" };
    switch (iconName) {
      case 'Award':
        return <Award {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-surface)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      <Container>
        <SectionHeading
          number="THE ADVANTAGE"
          badge="Statutory Distinction"
          title="Why Discerning Applicants Choose"
          italicWord="AuraWise International"
          subtitle="We combine government-certified legal precision, verified institutional tie-ups, and empathetic mentorship to eliminate risk from your overseas trajectory."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-prominent)] p-6 sm:p-8 transition-all duration-400 group hover:shadow-editorial flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[var(--bg-surface)] border border-[var(--border-gold)] flex items-center justify-center transition-colors group-hover:border-[var(--accent-gold)]">
                    {getIcon(point.icon)}
                  </div>
                  <span className="text-xs font-mono text-[var(--accent-gold)] font-semibold tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-gold)] transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)]/85 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[10px] text-[var(--accent-gold)] font-medium tracking-[0.2em] uppercase font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Statutory Benchmark</span>
              </div>

              {/* Bottom Hairline */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
