import Navbar from "@/components/Navbar";
import { FaPencilRuler, FaCode, FaCogs } from "react-icons/fa";
/* Import the separate CSS file */
import styles from "./about.module.css"; 

export default function About() {
  return (
    <section id ="about">
      
      
      <main className={styles.container}>
        
        {/* Header Box */}
        <div className={styles.titleBox}>
          <h1>About Me</h1>
        </div>

        {/* Intro Text */}
        <p className={styles.introText}>
          Computer Science and Engineering graduate specializing in mobile application development. 
          Experienced with FlutterFlow, Firebase, Node.js, and REST APIs, and passionate about building 
          scalable, real-world solutions.
        </p>

        {/* Explore Section */}
        <div className={styles.exploreSection}>
          <div className={styles.verticalLine}></div>
          <span className={styles.exploreText}>EXPLORE</span>
          <div className={styles.verticalLine}></div>
        </div>

        {/* Decorative Divider */}
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

        {/* Services Section */}
        <div className={styles.servicesContainer}>
          
          {/* Item 1: Design */}
          <div className={styles.serviceItem}>
            <FaPencilRuler className={styles.bgIcon} />
            <h2 className={styles.serviceTitle}>DESIGN</h2>
            <p className={styles.serviceDesc}>
              Can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* Item 2: Development */}
          <div className={styles.serviceItem}>
            <FaCode className={styles.bgIcon} />
            <h2 className={styles.serviceTitle}>DEVELOPMENT</h2>
            <p className={styles.serviceDesc}>
              Can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          {/* Item 3: Maintenance (Centered) */}
          <div className={styles.serviceItemCenter}>
            <div style={{ position: 'relative', maxWidth: '350px', textAlign: 'left' }}>
                <FaCogs className={styles.bgIcon} />
                <h2 className={styles.serviceTitle}>MAINTENANCE</h2>
                <p className={styles.serviceDesc}>
                Can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the job.
                </p>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Divider */}
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

      </main>
    </section>
  );
}