'use client'; 

import { useState } from 'react';
import styles from "./contact.module.css"; // Make sure this path is correct!

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

  return (
    <section id="contact">
      <main className={styles.container}>
        
        <div className={styles.titleBox}>
          <h1>Contact</h1>
        </div>

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
        <form className={styles.form} onSubmit={handleSubmit}>
          
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text" 
            placeholder="ENTER YOUR NAME*" 
            className={styles.inputField} 
            required
          />
          
          <input 
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email" 
            placeholder="ENTER YOUR EMAIL*" 
            className={styles.inputField} 
            required
          />
          
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel" 
            placeholder="PHONE NUMBER" 
            className={styles.inputField} 
          />
          
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE*" 
            className={`${styles.inputField} ${styles.textarea}`} 
            required
          ></textarea>

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