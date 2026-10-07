import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  width?: 'fit-content' | '100%';
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 35,
  className = '',
  width = '100%',
  once = true,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0, opacity: 0 };
      case 'down':
        return { y: -distance, x: 0, opacity: 0 };
      case 'left':
        return { x: distance, y: 0, opacity: 0 };
      case 'right':
        return { x: -distance, y: 0, opacity: 0 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
