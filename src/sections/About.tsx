import { motion } from 'framer-motion';
import { User, Cpu, Workflow, Brain, Code2, Terminal, ShoppingBag } from 'lucide-react';
import { FadeIn, FadeInItem } from '../components/animations/FadeIn';
import { staggerContainerVariant, fadeUpVariant } from '../components/animations/variants';

export const About = () => {
  const whatIDoCards = [
    {
      title: 'AI Engineering',
      description: 'Building AI-powered applications using modern LLM and machine learning technologies.',
      icon: Cpu,
      accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/10',
      tag: 'AI & TECH',
    },
    {
      title: 'AI Automation',
      description: 'Designing intelligent workflows and business process automation using tools such as n8n.',
      icon: Workflow,
      accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-indigo-500/10',
      tag: 'AI & TECH',
    },
    {
      title: 'Machine Learning',
      description: 'Developing data-driven solutions for prediction, classification, and real-world problem solving.',
      icon: Brain,
      accent: 'text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-purple-500/10',
      tag: 'AI & TECH',
    },
    {
      title: 'Software & Web Development',
      description: 'Building modern web applications, CRM systems, and digital products.',
      icon: Code2,
      accent: 'text-teal-400 border-teal-500/30 bg-teal-500/10 shadow-teal-500/10',
      tag: 'AI & TECH',
    },
    {
      title: 'E-Commerce & Shopify',
      description: 'Designing and launching high-converting Shopify stores — from theme customization and product setup to Meta Pixel integration, SEO, and brand identity.',
      icon: ShoppingBag,
      accent: 'text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-orange-500/10',
      tag: 'E-COMMERCE',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/80 border-t border-slate-900 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider badge-glow"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Building Intelligent Solutions That{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Solve Real Problems
            </span>
          </h2>
        </FadeIn>

        {/* Narrative Section — paragraphs animate in individually */}
        <FadeIn delay={0.15} className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-800/90 relative group hover:border-cyan-500/40 transition-all duration-300">
            <div className="absolute -top-3 left-8 px-3 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
              <Terminal className="w-3 h-3" />
              <span>OVERVIEW</span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainerVariant(0.14, 0.1)}
              className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal pt-2"
            >
              <motion.p variants={fadeUpVariant}>
                I'm <strong className="text-white font-semibold">Shahzaib</strong>, an <strong className="text-cyan-400 font-semibold">AI Engineer & Automation Specialist</strong> focused on building practical, intelligent systems and modern digital solutions. I specialize in combining artificial intelligence, machine learning, workflow automation, and software development to turn real-world business requirements into reliable, scalable products.
              </motion.p>
              
              <motion.p variants={fadeUpVariant}>
                With a proven track record across LLM-powered applications, RAG systems, predictive analytics, computer vision, n8n workflow automation, and full-stack web applications, I design and deploy end-to-end solutions that are dependable, performant, and built to scale.
              </motion.p>

              <motion.p variants={fadeUpVariant}>
                Beyond AI, I also specialize in <strong className="text-orange-400 font-semibold">Shopify E-Commerce Development</strong> — designing and launching high-converting online stores with custom branding, Meta Pixel integration, SEO optimization, and full store management, helping businesses establish and grow their digital presence.
              </motion.p>
            </motion.div>
          </div>
        </FadeIn>



        {/* What I Do — 4 Cards Grid */}
        <div className="space-y-8">
          <FadeIn className="text-center">
            <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
              What I Do
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Core specializations and technical capabilities
            </p>
          </FadeIn>

          <FadeIn staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatIDoCards.map((card, index) => {
              const CardIcon = card.icon;
              return (
                <FadeInItem key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="glass-card p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl border ${card.accent} group-hover:scale-110 transition-transform duration-300`}>
                          <CardIcon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {card.title}
                        </h4>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>CAPABILITY 0{index + 1}</span>
                      <span className="text-cyan-400/80 group-hover:text-cyan-400 transition-colors">{card.tag}</span>
                    </div>
                  </motion.div>
                </FadeInItem>
              );
            })}
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
