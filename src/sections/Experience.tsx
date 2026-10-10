import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, Terminal, Sparkles, ShoppingBag, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { staggerRevealVariant, scaleInVariant } from '../components/animations/variants';

export const Experience = () => {
  const techPills = [
    { label: 'AI Engineering', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/8' },
    { label: 'Machine Learning', color: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/8' },
    { label: 'AI Automation', color: 'text-purple-300 border-purple-500/30 bg-purple-500/8' },
  ];

  const shopifyPills = [
    { label: 'Shopify', color: 'text-orange-300 border-orange-500/30 bg-orange-500/8' },
    { label: 'E-Commerce', color: 'text-amber-300 border-amber-500/30 bg-amber-500/8' },
    { label: 'Theme Customization', color: 'text-rose-300 border-rose-500/30 bg-rose-500/8' },
    { label: 'Conversion Optimization', color: 'text-pink-300 border-pink-500/30 bg-pink-500/8' },
  ];

  const mitPills = [
    { label: 'Shopify Development', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/8' },
    { label: 'E-Commerce Strategy', color: 'text-teal-300 border-teal-500/30 bg-teal-500/8' },
    { label: 'Store Management', color: 'text-green-300 border-green-500/30 bg-green-500/8' },
    { label: 'Digital Marketing', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/8' },
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950/80 border-t border-slate-900 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider badge-glow">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </FadeIn>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line — draws down as it enters view */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/60 via-indigo-500/30 to-transparent origin-top" 
          />

          {/* Experience Card */}
          <FadeIn delay={0.2} className="relative pl-0 sm:pl-20">
            
            {/* Timeline Node Dot — pops in with glow */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden sm:flex absolute left-5 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center shadow-[0_0_18px_rgba(34,211,238,0.5)] z-10"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.75, 0, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ duration: 0.28 }}
              className="glass-card p-7 sm:p-9 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/70">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      HAT Tech Media
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-cyan-400 pl-9">
                    AI Engineer | ML Engineer | AI Automation
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>3 Months</span>
                </div>
              </div>

              {/* Description Body */}
              <div className="pt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Worked on AI engineering, machine learning, and AI automation solutions to solve complex operational challenges.
                </p>

                <ul className="space-y-2.5 pt-1 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span>Gained hands-on practical experience in architecting intelligent systems, LLM integrations, and automated business workflows.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span>Developed reliable machine learning pipelines and optimized automated workflows for digital scalability.</span>
                  </li>
                </ul>

                {/* Tech Highlight Pills — staggered entry */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={staggerRevealVariant(0.08, 0.1)}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {techPills.map((pill, i) => (
                    <motion.span
                      key={i}
                      variants={scaleInVariant}
                      className={`px-3 py-1 rounded-lg bg-slate-900 border text-xs font-mono transition-all duration-200 hover:scale-105 ${pill.color}`}
                    >
                      {pill.label}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Card Footer Status */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" /> CONFIRMED EXPERIENCE
                </span>
                <span className="text-cyan-400/90 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> VERIFIED
                </span>
              </div>

            </motion.div>

          </FadeIn>

          {/* ── Shopify / E-Commerce Experience Card ── */}
          <FadeIn delay={0.3} className="relative pl-0 sm:pl-20 mt-8">

            {/* Timeline Node Dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden sm:flex absolute left-5 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-orange-400 items-center justify-center shadow-[0_0_18px_rgba(251,146,60,0.5)] z-10"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.75, 0, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-orange-400"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ duration: 0.28 }}
              className="glass-card p-7 sm:p-9 rounded-2xl border border-slate-800/90 hover:border-orange-500/40 transition-all duration-300 group"
            >

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/70">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      Freelance Shopify Developer
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-orange-400 pl-9">
                    E-Commerce Store Design & Development
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>Ongoing</span>
                </div>
              </div>

              {/* Description Body */}
              <div className="pt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Independently designed and developed multiple full-featured Shopify e-commerce stores for clients across the beauty and home & kitchen niches, handling everything from store setup to launch.
                </p>

                <ul className="space-y-2.5 pt-1 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    <span>Built and launched <strong className="text-slate-100">BeuMax Place</strong> — a full beauty e-commerce store with Meta Pixel integration, SEO setup, product collections, and brand identity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    <span>Designed and developed <strong className="text-slate-100">Henvilo</strong> — a minimalist smart kitchen essentials Shopify store for the US market with modern black & white branding.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    <span>Launched <strong className="text-slate-100">LushesBeauty</strong> — a luxury hair & beauty Shopify store with elegant rose gold branding, curated product collections, and premium UX.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
                    <span>Managed end-to-end store operations including theme customization, payment & shipping configuration, app integrations, and conversion rate optimization.</span>
                  </li>
                </ul>

                {/* Live Store Links */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {[
                    { label: 'beumaxplace.com', url: 'https://beumaxplace.com' },
                    { label: 'henvilo.com', url: 'https://henvilo.com' },
                    { label: 'lushesbeauty.shop', url: 'https://lushesbeauty.shop' },
                  ].map((store) => (
                    <a
                      key={store.url}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 hover:text-orange-200 border border-orange-500/30 text-xs font-mono transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {store.label}
                    </a>
                  ))}
                </div>

                {/* Tech Pills */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={staggerRevealVariant(0.08, 0.1)}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {shopifyPills.map((pill, i) => (
                    <motion.span
                      key={i}
                      variants={scaleInVariant}
                      className={`px-3 py-1 rounded-lg bg-slate-900 border text-xs font-mono transition-all duration-200 hover:scale-105 ${pill.color}`}
                    >
                      {pill.label}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <ShoppingBag className="w-3.5 h-3.5 text-orange-400" /> SHOPIFY STORES LIVE
                </span>
                <span className="text-orange-400/90 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 3 STORES BUILT
                </span>
              </div>

            </motion.div>

          </FadeIn>

          {/* ── MIT Shopify Certification Card ── */}
          <FadeIn delay={0.4} className="relative pl-0 sm:pl-20 mt-8">

            {/* Timeline Node Dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden sm:flex absolute left-5 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-emerald-400 items-center justify-center shadow-[0_0_18px_rgba(52,211,153,0.5)] z-10"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.75, 0, 0.75] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.005 }}
              transition={{ duration: 0.28 }}
              className="glass-card p-7 sm:p-9 rounded-2xl border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 group"
            >

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/70">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      MIT — Shopify E-Commerce Course
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-emerald-400 pl-9">
                    Massachusetts Institute of Technology · Certified Program
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>3 Months</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                    <Award className="w-3 h-3" />
                    CERTIFIED
                  </div>
                </div>
              </div>

              {/* Description Body */}
              <div className="pt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Completed a structured 3-month Shopify E-Commerce certification program from <strong className="text-white">MIT (Massachusetts Institute of Technology)</strong>, covering end-to-end store development, e-commerce strategy, and digital business operations.
                </p>

                <ul className="space-y-2.5 pt-1 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>Mastered Shopify store setup, theme customization, and product & collection management for professional e-commerce operations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>Learned advanced e-commerce strategies including conversion rate optimization, SEO, digital marketing, and customer retention techniques.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span>Gained expertise in payment gateway setup, shipping configurations, app integrations, and full-cycle store management on Shopify.</span>
                  </li>
                </ul>

                {/* Tech Pills */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={staggerRevealVariant(0.08, 0.1)}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {mitPills.map((pill, i) => (
                    <motion.span
                      key={i}
                      variants={scaleInVariant}
                      className={`px-3 py-1 rounded-lg bg-slate-900 border text-xs font-mono transition-all duration-200 hover:scale-105 ${pill.color}`}
                    >
                      {pill.label}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> MIT CERTIFICATION
                </span>
                <span className="text-emerald-400/90 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> COMPLETED
                </span>
              </div>

            </motion.div>

          </FadeIn>

        </div>

      </div>
    </section>
  );
};
