import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import { 
  FolderGit2, 
  Brain, 
  Bot, 
  Eye, 
  Workflow, 
  Search, 
  Layout, 
  Sparkles,
  Image as ImageIcon,
  ExternalLink,
  ArrowUpRight,
  ShoppingBag
} from 'lucide-react';
import type { ProjectItem } from '../types';
import { FadeIn } from '../components/animations/FadeIn';
import { staggerRevealVariant, scaleInVariant } from '../components/animations/variants';

import startupPredictionImg from '../assets/startup-prediction.jpg';
import phantomsChatbotImg from '../assets/phantoms-chatbot.jpg';
import potholeDetectionImg from '../assets/pothole-detection.jpg';
import contentAutomationImg from '../assets/content-automation.png';
import indexDoctorImg from '../assets/index-doctor.jpg';
import leadflowCrmImg from '../assets/leadflow-crm.jpg';
import harborpeakCommerceImg from '../assets/harborpeak-commerce.jpg';
import beumaxplaceImg from '../assets/beumaxplace-preview.jpg';
import henviloImg from '../assets/henvilo-preview.jpg';
import lushesbeautyImg from '../assets/lushesbeauty-preview.jpg';

interface PortfolioProject extends ProjectItem {
  icon: typeof Brain;
  accentColor: string;
  badgeText: string;
  image?: string;
  role?: string;
}

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

