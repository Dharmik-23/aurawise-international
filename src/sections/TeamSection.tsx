import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { TEAM_MEMBERS } from '../data/companyData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-10 sm:py-20 lg:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)] overflow-hidden">
      <Container>
        <SectionHeading
          number="LEADERSHIP"
          badge="Direct Legal Counsel"
          title="Meet the Certified Practitioners"
          italicWord="Behind Your Success"
          subtitle="Our senior practice brings decades of collective experience across immigration law, consular compliance, and international university admissions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-prominent)] transition-all duration-400 group flex flex-col justify-between overflow-hidden shadow-editorial relative"
            >
              <div>
                {/* Photo with Scrim */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[var(--bg-surface)]">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role} at AuraWise International (${member.credentials})`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="533"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[9.5px] tracking-[0.2em] uppercase font-semibold text-[var(--selection-text)] bg-[var(--accent-gold)] px-2.5 py-0.5 shadow-sm font-mono">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-medium text-[var(--accent-gold)] uppercase tracking-[0.2em] mt-0.5 font-mono">
                      {member.role}
                    </p>
                  </div>

                  {/* Credentials Badge */}
                  <div className="flex items-start gap-1.5 text-xs text-[var(--text-primary)]/85 bg-[var(--bg-surface)] p-2 border border-[var(--border-subtle)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span className="leading-tight font-light text-[11px]">{member.credentials}</span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Specializations footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[var(--border-subtle)] mt-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold block mb-1.5 font-mono">
                  Core Practice:
                </span>
                <div className="flex flex-wrap gap-1 text-[11px] text-[var(--text-secondary)]">
                  {member.specialization.map((spec) => (
                    <span key={spec} className="bg-[var(--bg-surface)] px-2 py-0.5 border border-[var(--border-subtle)] text-[9.5px] font-light">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Hairline */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
