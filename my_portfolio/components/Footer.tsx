'use client';

import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaChevronUp } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      
      {/* Back to Top Button */}
      <div className={styles.backToTop} onClick={scrollToTop}>
        <div className={styles.verticalLine}></div>
        <div className={styles.topText}>
            <FaChevronUp style={{ marginBottom: '2px' }} /> BACK TO TOP
        </div>
        <div className={styles.verticalLine}></div>
      </div>

      {/* Social Icons */}
      <div className={styles.socials}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className={styles.icon} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.icon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
        </a>
      </div>

      {/* Copyright */}
      <p className={styles.copyright}>
        @2025 <span className={styles.bold}>Bahran</span> All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;