'use client'; // Required for fetch and state

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import styles from "./projects.module.css";
import { FaImage } from "react-icons/fa";

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

  return (
    <section id="projects">
      
      
      <main className={styles.container}>
        
        <div className={styles.titleBox}>
          <h1>Projects</h1>
        </div>

        <p className={styles.description}>
          Here are a few projects I have worked on. 
          These are fetched dynamically from my MongoDB database.
        </p>

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
          {projects.map((proj: any) => (
            // Use _id because MongoDB automatically creates it
            <div key={proj._id} className={styles.card}>
              
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
                  <a href={proj.linkCode || '#'} target="_blank" rel="noopener noreferrer" className={styles.linkBtnContainer}>
                    <div className={styles.verticalLineBtn}></div>
                    <span className={styles.linkText}>CODE</span>
                  </a>

                  <a href={proj.linkLive || '#'} target="_blank" rel="noopener noreferrer" className={styles.linkBtnContainer}>
                    <div className={styles.verticalLineBtn}></div>
                    <span className={styles.linkText}>LIVE</span>
                  </a>
                </div>

              </div>
            </div>
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