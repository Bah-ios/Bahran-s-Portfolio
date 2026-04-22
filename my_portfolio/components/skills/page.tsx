"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./skills.module.css";
// Importing icons from Simple Icons (si) package included in react-icons
import { 
  SiHtml5, SiCss3, SiJavascript, SiNextdotjs,
  SiReact, SiGit, SiFigma, SiPython, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiTypescript,
  SiPostgresql
} from "react-icons/si";

export default function Skills() {
  // Hook to detect when the skills section comes into view
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation happens only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section id="skills" ref={ref}>
      <main className={styles.container}>
        
        {/* Animated Header Box */}
        <motion.div 
          className={styles.titleBox}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Skills</h1>
        </motion.div>

        {/* --- USING NOW --- */}
        <SkillSection 
          title="USING NOW:" 
          skills={[
            { icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
            { icon: <SiCss3 color="#1572B6" />, name: "CSS3" },
            { icon: <SiJavascript color="#F7DF1E" />, name: "JAVASCRIPT" },
            { icon: <SiReact color="#61DAFB" />, name: "REACT" },
            { icon: <SiNextdotjs color="#000000" />, name: "NEXT.JS" },
            { icon: <SiNodedotjs color="#339933" />, name: "NODEJS" },
            { icon: <SiMongodb color="#47A248" />, name: "MONGODB" },
            { icon: <SiGit color="#F05032" />, name: "GIT" },
            { icon: <SiFigma color="#F24E1E" />, name: "FIGMA" },
          ]}
          inView={inView}
          delay={0.2}
        />

        {/* --- LEARNING --- */}
        <SkillSection 
          title="LEARNING:" 
          skills={[
            { icon: <SiTailwindcss color="#38B2AC" />, name: "TAILWIND CSS" },
            { icon: <SiPostgresql color="#4479A1" />, name: "PostgreSQL" },
            { icon: <SiTypescript color="#3178C6" />, name: "TYPESCRIPT" },
          ]}
          inView={inView}
          delay={0.4}
        />

        {/* --- OTHER SKILLS --- */}
        <SkillSection 
          title="OTHER SKILLS:" 
          skills={[
            { icon: <SiPython color="#3776AB" />, name: "PYTHON" },
          ]}
          inView={inView}
          delay={0.6}
        />

      </main>
    </section>
  );
}

/* Animated Skill Section Component */
function SkillSection({ 
  title, 
  skills, 
  inView, 
  delay 
}: { 
  title: string; 
  skills: Array<{ icon: React.ReactNode; name: string }>; 
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div 
      className={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <SkillItem 
            key={skill.name}
            icon={skill.icon} 
            name={skill.name}
            index={index}
            inView={inView}
            sectionDelay={delay}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* Animated Skill Item Component */
function SkillItem({ 
  icon, 
  name, 
  index, 
  inView, 
  sectionDelay 
}: { 
  icon: React.ReactNode; 
  name: string; 
  index: number;
  inView: boolean;
  sectionDelay: number;
}) {
  return (
    <motion.div 
      className={styles.skillItem}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: sectionDelay + (index * 0.1) // Staggered animation
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <span className={styles.skillName}>{name}</span>
    </motion.div>
  );
}
