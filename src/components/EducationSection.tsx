import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm">Background</p>
          <h2 className="heading-display text-4xl md:text-5xl">
            Education & <span className="text-gradient-warm">Activities</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold flex items-center gap-3">
              <GraduationCap className="text-accent" size={28} />
              Education
            </h3>

            {/* CDAC */}
            <div className="card-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-semibold">PG-DAC – Advanced Computing</h4>
                    <p className="text-muted-foreground">Centre for Development of Advanced Computing (CDAC)</p>
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full shrink-0">
                    Currently Pursuing
                  </span>
                </div>
              </div>
            </div>

            {/* B.E. */}
            <div className="card-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-lg font-semibold">B.Tech. – Electronics and Telecommunication</h4>
                    <p className="text-muted-foreground">Vishwakarma Institute of Information Technology (VIIT), Pune</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs font-medium rounded-full shrink-0">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leadership & Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Leadership & Activities
            </h3>

            {/* IEEE */}
            <div className="card-elevated hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Users size={28} className="text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-semibold">Event Management Head</h4>
                  <p className="text-accent font-medium text-sm">IEEE Student Branch</p>
                  <p className="text-muted-foreground text-sm">
                    Led and coordinated technical and non-technical events, strengthening leadership, 
                    planning, and organizational skills.
                  </p>
                </div>
              </div>
            </div>

            {/* NSS */}
            <div className="card-elevated hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <BookOpen size={28} className="text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-semibold">NSS Volunteer</h4>
                  <p className="text-accent font-medium text-sm">National Service Scheme</p>
                  <p className="text-muted-foreground text-sm">
                    Participated in community development and social awareness activities, 
                    contributing to social responsibility and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
