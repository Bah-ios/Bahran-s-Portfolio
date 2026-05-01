'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./experience.module.css";
import { useEffect, useState } from "react";


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
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExperiences = async() =>{
        try {

            const res = await fetch('http://localhost:5000/api/experiences');
            const data = await res.json();

            setExperiences(data);
            setLoading(false);
        }
        catch( error){
            console.error("Failed Loading Experiences:", error);
            setLoading(false);
        }
    }
    fetchExperiences();
  }, []);
  

  // Intersection Observer Hook
  // This detects when the section comes into view for animations
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience">
      <main className={styles.container} ref={ref}>
        
        {/* Animated Header */}
        <motion.div 
          className={styles.titleBox}
          initial={{ opacity: 0.8, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Experience</h1>
        </motion.div>

         {/* LOADING STATE */}
        {loading && <p style={{fontWeight:'bold'}}>Loading Experiences from Backend...</p>}

        {/* EMPTY STATE */}
        {!loading && experiences.length === 0 && (
          <p>No Experiences found. Add some in MongoDB Compass!</p>
        )}

        {/* Timeline Container  */}

        <div className={styles.timeline}>
          {/* Experience items will go here */}
          {experiences.map((experience : ExperienceItem, index) => (
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