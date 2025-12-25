import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Award } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <p className="text-accent font-medium tracking-wide uppercase text-sm">About Me</p>
            <h2 className="heading-display text-4xl md:text-5xl">
              Passionate Developer &<br />
              <span className="text-gradient-accent">Lifelong Learner</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a motivated Full Stack Developer and a student of <span className="text-foreground font-medium">CDAC (Advanced Computing)</span> with 
                a strong passion for building modern, scalable, and user-centric web applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I completed my <span className="text-foreground font-medium">B.Tech. in Electronics and Telecommunication Engineering</span> from 
                Vishwakarma Institute of Information Technology (VIIT), Pune, graduating in 2025.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My technical expertise spans both frontend and backend development, with hands-on experience 
                in the <span className="text-accent font-medium">MERN stack</span> and backend frameworks like <span className="text-accent font-medium">Spring Boot</span>. 
                I enjoy transforming ideas into real-world applications through clean code, secure APIs, and intuitive user interfaces.
              </p>

              {/* Qualities */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">Team Player</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award size={18} className="text-accent" />
                  </div>
                  <span className="font-medium">Leader</span>
                </div>
              </div>
            </motion.div>

            {/* Goals Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Short-term Goals */}
              <div className="card-elevated space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Target size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Short-Term Goals</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Continuously learn new technologies and frameworks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Earn relevant technical certifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    Strengthen full stack and backend development skills
                  </li>
                </ul>
              </div>

              {/* Long-term Goals */}
              <div className="card-elevated space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <TrendingUp size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Long-Term Goals</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Become a senior technical expert
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Transition into leadership or management roles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Contribute to innovative projects and explore new domains
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
