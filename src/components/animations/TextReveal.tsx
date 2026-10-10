import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  wordDelay = 0.04,
  highlightWords = [],
  highlightClass = 'tech-glow-text',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: wordDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`inline-flex flex-wrap justify-center gap-x-[0.3em] ${className}`}
    >
      {words.map((word, i) => {
        const isHighlight = highlightWords.some(
          (hw) => word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block ${isHighlight ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
