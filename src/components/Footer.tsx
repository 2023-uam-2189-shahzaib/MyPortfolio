import { motion } from 'framer-motion';
import { ArrowUp, Terminal, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, SITE_METADATA } from '../data';
import { FadeIn } from './animations/FadeIn';

// Custom LinkedIn SVG Icon
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Hover slide underline link variant
const footerLinkVariants = {
  rest: { x: 0 },
  hover: { x: 3, transition: { type: 'spring' as const, stiffness: 300, damping: 22 } },
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 items-start">
          
          {/* Brand & Description Column */}
          <FadeIn direction="up" delay={0.05} className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-slate-100">
                {SITE_METADATA.brandName}
                <span className="text-cyan-400">.ai</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-normal">
              {SITE_METADATA.description}
            </p>
          </FadeIn>

          {/* Quick Nav Links Column */}
          <FadeIn direction="up" delay={0.12} className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Navigation
            </h4>

            <nav className="flex flex-col space-y-2 text-sm text-slate-300">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={footerLinkVariants}
                  className="hover:text-cyan-400 transition-colors w-fit inline-flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors shrink-0" />
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </FadeIn>

          {/* Real Contact Channels Column */}
          <FadeIn direction="up" delay={0.19} className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Direct Contact
            </h4>

            <div className="flex flex-col space-y-2 text-sm text-slate-300">
              <motion.a
                href={`mailto:${SITE_METADATA.contact.email}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={footerLinkVariants}
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Email Me</span>
              </motion.a>

              <motion.a
                href={SITE_METADATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={footerLinkVariants}
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </motion.a>

              <motion.a
                href={SITE_METADATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={footerLinkVariants}
                className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </motion.a>
            </div>
          </FadeIn>

        </div>

        {/* Footer Bottom Bar */}
        <FadeIn delay={0.25}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
            <p>© {currentYear} {SITE_METADATA.name}. All rights reserved.</p>

            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer group"
              aria-label="Back to Top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};
