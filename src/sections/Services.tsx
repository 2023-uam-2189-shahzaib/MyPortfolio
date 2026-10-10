import { motion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Workflow, 
  Brain, 
  Sparkles, 
  Bot, 
  Globe, 
  ArrowUpRight 
} from 'lucide-react';
import { FadeIn, FadeInItem } from '../components/animations/FadeIn';

export const Services = () => {
  const servicesList = [
    {
      title: 'AI Engineering',
      description: 'Building practical AI-powered applications and intelligent systems using modern AI technologies.',
      icon: Cpu,
      accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/10',
      tag: 'AI Systems',
    },
    {
      title: 'AI Automation',
      description: 'Designing automated business workflows and AI-powered processes using n8n, APIs, and intelligent automation.',
      icon: Workflow,
      accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-indigo-500/10',
      tag: 'n8n & APIs',
    },
    {
      title: 'Machine Learning',
      description: 'Developing machine learning solutions for prediction, classification, and data-driven problem solving.',
      icon: Brain,
      accent: 'text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-purple-500/10',
      tag: 'ML Models',
    },
    {
      title: 'LLM & RAG Applications',
      description: 'Building LLM-powered applications, RAG systems, AI agents, and knowledge-based assistants.',
      icon: Sparkles,
      accent: 'text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-sky-500/10',
      tag: 'RAG & Agents',
    },
    {
      title: 'AI Chatbots',
      description: 'Developing conversational AI solutions for websites, customer support, and business use cases.',
      icon: Bot,
      accent: 'text-teal-400 border-teal-500/30 bg-teal-500/10 shadow-teal-500/10',
      tag: 'Conversational AI',
    },
    {
      title: 'Web & CRM Development',
      description: 'Building modern web applications, business platforms, and CRM systems with scalable frontend and backend technologies.',
      icon: Globe,
      accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/10',
      tag: 'Full-Stack & CRM',
    },
  ];

  return (
    <section id="services" className="py-24 relative tech-grid-bg border-t border-slate-900 overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider badge-glow">
            <Layers className="w-3.5 h-3.5" />
            <span>Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What I Can{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Practical AI, automation, machine learning, and software solutions designed around real-world business needs.
          </p>
        </FadeIn>

        {/* 6 Services Grid — icon micro-animation via variant propagation */}
        <FadeIn staggerChildren={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {servicesList.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <FadeInItem key={index}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={{
                    rest: { y: 0, scale: 1 },
                    hover: {
                      y: -6,
                      scale: 1.01,
                      transition: { type: 'spring', stiffness: 260, damping: 20 },
                    },
                  }}
                  className="glass-card p-7 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-5">
                    {/* Top Bar with Icon (micro-rotation) and Tag */}
                    <div className="flex items-center justify-between">
                      {/* Icon wrapper with rotation micro-animation on card hover */}
                      <motion.div
                        variants={{
                          rest: { rotate: 0, scale: 1 },
                          hover: {
                            rotate: [0, -10, 10, -5, 0],
                            scale: 1.1,
                            transition: { duration: 0.4, ease: 'easeInOut' },
                          },
                        }}
                        className={`p-3 rounded-xl border ${service.accent}`}
                      >
                        <ServiceIcon className="w-6 h-6" />
                      </motion.div>

                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 group-hover:border-slate-700 group-hover:text-slate-300 transition-all duration-200">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-2.5">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>SERVICE 0{index + 1}</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-cyan-400/80 group-hover:text-cyan-300 transition-colors font-medium hover:underline"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </FadeInItem>
            );
          })}
        </FadeIn>

      </div>
    </section>
  );
};
