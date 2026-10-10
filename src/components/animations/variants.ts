import type { Variants } from 'framer-motion';

// Standard fade + translate up — most common entrance animation
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Opacity-only fade — for subtle reveals with no movement
export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Scale + fade — ideal for badges, chips, pill entries
export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.86, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Slide in from left
export const slideInLeftVariant: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Slide in from right
export const slideInRightVariant: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Stagger container — fades in itself and staggers children
export const staggerContainerVariant = (stagger = 0.1, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// Stagger reveal container — stays visible itself, only coordinates child timing
// Use this when the container's opacity is already handled by a parent FadeIn
export const staggerRevealVariant = (stagger = 0.07, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
