"use client"
import Link from 'next/link';
import styles from './Navbar.module.css';
import { motion } from "framer-motion";
const Navbar = () => {
  const items = ['About','Skills', 'Projects', 'Contact'];
  return (
    <motion.nav
     className={styles.navbar}
     initial= {{ y: -100, opacity : 0}}
     animate= {{ y: 0, opacity : 1}}
     transition={{ duration : 0.8, ease: "easeOut"}}
     >
      <motion.div className={styles.brand}
      initial={{ scale: 0, rotate:-180 }}
      animate={{ scale: 1, rotate: 0}}
      transition={{ duration: 0.9, delay: 0.2}}
      whileHover={{scale: 1.1, rotate: 5}}

      >BS</motion.div>
      <div className={styles.links}>
        {items.map((item, index) => (
          <motion.a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          className={styles.link}
          initial={{ y: -20, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{ delay: 0.5 + ( index * 0.1)}}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
        <a href="#contact" className={styles.hireBtn}>HIRE ME</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;