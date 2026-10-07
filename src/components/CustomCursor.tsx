import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  // Smooth springs for smooth lagging follower effect
  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });
  const dotX = useSpring(0, { damping: 45, stiffness: 800 });
  const dotY = useSpring(0, { damping: 45, stiffness: 800 });

  useEffect(() => {
    // Check if pointer is fine (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const checkIsTouch = () => {
      const isTouch = !mediaQuery.matches || window.innerWidth < 1024 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      setIsTouchDevice(isTouch);
      return isTouch;
    };

    if (checkIsTouch()) return;

    const handleMediaChange = () => {
      checkIsTouch();
    };

    const handleTouchStart = () => {
      setIsTouchDevice(true);
      setIsVisible(false);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => {
      if (window.innerWidth >= 1024) setIsVisible(true);
    };
    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const checkHoverable = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, .interactive-hover');
      setIsHovered(!!interactiveEl);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', checkHoverable);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHoverable);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border will-change-transform"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : isClicking ? 24 : 32,
          height: isHovered ? 48 : isClicking ? 24 : 32,
          borderColor: isHovered ? 'var(--accent-gold)' : 'var(--border-gold)',
          backgroundColor: isHovered ? 'var(--accent-gold-subtle)' : 'transparent',
          borderWidth: isHovered ? '1.5px' : '1px',
          scale: isClicking ? 0.9 : 1,
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Central Precision Gold Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'var(--accent-gold)',
          boxShadow: '0 0 10px var(--accent-gold-glow)',
        }}
        animate={{
          width: isHovered ? 6 : isClicking ? 8 : 4,
          height: isHovered ? 6 : isClicking ? 8 : 4,
          opacity: isHovered ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
