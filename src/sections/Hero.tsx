import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight, Download,
  Cpu, Bot, Workflow, Zap, Code2, Sparkles, BarChart3, Globe,
} from 'lucide-react';
import profileImg from '../assets/profile.jpg';

// =============================================================
// Matrix / Binary Rain Canvas Background
// =============================================================
const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CHAR_SIZE = 14;
    const CHARS = '010110100011アイウエカキ01101001';

    let cols = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols  = Math.ceil(canvas.width / CHAR_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -80);
    };

    resize();

    const draw = () => {
      // Fade trail
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${CHAR_SIZE - 2}px "JetBrains Mono", monospace`;

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * CHAR_SIZE;
        const y = drops[i] * CHAR_SIZE;

        if (y >= 0) {
          // Bright leading char
          if (Math.random() > 0.92) {
            ctx.fillStyle = 'rgba(200, 255, 255, 0.75)';
          } else {
            const alpha = Math.random() * 0.18 + 0.04;
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
          }
          ctx.fillText(char, x, y);
        }

        // Reset column randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -40;
        }
        drops[i] += 0.45;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.28 }}
    />
  );
};

// =============================================================
// Circular Profile with Orbit Rings
// =============================================================
interface ProfileOrbitProps {
  reducedMotion: boolean;
}

const ProfileOrbit: React.FC<ProfileOrbitProps> = ({ reducedMotion }) => {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{
        width: 'clamp(260px, 32vw, 350px)',
        height: 'clamp(260px, 32vw, 350px)',
      }}
    >
      {/* ── Background Ambient Glows ── */}
      <div className="absolute inset-[-25%] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-[-12%] rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

      {/* ── Orbit Layer 1 (Outer Dotted Ring - CW) ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-full border border-dashed border-cyan-400/25 pointer-events-none will-change-transform"
        style={{
          inset: '-16%',
          animation: reducedMotion ? 'none' : 'spin-slow 30s linear infinite',
        }}
      >
        {/* Orbit Node Top */}
        <span className="orbit-dot" style={{ top: '-4px', left: '50%', transform: 'translateX(-50%)' }} />
        {/* Orbit Node Bottom Right */}
        <span className="orbit-dot orbit-dot--dim" style={{ bottom: '15%', right: '10%' }} />
        {/* Micro Particle */}
        <span
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
          style={{ top: '22%', left: '8%' }}
        />
      </div>

      {/* ── Orbit Layer 2 (Middle Thin Ring - CCW) ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-full border border-indigo-400/25 pointer-events-none will-change-transform"
        style={{
          inset: '-8%',
          animation: reducedMotion ? 'none' : 'spin-slow-ccw 22s linear infinite',
        }}
      >
        {/* Orbit Node Right */}
        <span className="orbit-dot-indigo" style={{ right: '-4px', top: '50%', transform: 'translateY(-50%)' }} />
        {/* Orbit Node Left */}
        <span className="orbit-dot-indigo" style={{ left: '-4px', top: '50%', transform: 'translateY(-50%)' }} />
        {/* Micro Indigo Particle */}
        <span
          className="absolute w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_6px_rgba(99,102,241,0.85)]"
          style={{ bottom: '18%', left: '16%' }}
        />
      </div>

      {/* ── Orbit Layer 3 (Fine Tech HUD & Particles Ring - CW) ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-full border border-dashed border-sky-400/15 pointer-events-none will-change-transform"
        style={{
          inset: '-2%',
          animation: reducedMotion ? 'none' : 'spin-slow 40s linear infinite',
        }}
      >
        <span className="orbit-dot orbit-dot--dim" style={{ top: '8%', left: '25%' }} />
        <span className="orbit-dot-indigo" style={{ bottom: '12%', right: '22%' }} />
        <span
          className="absolute w-1 h-1 rounded-full bg-cyan-200 shadow-[0_0_6px_rgba(34,211,238,0.9)]"
          style={{ bottom: '-2px', left: '50%', transform: 'translateX(-50%)' }}
        />
      </div>

      {/* ── Static Profile Image & Circular Frame (NEVER ROTATES) ── */}
      <div className="relative z-10 w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-cyan-500/60 via-indigo-500/40 to-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.22)]">
        {/* Inner dark bezel ring */}
        <div className="w-full h-full rounded-full bg-slate-950 p-[3px] overflow-hidden">
          {/* Profile Image — Completely Static, Centered, Never Rotates */}
          <img
            src={profileImg}
            alt="Shahzaib — AI Engineer & Automation Specialist"
            className="profile-image select-none pointer-events-none"
            loading="eager"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

// =============================================================
// Main Hero Section
// =============================================================
const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const CHIPS = [
  { label: 'AI Engineering',   icon: Cpu       },
  { label: 'LLMs & RAG',       icon: Sparkles  },
  { label: 'AI Automation',    icon: Workflow  },
  { label: 'Machine Learning', icon: Bot       },
  { label: 'Python',           icon: Code2     },
  { label: 'Data Analytics',   icon: BarChart3 },
  { label: 'n8n Workflows',    icon: Zap       },
  { label: 'Web & CRM',        icon: Globe     },
];

// =============================================================
// Single-String Continuous Typewriter
// Full text is ONE string typed + deleted as a unit, looping forever.
// =============================================================
const FULL_TEXT   = 'AI Engineer & Automation Specialist'; // 35 chars
const TYPE_MS     = 68;    // ms per character typed
const DELETE_MS   = 34;    // ms per character deleted (snappy backspace feel)
const PAUSE_FULL  = 1800;  // ms after fully typed before deleting
const PAUSE_EMPTY = 480;   // ms after fully deleted before re-typing

// Visual line break offsets within FULL_TEXT:
//   0–10  = "AI Engineer"   (11 chars)
//   11    = " " (separator — not rendered on its own line)
//   12–23 = "& Automation"  (12 chars)
//   24    = " " (separator)
//   25–34 = "Specialist"    (10 chars)
const L1_END   = 11;  // exclusive — slice(0, 11)
const L2_START = 12;
const L2_END   = 24;  // exclusive — slice(12, 24)
const L3_START = 25;
const LEN      = FULL_TEXT.length; // 35

function getLines(count: number) {
  return {
    line1: FULL_TEXT.slice(0, Math.min(count, L1_END)),
    line2: count > L1_END ? FULL_TEXT.slice(L2_START, Math.min(count, L2_END)) : '',
    line3: count > L2_END ? FULL_TEXT.slice(L3_START, Math.min(count, LEN))    : '',
  };
}

function useLoopingTyper(reducedMotion: boolean) {
  const [count,      setCount]      = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setCount(LEN);
      setShowCursor(false);
      return;
    }

    let cancelled = false;
    const schedule = (fn: () => void, ms: number) => {
      timerRef.current = setTimeout(() => { if (!cancelled) fn(); }, ms);
    };

    // ── TYPE: increment count 0 → LEN ──
    const doType = (c: number) => {
      const next = c + 1;
      setCount(next);
      setShowCursor(true);
      if (next < LEN) {
        schedule(() => doType(next), TYPE_MS);
      } else {
        // Fully typed — pause then start deleting
        schedule(() => doDelete(LEN), PAUSE_FULL);
      }
    };

    // ── DELETE: decrement count LEN → 0 ──
    const doDelete = (c: number) => {
      const next = c - 1;
      setCount(next);
      setShowCursor(true);
      if (next > 0) {
        schedule(() => doDelete(next), DELETE_MS);
      } else {
        // Fully deleted — cursor off, pause then re-type
        setShowCursor(false);
        schedule(() => doType(0), PAUSE_EMPTY);
      }
    };

    // Initial delay so the page settles before typing begins
    schedule(() => doType(0), 650);

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [reducedMotion]);

  return { count, showCursor };
}

// =============================================================
// Typewriter Heading Component
// =============================================================
const TypewriterHeading: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const { count, showCursor } = useLoopingTyper(reducedMotion);
  const { line1, line2, line3 } = getLines(count);

  // Cursor sits on the last line that has visible text (or line 1 while empty)
  const cursorLine = count > L2_END ? 3 : count > L1_END ? 2 : 1;

  const gradientCls = 'bg-gradient-to-r from-cyan-300 via-sky-100 to-indigo-300 bg-clip-text text-transparent';
  const cursor = showCursor ? (
    <span
      aria-hidden="true"
      className="inline-block w-[3px] h-[0.82em] ml-[3px] align-middle rounded-sm bg-cyan-400 typing-cursor"
    />
  ) : null;

  return (
    <h1 className="text-[clamp(2.4rem,6vw,4.8rem)] font-black tracking-tight leading-[1.06] text-white">

      {/* LINE 1 — "AI Engineer" portion */}
      <span className="block min-h-[1.06em]">
        <span className={gradientCls}>{line1}</span>
        {cursorLine === 1 && cursor}
      </span>

      {/* LINE 2 — "& Automation" portion */}
      <span className="block min-h-[1.06em]">
        <span className={gradientCls}>{line2}</span>
        {cursorLine === 2 && cursor}
      </span>

      {/* LINE 3 — "Specialist" portion */}
      <span className="block min-h-[1.06em]">
        <span className={gradientCls}>{line3}</span>
        {cursorLine === 3 && cursor}
      </span>

    </h1>
  );
};

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#030712]"
      style={{ minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '4rem' }}
    >
      {/* Matrix animated background */}
      {!shouldReduceMotion && <MatrixBackground />}

      {/* Radial center glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-cyan-600/7 blur-[120px]" />
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-600/7 blur-[100px]" />
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 items-center min-h-[calc(100vh-6.5rem-4rem)]">

          {/* ============================================================
              LEFT SIDE — Typography & CTAs
          ============================================================ */}
          <div className="order-2 lg:order-1 space-y-7 flex flex-col justify-center">

            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease }}
              className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-cyan-500/35 bg-cyan-500/6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-cyan-300">
                AI Engineer • Automation Specialist
              </span>
            </motion.div>

            {/* Main heading — letter-by-letter typewriter reveal */}
            <TypewriterHeading reducedMotion={shouldReduceMotion} />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.92, ease }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg font-normal"
            >
              I build intelligent AI systems, automation workflows, and modern software
              solutions that solve real-world business problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.12, ease }}
              className="flex flex-wrap gap-4"
            >
              {/* View My Work */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(6,182,212,0.3)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-cyan-500 text-slate-950 font-extrabold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/25 shimmer-btn cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/resume.pdf"
                download="Shahzaib_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.55)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-slate-600 text-slate-200 font-bold text-sm hover:text-cyan-300 hover:bg-slate-800/50 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Skill chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {CHIPS.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <motion.span
                    key={chip.label}
                    initial={{ opacity: 0, scale: 0.82 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.055, duration: 0.35, ease }}
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800/80 text-[11px] font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-default backdrop-blur-sm"
                  >
                    <Icon className="w-3 h-3 text-cyan-400 opacity-80 shrink-0" />
                    {chip.label}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>

          {/* ============================================================
              RIGHT SIDE — Circular Profile Image + Orbit
          ============================================================ */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.34, 1.2, 0.64, 1] }}
            >
              {/* Static Profile container with entrance reveal */}
              <div className="relative">
                <ProfileOrbit reducedMotion={shouldReduceMotion} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.28em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
