import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { NAV_ITEMS, SITE_METADATA } from '../data';

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.22, ease: 'easeIn' as const } },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.32,
      ease: ease,
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' as const } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.26, ease: ease } },
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);
      // Mirror topbar visibility logic
      setTopBarVisible(currentY < 60 || currentY < lastScrollY);
      setLastScrollY(currentY);

      // Active section tracking
      const sectionIds = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = currentY + 130;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navTop = topBarVisible ? 'top-10' : 'top-0';

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.15, ease }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${navTop} ${
        isScrolled
          ? 'glass-panel border-b border-slate-800/80 shadow-xl shadow-black/30 py-3'
          : 'bg-slate-950/20 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Brand ── */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              <Terminal className="w-5 h-5" />
            </motion.div>
            <div className="leading-none">
              <span className="font-extrabold text-base tracking-wide text-slate-100">
                {SITE_METADATA.brandName}
                <span className="text-cyan-400">.ai</span>
              </span>
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.15em] mt-0.5">
                AI Engineer
              </p>
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-200 group ${
                    isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {/* Sliding underline indicator */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ease-out group-hover:w-4/5 w-0" />
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-cyan-400 w-4/5"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download="Shahzaib_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold tracking-wider uppercase border border-slate-700 text-slate-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/8 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </motion.a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-xl border border-slate-800 focus:outline-none cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden glass-panel border-t border-slate-800/80 px-4 pt-3 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={item.href}
                    variants={mobileItemVariants}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-slate-100'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <motion.a
                variants={mobileItemVariants}
                href="/resume.pdf"
                download="Shahzaib_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-200 border border-slate-700 rounded-xl hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
