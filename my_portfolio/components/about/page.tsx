import Navbar from "@/components/Navbar";
import { FaPencilRuler, FaCode, FaCogs } from "react-icons/fa";
/* Import the separate CSS file */
import styles from "./about.module.css"; 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
    // 3. SCROLL DETECTION: Trigger animations when section comes into view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id ="about">
      
      
      <main className={styles.container} ref={ref}>
        
        {/* Header Box */}
        
        <motion.div 
        className={styles.titleBox}
        initial={{ opacity : 0.8, scale : 0.8 }}
        animate= {inView ? { opacity : 1, scale : 1} : { opacity: 0, scale: 0.8 }}
        transition={{duration : 0.6 }}
        >
          <h1>About Me</h1>
        </motion.div>

        {/* Intro Text */}
        
        <motion.p 
          className={styles.introText}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Computer Science and Engineering graduate specializing in mobile application development. 
          Experienced with FlutterFlow, Firebase, Node.js, and REST APIs, and passionate about building 
          scalable, real-world solutions.
        </motion.p>


        {/* Explore Section */}
        <motion.div 
          className={styles.exploreSection}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.verticalLine}></div>
          <span className={styles.exploreText}>EXPLORE</span>
          <div className={styles.verticalLine}></div>
        </motion.div>


        {/* Decorative Divider */}
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

        {/* Services Section */}
<motion.div 
  className={styles.servicesContainer}
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  
  {/* Item 1: Design */}
  <motion.div 
    className={styles.serviceItem}
    initial={{ opacity: 0, x: -100, rotateY: -45 }}
    animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -45 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    whileHover={{ 
      scale: 1.05, 
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }}
  >
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <FaPencilRuler className={styles.bgIcon} />
    </motion.div>
    <motion.h2 
      className={styles.serviceTitle}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      DESIGN
    </motion.h2>
    <motion.p 
      className={styles.serviceDesc}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      Can design the site based on your needs and suggestions. I can
      also design the site from scratch and consult you during the job.
    </motion.p>
  </motion.div>

  {/* Item 2: Development */}
  <motion.div 
    className={styles.serviceItem}
    initial={{ opacity: 0, y: 100, scale: 0.8 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
    transition={{ duration: 0.8, delay: 1.0 }}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }}
  >
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <FaCode className={styles.bgIcon} />
    </motion.div>
    <motion.h2 
      className={styles.serviceTitle}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.3 }}
    >
      DEVELOPMENT
    </motion.h2>
    <motion.p 
      className={styles.serviceDesc}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    >
      Can design the site based on your needs and suggestions. I can
      also design the site from scratch and consult you during the job.
    </motion.p>
  </motion.div>

  {/* Item 3: Maintenance (Centered) */}
  <motion.div 
    className={styles.serviceItemCenter}
    initial={{ opacity: 0, x: 100, rotateY: 45 }}
    animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 45 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    whileHover={{ 
      scale: 1.05, 
      rotateY: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }}
  >
    <div style={{ position: 'relative', maxWidth: '350px', textAlign: 'left' }}>
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <FaCogs className={styles.bgIcon} />
      </motion.div>
      <motion.h2 
        className={styles.serviceTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        MAINTENANCE
      </motion.h2>
      <motion.p 
        className={styles.serviceDesc}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        Can design the site based on your needs and suggestions. I can
        also design the site from scratch and consult you during the job.
      </motion.p>
    </div>
  </motion.div>

</motion.div>


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