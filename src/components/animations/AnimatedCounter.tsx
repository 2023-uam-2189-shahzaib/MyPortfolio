import React, { useEffect, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1.5,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, skip counting animation and show final value
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 40;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
