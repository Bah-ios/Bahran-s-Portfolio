'use client'; // Required for fetch and state

import { useState, useEffect } from 'react';
import styles from "./projects.module.css";
import { FaImage } from "react-icons/fa";
import { invisibleValues, motion } from "framer-motion"
import { useInView }  from "react-intersection-observer"
export default function Projects() {
  // 1. STATE: Store the list of projects
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. EFFECT: Run this once when page loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Call your Node Server on Port 5000
        const res = await fetch('http://localhost:5000/api/projects');
        const data = await res.json();
        
        setProjects(data); // Save data to state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  // 3. SCROLL DETECTION: Trigger animations when section comes into view
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });


  return (
    <section id="projects">
      
      <main className={styles.container} ref={ref}>
        
        <motion.div 
        className={styles.titleBox}
        initial={{ opacity : 0.8, scale : 0.8 }}
        animate= {inView ? { opacity : 1, scale : 1} : { opacity: 0, scale: 0.8 }}
        transition={{duration : 0.6 }}
        >
          <h1>Projects</h1>
        </motion.div>

        <motion.p 
        className={styles.description}
        initial={{opacity : 0, scale : 0.8}}
        animate = {inView? {opacity : 1, scale :1} : {opacity : 0 , scale : 0.8 }}
        transition={{duration : 0.6, delay : 0.2}}
        >
          Here are a few projects I have worked on.  
        </motion.p>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

        {/* LOADING STATE */}
        {loading && <p style={{fontWeight:'bold'}}>Loading Projects from Backend...</p>}

        {/* EMPTY STATE */}
        {!loading && projects.length === 0 && (
          <p>No projects found. Add some in MongoDB Compass!</p>
        )}

        {/* PROJECTS GRID */}
        <div className={styles.grid}>
          {projects.map((proj: any, index : number) => (
            // Use _id because MongoDB automatically creates it
            <motion.div 
            key={proj._id} 
            className={styles.card}
            initial={{ opacity : 0 , y: 50, scale : 0.9 }} 
            animate= {inView ? { opacity : 1, y:0, scale : 1 } : { opacity : 0, y : 50, scale : 0.9}}
            transition={{
              duration : 0.6,
              delay : 0.4 + (index* 0.1)  // Staggered effect
            }} 
            >
              
              <div className={styles.imagePlaceholder}>
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} />
                ) : (
                  <FaImage style={{ opacity: 0.2 }} />
                )}
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.projectTitle}>{proj.title}</h2>
                <p className={styles.projectDesc}>{proj.description}</p>
                
                <div className={styles.tags}>
                  {/* Ensure tags exist before mapping to avoid crashes */}
                  {proj.tags && proj.tags.map((tag: string, index: number) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div className={styles.links}>
                  <a href={proj.link || '#projects'} target="_blank" rel="noopener noreferrer" className={styles.linkBtnContainer}>
                    <div className={styles.verticalLineBtn}></div>
                    <span className={styles.linkText}>LIVE</span>
                  </a>

                  <a href={proj.gitLink || '#projects'} target="_blank" rel="noopener noreferrer" className={styles.linkBtnContainer}>
                    <div className={styles.verticalLineBtn}></div>
                    <span className={styles.linkText}>CODE</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.divider} style={{ marginTop: '60px' }}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

      </main>
    </section>
  );
}