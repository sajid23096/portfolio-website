import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-accent"></div>
              <h2 className="text-accent font-medium tracking-wide uppercase text-sm">Portfolio</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">Projects</h3>
          </div>
          
          <a href={portfolioData.personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors flex items-center gap-2 group">
            View All on GitHub
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={project.link} className="block relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] bg-secondary/10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* 3D hover reveal effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-background/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 z-20 shadow-xl">
                  <ArrowUpRight className="text-foreground" size={24} />
                </div>
              </a>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-foreground/10 text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noreferrer">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h4>
              </a>
              <p className="text-foreground/70 leading-relaxed max-w-lg">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
