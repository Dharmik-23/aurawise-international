import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import type { FaqItem } from '../data/companyData';

interface FAQAccordionProps {
  items: FaqItem[];
  allowFilter?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowFilter = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Student Visa', 'Permanent Residency', 'Process', 'Financials'];

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {allowFilter && (
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--accent-gold)]" />
            <input
              type="text"
              placeholder="Search immigration queries by keyword (e.g. IELTS score, PR points, post-study work)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-subtle)] pl-11 pr-4 py-3.5 text-base sm:text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none placeholder-[var(--text-muted)] transition-colors"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 pt-1 overflow-x-auto no-scrollbar touch-pan-x flex-nowrap sm:flex-wrap pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] px-3.5 py-2 transition-all duration-300 font-medium border shrink-0 whitespace-nowrap touch-manipulation ${
                  activeCategory === cat
                    ? 'bg-[var(--accent-gold)] text-[var(--selection-text)] border-[var(--accent-gold)] font-semibold shadow-gold-subtle'
                    : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-gold)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accordion list */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-[var(--bg-card)] border border-[var(--border-subtle)] p-6 text-[var(--text-muted)] text-xs font-light">
            No matching questions found for "{searchQuery}". Please contact our advisory desk directly.
          </div>
        ) : (
          filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={item.question}
                className={`transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[var(--bg-card)] border-[var(--border-prominent)] shadow-editorial'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-gold)]'
                }`}
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left text-[var(--text-primary)] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-gold)] gap-4"
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal tracking-tight pr-2 flex items-start gap-3">
                      <HelpCircle className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-1" />
                      <span>{item.question}</span>
                    </span>
                    <span
                      className={`p-1.5 bg-[var(--accent-gold-subtle)] border border-[var(--border-gold)] text-[var(--accent-gold)] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[var(--accent-gold)] text-[var(--selection-text)]' : ''
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] font-light">
                    <p>{item.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-[var(--accent-gold)] font-mono tracking-wider">
                      <span>CATEGORY: {item.category.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
