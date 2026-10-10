import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import { SITE_METADATA } from '../data';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export const TopBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < 60 || currentY < lastY);
      setLastY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="topbar"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-[60] h-10 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/70"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-end h-full gap-5">

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ y: -1, scale: 1.15 }}
                  href={SITE_METADATA.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-slate-500 hover:text-emerald-400 transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -1, scale: 1.15 }}
                  href={SITE_METADATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -1, scale: 1.15 }}
                  href={`mailto:${SITE_METADATA.contact.email}`}
                  aria-label="Email"
                  className="text-slate-500 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Divider */}
              <div className="h-4 w-px bg-slate-700/60" />

              {/* Contact Me CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 14px rgba(6,182,212,0.25)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded text-[10px] font-bold tracking-[0.15em] uppercase border border-slate-700 text-slate-300 hover:border-cyan-500/60 hover:text-cyan-300 hover:bg-cyan-500/8 transition-all duration-200"
              >
                <MessageCircle className="w-3 h-3" />
                Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
