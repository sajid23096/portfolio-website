import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* 3D-like image card effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <div className="absolute inset-0 border border-foreground/10 rounded-3xl -translate-x-4 -translate-y-4 -z-10 bg-background/50"></div>
              <div className="w-full h-full rounded-3xl overflow-hidden glass p-2 shadow-xl">
                <div className="w-full h-full bg-secondary/20 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <img
                    src="/SAJID(me).jpg"
                    alt="Profile"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="h-px bg-foreground/20 flex-grow"></div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {portfolioData.personalInfo.bio}
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">fresher</h3>
                <p className="text-secondary">Years Experience</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">8+</h3>
                <p className="text-secondary">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
