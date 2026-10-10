import { motion } from 'framer-motion';
import { 
  Terminal, 
  Brain, 
  Sparkles, 
  Workflow, 
  BarChart3, 
  Code2, 
  Wrench,
  ShoppingBag,
  CheckCircle2
} from 'lucide-react';
import { FadeIn, FadeInItem } from '../components/animations/FadeIn';
import { staggerRevealVariant, scaleInVariant } from '../components/animations/variants';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/10',
      tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/60',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Python',
        'Scikit-learn',
        'Predictive Modeling',
        'Computer Vision',
      ],
    },
    {
      title: 'Generative AI & LLMs',
      icon: Sparkles,
      accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-indigo-500/10',
      tagColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/60',
      skills: [
        'LLM Applications',
        'RAG Systems',
        'AI Agents',
        'AI Chatbots',
        'Prompt Engineering',
        'Conversational AI',
      ],
    },
    {
      title: 'AI Automation',
      icon: Workflow,
      accent: 'text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-purple-500/10',
      tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/60',
      skills: [
        'n8n',
        'Workflow Automation',
        'API Integrations',
        'Business Process Automation',
      ],
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/10',
      tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/60',
      skills: [
        'Data Analysis',
        'Data Cleaning',
        'Data Visualization',
        'Pandas',
        'NumPy',
        'SQL',
      ],
    },
    {
      title: 'Software & Web Development',
      icon: Code2,
      accent: 'text-teal-400 border-teal-500/30 bg-teal-500/10 shadow-teal-500/10',
      tagColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20 hover:border-teal-400/60',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js',
        'REST APIs',
        'SQLite',
        'CRM Development',
      ],
    },
    {
      title: 'Platforms & Tools',
      icon: Wrench,
      accent: 'text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-sky-500/10',
      tagColor: 'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:border-sky-400/60',
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Google APIs',
        'VS Code',
        'Vite',
        'Netlify',
      ],
    },
    {
      title: 'E-Commerce & Shopify',
      icon: ShoppingBag,
      accent: 'text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-orange-500/10',
      tagColor: 'bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400/60',
      skills: [
        'Shopify Store Setup',
        'Theme Customization',
        'Product & Collection Management',
        'Conversion Optimization',
        'Meta Pixel Integration',
        'SEO Optimization',
        'Payment & Shipping Setup',
        'Shopify Apps & Plugins',
        'Brand Identity & Design',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative tech-grid-bg border-t border-slate-900 overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider badge-glow">
            <Terminal className="w-3.5 h-3.5" />
            <span>Skills</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technologies &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            A practical toolkit for building intelligent systems, automated workflows, data-driven solutions, and modern digital products.
          </p>
        </FadeIn>

        {/* 6 Category Cards Grid */}
        <FadeIn staggerChildren={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <FadeInItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.28 }}
                  className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800/60">
                      <div className={`p-3 rounded-xl border ${category.accent} group-hover:scale-110 transition-transform duration-300`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Pill Badges — staggered per badge */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={staggerRevealVariant(0.055, 0.08)}
                      className="flex flex-wrap gap-2"
                    >
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          variants={scaleInVariant}
                          whileHover={{ scale: 1.06, y: -1 }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200 cursor-default ${category.tagColor}`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 opacity-70" />
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Footer Category Counter */}
                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>CATEGORY 0{index + 1}</span>
                    <span className="text-cyan-400/80 group-hover:text-cyan-400 transition-colors">
                      {category.skills.length} SKILLS
                    </span>
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
