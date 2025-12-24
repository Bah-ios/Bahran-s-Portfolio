import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import dbConnect from '@/lib/mongodb';
import { Content } from '@/lib/models';
import styles from './page.module.css';


// Component Imports
import About from '../components/about/page';
import Skills from '../components/skills/page';
import Contact from '../components/contact/page';
import Projects from '../components/projects/page';
import Footer from '@/components/Footer';

async function getFooterData() {
  await dbConnect();
  let data = await Content.findOne({ section: 'footer' });
  return data || { title: 'Welcome', body: 'Loading data...' };
}

export default async function Home() {
  const footerData = await getFooterData();

  

  

  return (
    <main className={styles.splitBackground}>
      <Navbar />
      
      {/* ==================================================
          1. MOBILE HERO SECTION (Only visible on Mobile)
      ================================================== */}
      <div className={styles.mobileHero}>
        <div className={styles.mobileBgImage}>
          <Image 
            src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mobile Background"
            fill
            priority
          />
        </div>

        <p className={styles.mobileIntro}>my name is Bahran</p>
        <h1 className={styles.mobileTitle}>I’M A DEVELOPER</h1>
        
        <div className={styles.mobileDivider}>
            <div className={styles.mobileLine}></div>
            <span style={{ fontWeight: 900 }}>\\ //</span>
            <div className={styles.mobileLine}></div>
        </div>

        <div className={styles.socialIcons} style={{ color: 'white', marginTop: '20px' }}>
          <FaAt />
          <FaGithub />
          <FaLinkedinIn />
        </div>
      </div>

      {/* ==================================================
          2. DESKTOP HERO SECTION (Your Exact Original Code)
          Visible on Desktop, Hidden on Mobile via CSS
      ================================================== */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.lead}>Hi, I am</p>
          <h1 className={styles.title}>Bahran</h1>
          <p className={styles.sub}>Full Stack Developer</p>
          <div className={styles.socialIcons}>
            <FaAt />
            <FaGithub />
            <FaLinkedinIn />
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.portraitWrap}>
            <Image
              src="/file.svg"
              alt="Profile"
              width={360}
              height={360}
              priority
            />
          </div>
        </div>
      </div>

      {/* ==================================================
          3. REST OF THE PAGE
      ================================================== */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  );
}