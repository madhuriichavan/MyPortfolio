import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Heart } from "lucide-react";

const skillsData = {
  programming: {
    icon: Code2,
    title: "Programming Languages",
    color: "accent",
    skills: ["HTML", "CSS", "JavaScript", "C++", "Java","MS.NET"],
  },
  backend: {
    icon: Server,
    title: "Backend Technologies",
    color: "primary",
    skills: ["Node.js", "Express.js", "Spring Boot",".NET Core","JDBC","Spring Boot", "Hibernate"],
  },
  database: {
    icon: Database,
    title: "Databases",
    color: "accent",
    skills: ["MySQL", "MongoDB"],
  },
  tools: {
    icon: Wrench,
    title: "Tools & IDEs",
    color: "primary",
    skills: ["Postman", "Eclipse", "Spring Tool Suite (STS)", "Visual Studio Code", "Visual Studio"],
  },
  soft: {
    icon: Heart,
    title: "Soft Skills",
    color: "accent",
    skills: ["Communication", "Teamwork", "Event Management", "Leadership"],
  },
};

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm">What I Know</p>
          <h2 className="heading-display text-4xl md:text-5xl">
            Skills & <span className="text-gradient-warm">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skillsData).map(([key, category]) => {
            const Icon = category.icon;
            const isAccent = category.color === "accent";
            
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                className="card-elevated hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isAccent ? "bg-accent" : "bg-primary"
                      }`}
                    >
                      <Icon size={24} className={isAccent ? "text-accent-foreground" : "text-primary-foreground"} />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
