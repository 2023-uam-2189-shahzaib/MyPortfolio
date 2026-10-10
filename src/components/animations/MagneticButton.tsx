import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = motion.div;

  const innerContent = (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={className}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </Component>
  );

  return innerContent;
};
