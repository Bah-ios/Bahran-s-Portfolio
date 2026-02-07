'use client';

import { useState } from 'react';
import styles from "@/components/contact/contact.module.css"; // Reuse Contact styles

export default function Admin() {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    tags: '', 
    link: '',
    gitLink: ''
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
        setFormData({ image: '', title: '', description: '', tags: '', link: '', gitLink: '' });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Network Error. Is backend running?");
    }
  };

  return (
    <main className={styles.container} style={{ paddingTop: '100px' }}>
      
      
      <div className={styles.titleBox}>
        <h1>Add Project</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        
        <input
         name = "image" value={formData.image} onChange={handleChange}
         type="text" 
         placeholder="IMAGE URL*" 
         className={styles.inputField} required
        />
         
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
          type="text" placeholder="TAGS (comma separated: React,Node)" className={styles.inputField} required
        />

        <input 
          name="link" value={formData.link} onChange={handleChange}
          type="text" placeholder="PROJECT LINK" className={styles.inputField} required
        />
        
        <input 
          name="gitLink" value={formData.gitLink} onChange={handleChange}
          type="text" placeholder="GIT REPO LINK" className={styles.inputField} required
        />

        <div className={styles.submitContainer}>
          <div className={styles.verticalBtnLine}></div>
          <button type="submit" className={styles.submitBtn}>ADD PROJECT</button>
          <div className={styles.verticalBtnLine}></div>
        </div>

      </form>
    </main>
  );
}