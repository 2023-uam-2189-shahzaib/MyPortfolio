import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Eye, 
  Workflow, 
  BarChart3,
  ShoppingBag
} from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

import aiBrainImg from '../assets/showcase-ai-brain.png';
import chatbotImg from '../assets/showcase-chatbot.png';
import potholeImg from '../assets/pothole-detection.jpg';
import contentAutoImg from '../assets/showcase-content-auto.png';
import analyticsImg from '../assets/showcase-analytics.png';
import shopifyImg from '../assets/beumaxplace-preview.jpg';

interface ShowcaseCard {
  id: string;
  title: string;
  category: string;
  image: string;
  icon: typeof Cpu;
  accent: string;
}

const SHOWCASE_ITEMS: ShowcaseCard[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    category: 'Core AI Architecture',
    image: aiBrainImg,
    icon: Cpu,
    accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot & Automation',
    category: 'Conversational LLMs',
    image: chatbotImg,
    icon: Bot,
    accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
  },
  {
    id: 'pothole',
    title: 'Pothole Computer Vision',
    category: 'Real-Time Vision AI',
    image: potholeImg,
    icon: Eye,
    accent: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  },
  {
    id: 'content',
    title: 'Multiplatform Content Automation',
    category: 'n8n & Workflow AI',
    image: contentAutoImg,
    icon: Workflow,
    accent: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  },
  {
    id: 'analytics',
    title: 'AI Analytics',
    category: 'Predictive Intelligence',
    image: analyticsImg,
    icon: BarChart3,
    accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  },
  {
    id: 'shopify',
    title: 'E-Commerce & Shopify Stores',
    category: 'Shopify Development',
    image: shopifyImg,
    icon: ShoppingBag,
    accent: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  },
];

// Duplicate items so the CSS marquee loops seamlessly at the 50% mark
const MARQUEE_ITEMS = [...SHOWCASE_ITEMS, ...SHOWCASE_ITEMS];

export const TechShowcase = () => {
  return (
    <section className="py-16 relative bg-slate-950 border-t border-slate-900/80 overflow-hidden">
      {/* Subtle Background Lighting Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center mb-10 gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Gallery</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            AI AUTOMATION <span className="text-slate-600 font-light mx-1.5">•</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              PROJECTS & TECH STACK
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal max-w-xl">
            Visual overview of core AI architectures, intelligent automation workflows, and specialized systems.
          </p>
        </FadeIn>

      </div>

      {/* Full-width CSS Infinite Marquee Track */}
      <FadeIn delay={0.2}>
        <div className="marquee-container">
          <div className="marquee-track py-2">
            {MARQUEE_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${i}`}
                  className="w-[300px] flex-shrink-0 group"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-500 relative flex flex-col shadow-lg hover:shadow-cyan-500/10"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 opacity-80 group-hover:opacity-55 transition-opacity duration-300 pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-medium backdrop-blur-md border ${item.accent} shadow-md`}>
                          <Icon className="w-3.5 h-3.5" />
                          {item.category}
                        </span>
                      </div>

                      {/* Bottom Title */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug drop-shadow-sm">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>

      {/* Hover hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <p className="text-center text-[11px] font-mono text-slate-600 tracking-widest uppercase">
          Hover to pause · Scroll to explore
        </p>
      </div>
    </section>
  );
};
