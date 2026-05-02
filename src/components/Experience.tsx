import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-secondary max-w-2xl text-lg">My professional journey and academic background.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">💼</span>
              Work Experience
            </h3>
            
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className="relative pl-8 md:pl-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:grid md:grid-cols-4 md:gap-6 items-start">
                    <div className="hidden md:block col-span-1 text-sm font-medium text-secondary pt-1 uppercase tracking-wider">
                      {exp.period}
                    </div>
                    <div className="md:col-span-3 relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-10 md:-left-8 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background z-10"></div>
                      {/* Timeline line */}
                      {index !== portfolioData.experience.length - 1 && (
                        <div className="absolute -left-[34px] md:-left-[26px] top-4 bottom-[-48px] w-px bg-foreground/10"></div>
                      )}
                      
                      <span className="md:hidden block text-sm font-medium text-accent mb-2 uppercase tracking-wider">
                        {exp.period}
                      </span>
                      <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                      <h5 className="text-lg font-medium text-foreground/80 mb-4">{exp.company}</h5>
                      <p className="text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">🎓</span>
              Education
            </h3>
            
            <div className="space-y-12">
              {portfolioData.education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="relative pl-8 md:pl-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:grid md:grid-cols-4 md:gap-6 items-start">
                    <div className="hidden md:block col-span-1 text-sm font-medium text-secondary pt-1 uppercase tracking-wider">
                      {edu.period}
                    </div>
                    <div className="md:col-span-3 relative">
                      <div className="absolute -left-10 md:-left-8 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-background z-10"></div>
                      {index !== portfolioData.education.length - 1 && (
                        <div className="absolute -left-[34px] md:-left-[26px] top-4 bottom-[-48px] w-px bg-foreground/10"></div>
                      )}
                      
                      <span className="md:hidden block text-sm font-medium text-accent mb-2 uppercase tracking-wider">
                        {edu.period}
                      </span>
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-lg text-foreground/70 mt-2">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
