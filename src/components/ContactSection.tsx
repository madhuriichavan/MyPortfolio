import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "madhuri.chavan.cmaug25@gmail.com",
      href: "mailto:madhuri.chavan.cmaug25@gmail.com",
      color: "accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/madhuri-chavan",
      href: "https://www.linkedin.com/in/madhuri-chavan-93290425b/",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/madhuriichavan",
      href: "https://github.com/madhuriichavan",
      color: "accent",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7666398041",
      href: "tel:7666398041",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm">Get In Touch</p>
          <h2 className="heading-display text-4xl md:text-5xl">
            Let's Build Something
            <br />
            <span className="text-gradient-accent">Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm open to entry-level full stack roles, and learning opportunities.
            Let's connect and create impactful software solutions!
          </p>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-md">
            <MapPin size={18} className="text-accent" />
            <span className="font-medium">Pune, India</span>
          </div>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const isAccent = link.color === "accent";

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                rel={link.label !== "Email" && link.label !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isAccent
                      ? "bg-accent group-hover:bg-accent/80"
                      : "bg-primary group-hover:bg-primary/80"
                  }`}
                >
                  <Icon size={22} className={isAccent ? "text-accent-foreground" : "text-primary-foreground"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium truncate">{link.value}</p>
                </div>
                <Send size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.a>
            );
          })}
        </motion.div>

       
      </div>
    </section>
  );
};

export default ContactSection;
