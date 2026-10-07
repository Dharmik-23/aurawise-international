import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from './Button';
import { DESTINATION_COUNTRIES, CORE_SERVICES } from '../data/companyData';
import { addEnquiry } from '../services/enquiryService';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCountry?: string;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Profile Assessment',
  defaultCountry = 'Canada'
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    service: defaultService,
    country: defaultCountry,
    qualification: "Bachelor's Degree",
    experience: "1-3 Years",
    englishTest: "IELTS / PTE Planned",
    fullName: "",
    email: "",
    phone: "",
    city: "Ahmedabad",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addEnquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        country: formData.country,
        message: formData.notes
          ? `${formData.notes} | Qualification: ${formData.qualification}, Exp: ${formData.experience}, English: ${formData.englishTest}, City: ${formData.city}`
          : `Qualification: ${formData.qualification}, Exp: ${formData.experience}, English: ${formData.englishTest}, City: ${formData.city}`,
      });
    } catch (err) {
      console.error('Failed to save modal enquiry to Firestore:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A869', '#FAF8F5', '#E8DFD1', '#080A0F'],
      });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-[var(--bg-card)] border border-[var(--border-prominent)] shadow-editorial p-5 sm:p-8 text-[var(--text-primary)] max-h-[88dvh] sm:max-h-[85vh] overflow-y-auto overscroll-contain">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-[40px] min-h-[40px] p-2 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors focus:outline-none touch-manipulation cursor-pointer z-10"
          aria-label="Close eligibility modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[var(--accent-gold-subtle)] border border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-none flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[var(--accent-gold)] font-mono uppercase block mb-1">
              Assessment Registered
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-3 text-[var(--text-primary)]">
              Profile Diagnostic Initiated
            </h3>
            <p className="text-[var(--text-secondary)]/90 text-xs sm:text-sm mb-6 max-w-md mx-auto leading-relaxed font-light">
              Thank you, <strong className="text-[var(--text-primary)]">{formData.fullName}</strong>. A certified MARA/OISC advisor from our Ahmedabad headquarters will review your profile for <strong className="text-[var(--accent-gold)]">{formData.country}</strong> and contact you at <strong className="text-[var(--text-primary)]">{formData.phone}</strong> within 24 hours.
            </p>
            <div className="bg-[var(--bg-surface)] p-4 border border-[var(--border-subtle)] mb-6 text-left text-xs space-y-1.5 text-[var(--text-secondary)]">
              <p><span className="text-[var(--text-muted)]">Selected Service:</span> <strong className="text-[var(--text-primary)]">{formData.service}</strong></p>
              <p><span className="text-[var(--text-muted)]">Target Hub:</span> <strong className="text-[var(--text-primary)]">{formData.country}</strong></p>
              <p><span className="text-[var(--text-muted)]">Highest Degree:</span> <strong className="text-[var(--text-primary)]">{formData.qualification}</strong></p>
              <p><span className="text-[var(--text-muted)]">Experience:</span> <strong className="text-[var(--text-primary)]">{formData.experience}</strong></p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary" size="sm" onClick={handleReset}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-gold)]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent-gold)] font-mono font-semibold">
                Complimentary Advisory Assessment
              </span>
            </div>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-normal mb-2 text-[var(--text-primary)]">
              Evaluate Global Feasibility
            </h3>
            <p className="text-xs text-[var(--text-muted)] mb-6 font-light">
              Step {step} of 2 — Diagnostic consultation without obligations or retainers.
            </p>

            {step === 1 ? (
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                    Advisory Service Required *
                  </label>
                  <select
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    {CORE_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        [{s.number}] {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                    Preferred Destination *
                  </label>
                  <select
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  >
                    {DESTINATION_COUNTRIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                    <option value="Undecided / Open to Recommendation">🌍 Other / Multiple Destinations</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                      Highest Qualification
                    </label>
                    <select
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    >
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                      <option value="12th / High School">12th Grade / High School</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                      Work Experience
                    </label>
                    <select
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="Fresher / None">Fresher / None</option>
                      <option value="1-3 Years">1–3 Years</option>
                      <option value="3-5 Years">3–5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                    Language Test Status
                  </label>
                  <select
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none"
                    value={formData.englishTest}
                    onChange={(e) => setFormData({ ...formData, englishTest: e.target.value })}
                  >
                    <option value="IELTS / PTE Already Taken">IELTS / PTE / TOEFL Already Taken</option>
                    <option value="Preparing / Scheduled">Currently Preparing / Scheduled</option>
                    <option value="Need Coaching Support">Require IELTS / PTE Coaching</option>
                    <option value="Not Yet Started">Not Yet Started</option>
                  </select>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                    Continue to Contact Info
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                    Current City / State
                  </label>
                  <input
                    type="text"
                    placeholder="Ahmedabad, Gujarat"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2.5 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-semibold mb-1.5 font-mono">
                    Specific Inquiries or Target Intake (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Planning for Fall intake, interested in post-study work and PR pathways..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] px-3.5 py-2 text-base sm:text-sm focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    className="w-full sm:w-1/3"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-2/3"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Report"}
                  </Button>
                </div>

                <p className="text-[10px] text-[var(--text-muted)] text-center font-light">
                  Protected by confidentiality. Regulated under MARA &amp; OISC statutory codes.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
