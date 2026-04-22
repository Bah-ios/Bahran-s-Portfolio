'use client'; 

import { useState } from 'react';
import styles from "./contact.module.css"; // Make sure this path is correct!
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    // 1. STOP THE RELOAD
    e.preventDefault(); 
    
    // 2. DEBUGGING: This alert proves the code is running
    alert("I stopped the reload! sending data now...");

    try {
      // 3. SEND TO PORT 5000 (Backend)
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Success! Check your MongoDB.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Backend Error: " + data.message);
      }
    } catch (error) {
      alert("Network Error. Is the backend server running on Port 5000?");
      console.error(error);
    }
  };
  //  SCROLL DETECTION: Trigger animations when section comes into view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  return (
    <section id="contact">
      <main className={styles.container} ref={ref}>
        
        <motion.div 
        className={styles.titleBox}
        initial={{ opacity : 0.8, scale : 0.8 }}
        animate= {inView ? { opacity : 1, scale : 1} : { opacity: 0, scale: 0.8 }}
        transition={{duration : 0.6 }}
        >
          <h1>Contact</h1>
        </motion.div>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

        {/* 
            CRITICAL CHECK: 
            Does this tag say onSubmit={handleSubmit}? 
            If not, the page will reload.
        */}
        <motion.form 
          className={styles.form} 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          
          <motion.input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text" 
            placeholder="ENTER YOUR NAME*" 
            className={styles.inputField} 
            required
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          
          <motion.input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email" 
            placeholder="ENTER YOUR EMAIL*" 
            className={styles.inputField} 
            required
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          
          <motion.input 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel" 
            placeholder="PHONE NUMBER" 
            className={styles.inputField}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          
          <motion.textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE*" 
            className={`${styles.inputField} ${styles.textarea}`} 
            required
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          <motion.div 
            className={styles.submitContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className={styles.verticalBtnLine}></div>
            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
            <div className={styles.verticalBtnLine}></div>
          </motion.div>

        </motion.form>


      </main>
    </section>
  );
}