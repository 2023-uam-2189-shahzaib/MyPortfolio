import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

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

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Real Verified Contact Methods
  const contactMethods = [
    {
      id: 'email',
      label: 'Email Me',
      value: '2023-uam-2189@mnsuam.edu.pk',
      icon: Mail,
      accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      actionText: 'Send Email',
      href: 'mailto:2023-uam-2189@mnsuam.edu.pk',
      isExternal: false,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'shahzaib-ahmad-16443b430',
      icon: LinkedinIcon,
      accent: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      actionText: 'View Profile',
      href: 'https://www.linkedin.com/in/shahzaib-ahmad-16443b430',
      isExternal: true,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+92 3325162511',
      icon: MessageCircle,
      accent: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      actionText: 'Chat on WhatsApp',
      href: 'https://wa.me/923325162511',
      isExternal: true,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  // Shared input base class
  const inputBase = 'w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-slate-200 text-sm transition-all duration-200 resize-none';

  return (
    <section id="contact" className="py-24 relative tech-grid-bg border-t border-slate-900 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider badge-glow">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Have an AI, automation, machine learning, or software project in mind? Let's discuss how I can help turn your idea into a practical solution.
          </p>
        </FadeIn>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Column 1: Contact Introduction & Methods */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-5 space-y-8">
            
            <div className="glass-card p-8 rounded-2xl border border-slate-800/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>DIRECT INQUIRIES</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100">
                Open for Engineering & Consulting
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Whether you need intelligent AI automation, custom LLM solutions, machine learning models, or web application development, feel free to reach out directly through email, LinkedIn, or WhatsApp.
              </p>
            </div>

            {/* Contact Methods Cards — slide right on hover */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono uppercase text-slate-400 tracking-wider">
                Contact Channels
              </h4>

              <div className="space-y-3">
                {contactMethods.map((method) => {
                  const MethodIcon = method.icon;
                  return (
                    <motion.a
                      key={method.id}
                      whileHover={{ y: -3, x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      href={method.href}
                      target={method.isExternal ? '_blank' : undefined}
                      rel={method.isExternal ? 'noopener noreferrer' : undefined}
                      className="glass-card p-4 sm:p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors duration-300 flex items-center justify-between group block"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`p-2.5 rounded-lg border ${method.accent} group-hover:scale-105 transition-transform shrink-0`}>
                          <MethodIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-slate-400">{method.label}</p>
                          <p className="text-sm font-semibold text-slate-200 truncate">{method.value}</p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-cyan-400/80 group-hover:text-cyan-300 transition-colors flex items-center gap-1 shrink-0 ml-2">
                        {method.actionText}
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

          </FadeIn>

          {/* Column 2: Interactive Contact Form */}
          <FadeIn direction="left" delay={0.3} className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-2xl border border-slate-800/90 relative">
              
              {isSubmitted ? (
                /* Success State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 px-4 text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto badge-glow"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <strong className="text-cyan-400">{formData.name}</strong>. Your message details have been validated successfully.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 max-w-md mx-auto text-left space-y-1">
                    <p><span className="text-slate-500">Subject:</span> {formData.subject}</p>
                    <p><span className="text-slate-500">Sender Email:</span> {formData.email}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold hover:bg-cyan-500/30 transition-all text-sm cursor-pointer"
                  >
                    <span>Send Another Message</span>
                  </motion.button>
                </motion.div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                    <h3 className="text-xl font-bold text-slate-100">Send a Message</h3>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Direct Inquiry
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Mercer"
                        className={`${inputBase} ${
                          errors.name ? 'border-red-500/80 input-error' : 'border-slate-800 input-glow'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 flex items-center gap-1 font-mono pt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@company.com"
                        className={`${inputBase} ${
                          errors.email ? 'border-red-500/80 input-error' : 'border-slate-800 input-glow'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center gap-1 font-mono pt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. AI Automation & Workflow Inquiry"
                      className={`${inputBase} ${
                        errors.subject ? 'border-red-500/80 input-error' : 'border-slate-800 input-glow'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 flex items-center gap-1 font-mono pt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project requirements, goals, or inquiry details..."
                      className={`${inputBase} ${
                        errors.message ? 'border-red-500/80 input-error' : 'border-slate-800 input-glow'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 font-mono pt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button — shimmer on hover */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer text-sm shimmer-btn"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 ml-1" />
                  </motion.button>

                </form>
              )}

            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
