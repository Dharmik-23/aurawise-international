import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { MagneticButton } from './MagneticButton';
import { Container } from './Container';
import { COMPANY_INFO, DESTINATION_COUNTRIES, CORE_SERVICES } from '../data/companyData';

interface NavbarProps {
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCountriesDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Services',
      path: '/services',
      hasDropdown: true,
      type: 'services'
    },
    {
      label: '10 Destinations',
      path: '/countries',
      hasDropdown: true,
      type: 'countries'
    },
    { label: 'Process', path: '/process' },
    { label: 'Reviews', path: '/testimonials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent-gold)] focus:text-[var(--selection-text)] focus:font-semibold"
      >
        Skip to main content
      </a>



      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-400 ${
          isScrolled
            ? 'bg-[var(--bg-canvas)]/95 backdrop-blur-md shadow-editorial border-b border-[var(--border-gold)] py-3'
            : 'bg-[var(--bg-canvas)]/85 backdrop-blur-sm border-b border-[var(--border-subtle)] py-4 lg:py-5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size={isScrolled ? 'sm' : 'md'} />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-xs font-medium tracking-[0.18em]">
              {navLinks.map((link) => {
                if (link.type === 'services') {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex items-center gap-1 py-2 uppercase transition-colors ${
                            isActive
                              ? 'text-[var(--accent-gold)] font-semibold'
                              : 'text-[var(--text-primary)]/85 hover:text-[var(--accent-gold)]'
                          }`
                        }
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[var(--accent-gold)]' : ''}`} />
                      </NavLink>

                      {/* 10 Services Mega-Dropdown */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full -left-12 w-[540px] bg-[var(--bg-card)] border border-[var(--border-prominent)] shadow-editorial p-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                          <div className="p-2 border-b border-[var(--border-subtle)] mb-2 flex items-center justify-between">
                            <span className="text-[9.5px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono">
                              [ 10 CORE ADVISORY PILLARS ]
                            </span>
                            <Link to="/services" className="text-[10px] text-[var(--text-muted)] hover:text-[var(--text-primary)] underline">
                              Full Directory
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1 max-h-[380px] overflow-y-auto pr-1">
                            {CORE_SERVICES.map((item) => (
                              <Link
                                key={item.id}
                                to={`/services/${item.slug}`}
                                className="p-2 hover:bg-[var(--bg-elevated)] transition-colors group flex items-start gap-2"
                              >
                                <span className="font-mono text-[10px] text-[var(--accent-gold)] font-semibold mt-0.5">
                                  {item.number}
                                </span>
                                <div>
                                  <div className="text-xs text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors leading-tight font-serif">
                                    {item.title}
                                  </div>
                                  <div className="text-[10px] text-[var(--text-muted)] leading-tight font-light mt-0.5 truncate max-w-[190px]">
                                    {item.subtitle}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.type === 'countries') {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setCountriesDropdownOpen(true)}
                      onMouseLeave={() => setCountriesDropdownOpen(false)}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex items-center gap-1 py-2 uppercase transition-colors ${
                            isActive
                              ? 'text-[var(--accent-gold)] font-semibold'
                              : 'text-[var(--text-primary)]/85 hover:text-[var(--accent-gold)]'
                          }`
                        }
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${countriesDropdownOpen ? 'rotate-180 text-[var(--accent-gold)]' : ''}`} />
                      </NavLink>

                      {/* 10 Countries Dropdown */}
                      {countriesDropdownOpen && (
                        <div className="absolute top-full -left-8 w-72 bg-[var(--bg-card)] border border-[var(--border-prominent)] shadow-editorial p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                          <div className="p-2 border-b border-[var(--border-subtle)] mb-2">
                            <span className="text-[9.5px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono">
                              [ 10 PRIME DESTINATIONS ]
                            </span>
                          </div>
                          <div className="space-y-1">
                            {DESTINATION_COUNTRIES.map((country) => (
                              <Link
                                key={country.name}
                                to="/countries"
                                className="flex items-center justify-between p-2 hover:bg-[var(--bg-elevated)] transition-colors text-xs text-[var(--text-primary)]/90 hover:text-[var(--accent-gold)]"
                              >
                                <div className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span className="font-light">{country.name}</span>
                                </div>
                                <span className="font-mono text-[9px] text-[var(--accent-gold)]">
                                  {country.code}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={({ isActive }) =>
                      `py-2 uppercase transition-colors ${
                        isActive
                          ? 'text-[var(--accent-gold)] font-semibold border-b border-[var(--accent-gold)]'
                          : 'text-[var(--text-primary)]/85 hover:text-[var(--accent-gold)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <MagneticButton strength={0.2}>
                <Button
                  variant="primary"
                  size={isScrolled ? 'sm' : 'md'}
                  onClick={onOpenAssessment}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Profile Assessment
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenAssessment}
                className="hidden sm:inline-flex text-[10px] uppercase tracking-[0.2em] bg-[var(--accent-gold)] text-[var(--selection-text)] px-3.5 py-2 font-semibold hover:brightness-110 touch-manipulation"
              >
                Assessment
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] border border-[var(--border-subtle)] touch-manipulation cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[var(--bg-canvas)]/98 backdrop-blur-lg flex flex-col xl:hidden animate-in fade-in duration-200 h-[100dvh] max-h-[100dvh] overscroll-contain"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] shrink-0">
            <Logo size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--accent-gold)] focus:outline-none touch-manipulation cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono block mb-2">
                Navigation
              </span>
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-3 text-sm uppercase tracking-[0.2em] border-b border-[var(--border-subtle)] transition-colors ${
                      isActive
                        ? 'text-[var(--accent-gold)] font-semibold bg-[var(--bg-surface)]'
                        : 'text-[var(--text-primary)]/80 hover:text-[var(--accent-gold)]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* 10 Destinations Quick Grid */}
            <div className="pt-4">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono block mb-2">
                10 Destinations
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {DESTINATION_COUNTRIES.map((c) => (
                  <Link
                    key={c.name}
                    to="/countries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2 bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]/80 hover:text-[var(--accent-gold)]"
                  >
                    <span>{c.flag}</span>
                    <span className="truncate">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="pt-6 space-y-3 text-xs text-[var(--text-muted)] border-t border-[var(--border-subtle)]">
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--accent-gold)] font-mono block">
                Ahmedabad Headquarters
              </span>
              <a
                href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 py-1 text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
              >
                <Phone className="w-4 h-4 text-[var(--accent-gold)]" />
                <span className="font-mono">{COMPANY_INFO.contact.primaryPhone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.primaryEmail}`}
                className="flex items-center gap-3 py-1 text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
              >
                <Mail className="w-4 h-4 text-[var(--accent-gold)]" />
                <span>{COMPANY_INFO.contact.primaryEmail}</span>
              </a>
              <div className="text-[var(--text-muted)] text-[11px] leading-relaxed pt-1">
                {COMPANY_INFO.contact.address.line1}, {COMPANY_INFO.contact.address.locality}, {COMPANY_INFO.contact.address.city} - {COMPANY_INFO.contact.address.pincode}
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
            >
              Start Profile Assessment
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
