'use client'; // Needed for form handling if you add logic later

import Navbar from "@/components/Navbar";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id ="contact">
      
      
      <main className={styles.container}>
        
        {/* Header Title */}
        <div className={styles.titleBox}>
          <h1>Contact</h1>
        </div>

        {/* Intro Text */}
        <p className={styles.description}>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. 
          Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
        </p>

        {/* Decorative Divider */}
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <div className={styles.slashes}>\\ //</div>
          <div className={styles.line}></div>
        </div>

        {/* Form Section */}
        <form className={styles.form}>
          
          <input 
            type="text" 
            placeholder="ENTER YOUR NAME*" 
            className={styles.inputField} 
            required
          />
          
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL*" 
            className={styles.inputField} 
            required
          />
          
          <input 
            type="tel" 
            placeholder="PHONE NUMBER" 
            className={styles.inputField} 
          />
          
          <textarea 
            placeholder="YOUR MESSAGE*" 
            className={`${styles.inputField} ${styles.textarea}`} 
            required
          ></textarea>

          {/* Submit Button with Side Lines */}
          <div className={styles.submitContainer}>
            <div className={styles.verticalBtnLine}></div>
            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
            <div className={styles.verticalBtnLine}></div>
          </div>

        </form>

      </main>
    </section>
  );
}