import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const items = ['About', 'Projects', 'Contact'];
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>TG</div>
      <div className={styles.links}>
        {items.map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} className={styles.link}>
            {item}
          </Link>
        ))}
        <Link href="/contact" className={styles.hireBtn}>HIRE ME</Link>
      </div>
    </nav>
  );
};

export default Navbar;