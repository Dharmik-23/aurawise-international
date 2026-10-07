import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  italicWord?: string;
  italicClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0.1,
  stagger = 0.04,
  as: Component = 'h1',
  italicWord,
  italicClassName = 'italic font-light text-[#E8DFD1]',
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotateZ: 2,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component className={`overflow-hidden inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {words.map((word, i) => {
          const isItalic = italicWord && word.toLowerCase().includes(italicWord.toLowerCase());
          return (
            <span key={i} className="inline-block overflow-hidden py-1">
              <motion.span
                variants={wordVariants}
                className={`inline-block will-change-transform ${isItalic ? italicClassName : ''}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
};
