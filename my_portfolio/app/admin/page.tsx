'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import styles from "@/components/contact/contact.module.css"; // Reuse Contact styles

export default function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '', 
    link: ''
  });
    // const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();


    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Project Added Successfully!");
        // Clear form
        setFormData({ title: '', description: '', tags: '', link: '' });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Network Error. Is backend running?");
    }
  };

  return (
    <main className={styles.container} style={{ paddingTop: '100px' }}>
      <Navbar />
      
      <div className={styles.titleBox}>
        <h1>Add Project</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        
        <input 
          name="title" value={formData.title} onChange={handleChange}
          type="text" placeholder="PROJECT TITLE*" className={styles.inputField} required 
        />
        
        <textarea 
          name="description" value={formData.description} onChange={handleChange}
          placeholder="DESCRIPTION*" className={`${styles.inputField} ${styles.textarea}`} required 
          style={{ minHeight: '100px' }}
        ></textarea>

        <input 
          name="tags" value={formData.tags} onChange={handleChange}
          type="text" placeholder="TAGS (comma separated: React,Node)" className={styles.inputField} 
        />

        <input 
          name="link" value={formData.link} onChange={handleChange}
          type="text" placeholder="PROJECT LINK" className={styles.inputField} 
        />

        {/* <input 
          name="linkLive" value={formData.linkLive} onChange={handleChange}
          type="text" placeholder="LIVE LINK" className={styles.inputField} 
        /> */}

        <div className={styles.submitContainer}>
          <div className={styles.verticalBtnLine}></div>
          <button type="submit" className={styles.submitBtn}>ADD PROJECT</button>
          <div className={styles.verticalBtnLine}></div>
        </div>

      </form>
    </main>
  );
}