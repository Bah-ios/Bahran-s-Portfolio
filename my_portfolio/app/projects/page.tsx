'use client';

import Navbar from "@/components/Navbar";
import styles from "./projects.module.css";
import { FaImage } from "react-icons/fa";

export default function Projects() {
  // Sample Project Data
  const projects = [
    {
      title: "E-Commerce",
      desc: "A full shopping platform with cart, payments, and admin dashboard.",
      tags: ["React", "Node", "MongoDB"],
      image: "" // Empty string acts as placeholder
    },
    {
      title: "Portfolio V1",
      desc: "My previous portfolio site built with pure HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: ""
    },
    {
      title: "Task Manager",
      desc: "A productivity app to organize daily tasks using drag and drop.",
      tags: ["Next.js", "Firebase", "Tailwind"],
      image: ""
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecasting using OpenWeatherMap API.",
      tags: ["React", "API", "CSS Modules"],
      image: ""
    }
  ];

  return (
    <>
      <main className={styles.container}>
        
        {/* Header Title */}
        <div className={styles.titleBox}>
          <h1>Projects</h1>
        </div>

        {/* Intro Text */}
        <p className={styles.description}>
          Here are a few projects I have worked on recently. 
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.
        </p>

        {/* Top Divider */}
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((proj, index) => (
            <div key={index} className={styles.card}>
              
              {/* Image Area */}
              <div className={styles.imagePlaceholder}>
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} />
                ) : (
                  <FaImage style={{ opacity: 0.2 }} />
                )}
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h2 className={styles.projectTitle}>{proj.title}</h2>
                <p className={styles.projectDesc}>{proj.desc}</p>
                
                {/* Tech Tags */}
                <div className={styles.tags}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                {/* Links (Vertical Line Style) */}
                <div className={styles.links}>
                  <a href="#" className={styles.linkBtnContainer}>
                    <div className={styles.verticalLineBtn}></div>
                    <span className={styles.linkText}>CODE</span>
                  </a>

                  <a href="#" className={styles.linkBtnContainer}>
                    <div className={styles.verticalLineBtn}></div>
                    <span className={styles.linkText}>LIVE</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className={styles.divider} style={{ marginTop: '60px' }}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

      </main>
    </>
  );
}