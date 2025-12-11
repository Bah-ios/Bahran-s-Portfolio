import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaAt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import dbConnect from '@/lib/mongodb';
import { Content } from '@/lib/models';
import styles from './page.module.css';

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

        {/* Right Image - contained in portrait-wrap so it doesn't overlay other UI */}
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

      <div className={styles.footerBand}>
        <h2>{footerData.title}</h2>
        <p>{footerData.body}</p>
      </div>
    </main>
  );
}