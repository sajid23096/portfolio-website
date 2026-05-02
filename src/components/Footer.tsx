import { portfolioData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-foreground/10 py-8 relative z-10 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href={portfolioData.personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href={portfolioData.personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <a href={portfolioData.personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="text-secondary hover:text-foreground transition-colors text-sm font-medium">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
