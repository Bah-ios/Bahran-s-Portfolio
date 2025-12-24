import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const items = ['About','Skills', 'Projects', 'Contact'];
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>BS</div>
      <div className={styles.links}>
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className={styles.link}>
            {item}
          </a>
        ))}
        <a href="#contact" className={styles.hireBtn}>HIRE ME</a>
      </div>
    </nav>
  );
};

export default Navbar;