import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Users, Database, Layout } from "lucide-react";

const ProjectsSection = () => {
  const features = [
    { icon: Users, text: "Multi-role login (Admin / Instructor / Learner)" },
    { icon: Shield, text: "JWT-based authentication and authorization" },
    { icon: Database, text: "Schema normalization for optimized database design" },
    { icon: Layout, text: "Responsive UI with role-based dashboards" },
  ];

  const techStack = [
    { name: "React.js", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "JWT", category: "Security" },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm">My Work</p>
          <h2 className="heading-display text-4xl md:text-5xl">
            Featured <span className="text-gradient-accent">Project</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated overflow-hidden"
        >
          {/* Project Header */}
          <div className="p-8 border-b border-border">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">⬡</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">MERN LMS Platform</h3>
                    <p className="text-muted-foreground">Learning Management System</p>
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/madhuriichavan/SkillSphere---Project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center gap-2 text-sm"
              >
                <Github size={18} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-8 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comprehensive Learning Management System developed using MERN technology, 
              supporting multi-role authentication and secure access control. This platform 
              enables seamless learning and course management through role-based access for 
              Admins, Instructors, and Learners, ensuring secure operations and efficient data handling.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20"
                  >
                    <span className="text-primary">{tech.name}</span>
                    <span className="text-muted-foreground ml-2 text-xs">({tech.category})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
