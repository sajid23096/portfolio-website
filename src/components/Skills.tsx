import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillCategory = ({ title, items, delay }: { title: string, items: string[], delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass p-8 rounded-3xl"
    >
      <h3 className="text-xl font-bold mb-6 text-foreground/90">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-2 bg-foreground/5 hover:bg-accent/10 hover:text-accent transition-colors rounded-xl text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            className="text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A comprehensive overview of my technical skills and the tools I use to build robust digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" items={skills.frontend} delay={0.1} />
          <SkillCategory title="Backend & Database" items={skills.backend} delay={0.2} />
          <SkillCategory title="Tools & Platforms" items={skills.tools} delay={0.3} />
          <SkillCategory title="Soft Skills" items={skills.softSkills} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
