import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
              Hello, I am
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {portfolioData.personalInfo.name.split(' ')[0]} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              {portfolioData.personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-secondary font-medium mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {portfolioData.personalInfo.role}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-foreground/70 mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {portfolioData.personalInfo.tagline}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={portfolioData.personalInfo.resumeLink} 
              className="px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
