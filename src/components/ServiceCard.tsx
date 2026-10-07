import React from 'react';
import { Link } from 'react-router-dom';
import {
  ClipboardCheck,
  Compass,
  GraduationCap,
  ShieldCheck,
  FileCheck2,
  Feather,
  Coins,
  Mic,
  Luggage,
  Handshake,
  ArrowRight,
  Check
} from 'lucide-react';
import type { ServiceItem } from '../data/companyData';

interface ServiceCardProps {
  service: ServiceItem;
  onQuickAssess?: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onQuickAssess }) => {
  const getIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[var(--accent-gold)]" };
    switch (name) {
      case 'ClipboardCheck':
        return <ClipboardCheck {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'FileCheck2':
        return <FileCheck2 {...props} />;
      case 'Feather':
        return <Feather {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Mic':
        return <Mic {...props} />;
      case 'Luggage':
        return <Luggage {...props} />;
      case 'Handshake':
        return <Handshake {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <div className="group relative bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-prominent)] p-5 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-editorial hover:-translate-y-1 overflow-hidden">
      {/* Bottom Hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Top Number, Icon and Badge */}
      <div>
        <div className="flex items-center justify-between mb-6 border-b border-[var(--border-subtle)] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[var(--accent-gold)] font-semibold tracking-widest">
              [{service.number}]
            </span>
            <div className="w-9 h-9 bg-[var(--bg-surface)] border border-[var(--border-gold)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--accent-gold)]">
              {getIcon(service.iconName)}
            </div>
          </div>
          <span className="text-[9.5px] tracking-[0.2em] uppercase font-semibold text-[var(--accent-gold)] bg-[var(--accent-gold-subtle)] px-2.5 py-1 border border-[var(--border-gold)]">
            {service.badge}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-normal text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">
          {service.title}
        </h3>

        <p className="text-[11px] font-medium text-[var(--accent-gold)] uppercase tracking-wider mb-4">
          {service.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)]/85 leading-relaxed font-light mb-6">
          {service.shortDesc}
        </p>

        {/* Highlights */}
        <div className="space-y-2 border-t border-[var(--border-subtle)] pt-4 mb-6">
          <span className="text-[9.5px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold block mb-1">
            Core Scope:
          </span>
          {service.highlights.slice(0, 3).map((hl, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-primary)]/80 font-light">
              <Check className="w-3.5 h-3.5 text-[var(--accent-gold)] shrink-0 mt-0.5" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
        <Link
          to={`/services/${service.slug}`}
          className="text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[var(--accent-gold)] font-medium inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors py-1"
        >
          <span>Examine Protocol</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {onQuickAssess && (
          <button
            type="button"
            onClick={() => onQuickAssess(service.title)}
            className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors touch-manipulation py-1 px-1"
          >
            Assess Profile
          </button>
        )}
      </div>
    </div>
  );
};
