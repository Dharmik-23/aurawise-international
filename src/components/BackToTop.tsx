import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 sm:bottom-6 sm:left-6 z-40 min-w-[44px] min-h-[44px] p-2.5 sm:p-3 flex items-center justify-center bg-[#111C30]/90 backdrop-blur-md text-[#FAF9F6] border border-[#C9A45C]/40 hover:bg-[#C9A45C] hover:text-[#0B1220] transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C9A45C] touch-manipulation"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};
