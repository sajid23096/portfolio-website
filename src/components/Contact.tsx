import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's build something extraordinary together.</h2>
          <p className="text-xl text-secondary mb-12">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href={portfolioData.personalInfo.socials.email}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform text-lg group"
          >
            <Mail size={20} />
            Say Hello
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
