import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe2, CheckCircle, ShieldCheck, Building } from 'lucide-react';
import { Container } from '../components/Container';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      numeric: 15,
      suffix: '+',
      label: 'Years of Excellence',
      detail: 'Advising aspirants since 2009',
      icon: Award
    },
    {
      numeric: 5000,
      suffix: '+',
      label: 'Applicants Guided',
      detail: 'Global university & PR files',
      icon: Users
    },
    {
      numeric: 98,
      suffix: '%',
      label: 'Visa Approval Rate',
      detail: 'Audited across study, PR & work',
      icon: CheckCircle
    },
    {
      numeric: 500,
      suffix: '+',
      label: 'Partner Institutions',
      detail: 'Direct priority channels',
      icon: Building
    },
    {
      numeric: 10,
      suffix: '',
      label: 'Prime Global Hubs',
      detail: 'Canada, Australia, NZ, UK, USA...',
      icon: Globe2
    }
  ];

  return (
    <section className="relative z-20 mt-2 sm:-mt-14 mb-6 sm:mb-20">
      <Container>
        {/* Main Editorial Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--bg-card)] border border-[var(--border-gold)] shadow-editorial p-5 sm:p-10 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-0"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  i === 0 ? 'sm:pr-6' : 'sm:px-6'
                } py-2.5 sm:py-0 group transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-[var(--accent-gold)]">
                  <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors flex items-baseline">
                    <AnimatedCounter
                      value={stat.numeric}
                      suffix={stat.suffix}
                      duration={2.2}
                    />
                  </div>
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--text-primary)] mb-0.5 sm:mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] font-light">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Accreditations Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 py-3 sm:py-3.5 px-4 sm:px-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs"
        >
          <div className="flex items-center gap-2 text-[var(--accent-gold)] font-medium tracking-[0.2em] uppercase text-[10px] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>[ STATUTORY REGULATORY COMPLIANCE DIRECTIVES ]</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 font-light text-[11px] text-[var(--text-secondary)]">
            <span className="hover:text-[var(--accent-gold)] transition-colors">🇦🇺 MARA (Australia) Regulated</span>
            <span className="hover:text-[var(--accent-gold)] transition-colors">🇬🇧 OISC (United Kingdom) Registered</span>
            <span className="hover:text-[var(--accent-gold)] transition-colors">🇺🇸 AIRC (United States) Member</span>
            <span className="hover:text-[var(--accent-gold)] transition-colors">🇨🇦 ICCRC / CICC Compliance Standards</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
