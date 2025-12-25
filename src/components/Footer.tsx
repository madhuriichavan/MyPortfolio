import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold mb-2">
              <span className="text-primary">M</span>adhuri Chavan
            </p>
            <p className="text-sm opacity-70">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/madhuriichavan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhuri-chavan-93290425b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:madhuri.chavan.cmaug25@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Made With */}
          <p className="text-sm opacity-70 flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
