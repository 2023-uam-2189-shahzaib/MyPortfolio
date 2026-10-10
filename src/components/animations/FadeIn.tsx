import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  staggerChildren?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = '',
  once = true,
  staggerChildren = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getDirections = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return {};
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      ...getDirections(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        staggerChildren: staggerChildren > 0 ? staggerChildren : undefined,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
