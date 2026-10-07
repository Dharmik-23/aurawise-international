import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from './Button';
import { DESTINATION_COUNTRIES, CORE_SERVICES } from '../data/companyData';
import { addEnquiry } from '../services/enquiryService';

interface ContactFormProps {
  initialService?: string;
  initialCountry?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = 'Profile Assessment',
  initialCountry = 'Canada',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: initialCountry,
    service: initialService,
    message: '',
    honeypot: '', // anti-spam
  });

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    service: string;
    phone: string;
    country: string;
  } | null>(null);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot !== '') {
      setStatus('success');
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    try {
      setStatus('submitting');
      setErrorMessage('');

      await addEnquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        country: formData.country,
        message: formData.message,
      });

      setSubmittedData({
        name: formData.fullName.trim(),
        service: formData.service,
        phone: formData.phone.trim(),
        country: formData.country,
      });

      // Clear the form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: initialCountry,
        service: initialService,
        message: '',
        honeypot: '',
      });

      setStatus('success');
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C5A869', '#FAF8F5', '#E8DFD1', '#080A0F'],
      });
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setStatus('error');
      setErrorMessage('Unable to submit your enquiry. Please try again.');
    }
  };

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border-gold)] p-5 sm:p-10 shadow-editorial relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[var(--accent-gold)]/15 to-transparent pointer-events-none" />

      {status === 'success' ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-[var(--accent-gold-subtle)] border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-none flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-semibold font-mono block">
            Advisory Session Requested
          </span>
          <h3 className="font-serif text-3xl font-normal text-[var(--text-primary)]">
            Your enquiry has been submitted successfully.
          </h3>
          <p className="text-[var(--text-secondary)]/90 max-w-md mx-auto text-xs sm:text-sm leading-relaxed font-light">
            Thank You{submittedData?.name ? `, ${submittedData.name}` : ''}. We have registered your consultation inquiry for{' '}
            <strong className="text-[var(--accent-gold)]">{submittedData?.service || 'selected service'}</strong>
            {submittedData?.country ? ` (${submittedData.country})` : ''}. A certified counsellor will contact you at{' '}
            <strong className="text-[var(--text-primary)]">{submittedData?.phone}</strong> within 24 hours to schedule your diagnostic session.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setStatus('idle');
                setSubmittedData(null);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  country: initialCountry,
                  service: initialService,
                  message: '',
                  honeypot: '',
                });
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-[var(--border-subtle)] pb-4 mb-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono font-semibold block mb-1">
              [ DIRECT ADVISORY DOSSIER ]
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--text-primary)]">
              Schedule Private Consultation
            </h3>
            <p className="text-xs text-[var(--text-muted)] font-light mt-1">
              Confidential, statutory review with MARA &amp; OISC registered practitioners.
            </p>
          </div>

          {/* Anti-spam honeypot */}
          <div className="hidden">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {status === 'error' && (
            <div className="p-3 bg-red-950/30 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1 font-mono">
                Full Legal Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Yashvi Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-3 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1 font-mono">
                Phone Number (WhatsApp) *
              </label>
                <input
                  type="tel"
                  maxLength={10}
                  
                  required
                  placeholder="98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-3 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)] transition-colors"
                />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1 font-mono">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="yashvi@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-3 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)] transition-colors"
            />
          </div>

          {/* Country & Service Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1 font-mono">
                Target Destination *
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-3 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
              >
                {DESTINATION_COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
                <option value="Undecided">🌍 Multiple / Undecided</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1 font-mono">
                Advisory Pillar Required *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-3 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
              >
                <option value="Visa Consultation">Visa Consultation</option>
                {CORE_SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    [{s.number}] {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Profile Brief */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1 font-mono">
              Profile Summary &amp; Specific Queries (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Share degree, CGPA, IELTS score (if taken), and intended intake year..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)] resize-none"
            ></textarea>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === 'submitting'}
              icon={<Send className="w-4 h-4" />}
            >
              {status === 'submitting' ? 'Submitting File...' : 'Book Advisory Session'}
            </Button>
          </div>

          <p className="text-[10px] text-[var(--text-muted)] text-center font-light pt-1">
            Zero spam. Protected by professional client attorney privilege &amp; MARA/OISC statutory confidentiality.
          </p>
        </form>
      )}
    </div>
  );
};
