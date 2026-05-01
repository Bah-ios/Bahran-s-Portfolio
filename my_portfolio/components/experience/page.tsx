'use client';

import { invisibleValues, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./experience.module.css";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// 📚 LEARNING POINT: TypeScript Interface
// This defines the structure of each experience object
// It ensures type safety and helps with autocomplete
interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'freelance';
}

export default function Experience() {
  // 📚 LEARNING POINT: Data Structure
  // We're storing experience data in an array of objects
  // Each object represents one job/experience
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Tech Solutions Inc",
      position: "Frontend Developer",
      duration: "Jan 2023 - Present",
      location: "Remote",
      description: [
        "Developed responsive web applications using React and Next.js",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance resulting in 40% faster load times"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      type: "full-time"
    },
    {
      id: 2,
      company: "Digital Agency Pro",
      position: "Web Developer Intern",
      duration: "Jun 2022 - Dec 2022",
      location: "New York, NY",
      description: [
        "Built client websites using HTML, CSS, and JavaScript",
        "Assisted senior developers in debugging and testing applications",
        "Learned version control with Git and collaborative development"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      type: "internship"
    }
  ];

  // Intersection Observer Hook
  // This detects when the section comes into view for animations
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref}>
      <main className={styles.container}>
        
        {/* Animated Header */}
        {/* This follows the same pattern as your other sections */}
        <motion.div 
          className={styles.titleBox}
          initial={{ opacity: 0.8, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Experience</h1>
        </motion.div>

        {/* Timeline Container  */}
        <div className={styles.timeline}>
          {/* Experience items will go here */}
          {experiences.map((experience, index) => (
            <motion.div
            key={experience.id}
            className={styles.timelineItem}
            initial={{opacity: 0, x: index % 2}}
            animate={inView ? {opacity:1, x: 0} : {opacity : 1, x : index % 2 === 0 ? -50 : 50}}
            transition={{ duration : 0.6, delay : index * 0.2}}
            >
             {/* Experience card content */}
               <div className={styles.experienceCard}>
                    <div className={styles.cardHeader}>
                        <h3>{experience.position}</h3>
                        <span className={styles.jobType}>{experience.type}</span>
                    </div>
                    
                    <h4>{experience.company}</h4>
                    
                    <div className={styles.cardMeta}>
                        <p className={styles.duration}>{experience.duration}</p>
                        <p className={styles.location}>{experience.location}</p>
                    </div>
                    
                    <ul className={styles.description}>
                        {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>
                    
                    <div className={styles.technologies}>
                        {experience.technologies.map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech}</span>
                        ))}
                    </div>
                    </div>


            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
}