// Extracted as its own component so hooks (useMotionValue etc.) are valid per-card
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ProjectIcon = project.icon;
  const shouldReduceMotion = useReducedMotion();

  // Mouse parallax MotionValues — limited to small range for subtlety
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.45, delay: index * 0.065, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-300 flex flex-col justify-between group h-full"
      style={{
        // Smooth shadow lift on hover via CSS — GPU friendly
        '--card-shadow': '0 12px 48px -12px rgba(34,211,238,0.18)',
      } as React.CSSProperties}
    >
      <div className="space-y-5">
        
        {/* Project Image Container */}
        {project.image ? (
          <div className="h-52 rounded-xl border border-slate-800/90 relative overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300 bg-slate-950">
            {/* Image with parallax transform */}
            <motion.div
              style={shouldReduceMotion ? {} : { x: imageX, y: imageY }}
              className="absolute inset-0 will-change-transform"
            >
              <motion.img 
                src={project.image} 
                alt={project.title} 
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 pointer-events-none group-hover:opacity-50 transition-opacity duration-300 z-10" />
            
            {/* Badge */}
            <span className="absolute top-3 right-3 text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-800 text-cyan-300 font-medium z-20 shadow-sm">
              {project.badgeText}
            </span>

            {/* Live Demo overlay button — slides up on hover */}
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 text-[11px] font-mono px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold flex items-center gap-1.5 shadow-lg opacity-0 group-hover:opacity-100 z-20 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        ) : (
          <div className={`h-52 rounded-xl bg-gradient-to-br ${project.accentColor} border border-slate-800 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:border-cyan-500/30 transition-all duration-300`}>
            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

            {/* Central Icon Badge */}
            <div className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
              <ProjectIcon className="w-6 h-6" />
            </div>

            <div className="mt-3 text-center relative z-10">
              <span className="text-xs font-mono text-slate-300 font-medium block">
                {project.title}
              </span>
              <span className="text-[10px] font-mono text-slate-500 flex items-center justify-center gap-1 mt-1">
                <ImageIcon className="w-3 h-3" /> Project Screenshot
              </span>
            </div>

            <span className="absolute top-3 right-3 text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
              {project.badgeText}
            </span>
          </div>
        )}

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Technology Tags — staggered per tag */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerRevealVariant(0.045, 0.08)}
          className="flex flex-wrap gap-1.5 pt-2"
        >
          {project.tags.map((tag, tagIdx) => (
            <motion.span
              key={tagIdx}
              variants={scaleInVariant}
              whileHover={{ scale: 1.05 }}
              className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 hover:border-slate-700 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Footer Metadata */}
      <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>PROJECT {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
        {project.liveUrl ? (
          <motion.a
            whileHover={{ scale: 1.04, x: 2 }}
            whileTap={{ scale: 0.96 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 font-sans font-semibold text-xs transition-all duration-200 group/link"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </motion.a>
        ) : (
          <span className="text-cyan-400/80 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> CONFIRMED PROJECT
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projectsData: PortfolioProject[] = [
    {
      id: 'startup-prediction',
      title: 'AI Startup Success & Failure Prediction System',
      description: 'Engineered an AI/ML predictive system designed to analyze business and startup-related dataset parameters. Applied machine learning algorithms to assist stakeholders in evaluating potential venture success or failure risks.',
      category: 'AI & Machine Learning',
      tags: ['AI / ML', 'Data Analytics', 'Predictive Modeling'],
      icon: Brain,
      accentColor: 'from-cyan-500/20 via-sky-500/10 to-transparent text-cyan-400 border-cyan-500/30',
      badgeText: 'AI / ML System',
      image: startupPredictionImg,
    },
    {
      id: 'phantoms-chatbot',
      title: 'Phantoms Workspace AI Chatbot',
      description: 'Developed an intelligent conversational AI chatbot for Phantoms Workspace to provide instant user support and query resolution, utilizing modern LLM architectures and tailored prompts.',
      category: 'AI Chatbots',
      tags: ['Conversational AI', 'LLMs', 'Chatbots'],
      liveUrl: 'https://www.phantomsworkspace.com/lander',
      icon: Bot,
      accentColor: 'from-indigo-500/20 via-purple-500/10 to-transparent text-indigo-400 border-indigo-500/30',
      badgeText: 'Conversational AI',
      image: phantomsChatbotImg,
    },
    {
      id: 'pothole-detection',
      title: 'AI Pothole Detection System',
      description: 'Built a computer vision system that accurately detects potholes and road anomalies from static images, engineered with live stream processing capabilities for real-time detection via camera feed.',
      category: 'AI & Machine Learning',
      tags: ['Computer Vision', 'Real-Time AI', 'ML'],
      icon: Eye,
      accentColor: 'from-purple-500/20 via-indigo-500/10 to-transparent text-purple-400 border-purple-500/30',
      badgeText: 'Computer Vision',
      image: potholeDetectionImg,
    },
    {
      id: 'content-automation',
      title: 'AI MultiPlatform Content Automation',
      description: 'Architected an n8n-based automation workflow generating short-form video content with synthetic voice and subtitles, automating end-to-end content distribution and scheduling across social platforms.',
      category: 'AI Automation',
      tags: ['n8n', 'AI Automation', 'Content Pipeline'],
      icon: Workflow,
      accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent text-amber-400 border-amber-500/30',
      badgeText: 'n8n Automation',
      image: contentAutomationImg,
    },
    {
      id: 'index-doctor',
      title: 'AI Index Doctor',
      description: 'Created an AI diagnostic tool analyzing website blog content to diagnose search engine indexing issues, generating automated SEO remediation suggestions and actionable insights to improve indexing rates.',
      category: 'AI Diagnostics',
      tags: ['AI Diagnostics', 'SEO Analytics', 'Search Indexing'],
      icon: Search,
      accentColor: 'from-teal-500/20 via-emerald-500/10 to-transparent text-teal-400 border-teal-500/30',
      badgeText: 'AI Diagnostics',
      image: indexDoctorImg,
    },
    {
      id: 'leadflow-crm',
      title: 'LeadFlow CRM',
      description: 'Developed a modern CRM system managing leads, team members, scheduling, and business workflows, integrating Google API services for automated meeting synchronization and streamlined lead tracking.',
      category: 'Web & Systems',
      tags: ['CRM Development', 'Google APIs', 'Web Systems'],
      icon: Layout,
      accentColor: 'from-sky-500/20 via-blue-500/10 to-transparent text-sky-400 border-sky-500/30',
      badgeText: 'CRM & Web',
      image: leadflowCrmImg,
    },
    {
      id: 'harborpeak-commerce',
      title: 'HarborPeak Commerce',
      description: 'Designed and developed a professional e-commerce partnership website for HarborPeak Commerce covering operations, Shopify store management, marketing, and partnership services, deployed on Netlify.',
      category: 'Web & Systems',
      tags: ['Web Development', 'HTML/CSS/JS', 'Netlify'],
      liveUrl: 'https://harborpeak-commerce.netlify.app/',
      role: 'Designer & Developer',
      icon: ShoppingBag,
      accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent text-amber-400 border-amber-500/30',
      badgeText: 'E-Commerce / Netlify',
      image: harborpeakCommerceImg,
    },
    {
      id: 'beumaxplace-shopify',
      title: 'BeuMax Place — Beauty Store',
      description: 'Designed and built a full Shopify beauty e-commerce store for BeuMax Place, selling trendy makeup essentials including mirror-shine lip oils, eyeshadows, lipsticks, and professional beauty tools. Includes Meta Pixel integration, SEO optimization, and full store setup.',
      category: 'E-Commerce / Shopify',
      tags: ['Shopify', 'E-Commerce', 'Beauty', 'Meta Pixel', 'SEO'],
      liveUrl: 'https://beumaxplace.com',
      role: 'Shopify Designer & Developer',
      icon: ShoppingBag,
      accentColor: 'from-orange-500/20 via-amber-500/10 to-transparent text-orange-400 border-orange-500/30',
      badgeText: 'Shopify Store',
      image: beumaxplaceImg,
    },
    {
      id: 'henvilo-shopify',
      title: 'Henvilo — Kitchen Essentials Store',
      description: 'Built and designed a sleek Shopify store for Henvilo, a US-based smart kitchen essentials brand. Features a modern minimalist black & white aesthetic with curated collections of cookware, gadgets, and utensils for contemporary homes.',
      category: 'E-Commerce / Shopify',
      tags: ['Shopify', 'E-Commerce', 'Home & Kitchen', 'Dawn Theme'],
      liveUrl: 'https://henvilo.com/',
      role: 'Shopify Designer & Developer',
      icon: ShoppingBag,
      accentColor: 'from-slate-500/20 via-gray-500/10 to-transparent text-slate-400 border-slate-500/30',
      badgeText: 'Shopify Store',
      image: henviloImg,
    },
    {
      id: 'lushesbeauty-shopify',
      title: 'LushesBeauty — Premium Beauty Shop',
      description: 'Designed and launched a luxurious Shopify store for LushesBeauty, a premium beauty and hair care brand. Features an elegant rose gold aesthetic with curated collections of hair extensions, serums, and skincare essentials.',
      category: 'E-Commerce / Shopify',
      tags: ['Shopify', 'E-Commerce', 'Beauty & Hair', 'Luxury Brand'],
      liveUrl: 'https://lushesbeauty.shop/',
      role: 'Shopify Designer & Developer',
      icon: ShoppingBag,
      accentColor: 'from-pink-500/20 via-rose-500/10 to-transparent text-pink-400 border-pink-500/30',
      badgeText: 'Shopify Store',
      image: lushesbeautyImg,
    },
  ];

  const categories = ['All', 'AI & Machine Learning', 'AI Chatbots', 'AI Automation', 'AI Diagnostics', 'Web & Systems', 'E-Commerce / Shopify'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory || project.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900 overflow-hidden">
      {/* Subtle Background Glow Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider badge-glow">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Real-world AI systems, intelligent automation workflows, machine learning tools, and business applications.
          </p>
        </FadeIn>

        {/* Category Filter Navigation */}
        <FadeIn delay={0.15} className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-bold'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 bg-cyan-500/15 border border-cyan-500/40 rounded-xl shadow-sm shadow-cyan-500/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </FadeIn>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
