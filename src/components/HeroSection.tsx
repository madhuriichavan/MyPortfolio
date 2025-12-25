import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden section-padding flex items-center">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-medium tracking-wide"
            >
              Hey There,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="heading-display text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              I'm <span className="brush-stroke">Madhuri</span>
              <br />
              Chavan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Aspiring Full Stack Developer passionate about building modern,
              scalable{" "}
              <span className="text-accent font-medium">web applications</span>{" "}
              .
            </motion.p>

            

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="https://github.com/madhuriichavan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/madhuri-chavan-93290425b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side   */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <motion.img
              src="https://i.postimg.cc/zDFf76qk/img.png"
              alt="Decorative Shape"
              className="w-72 md:w-96 lg:w-[420px] object-contain drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute -z-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
