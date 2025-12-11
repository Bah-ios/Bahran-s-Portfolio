import Navbar from "@/components/Navbar";
import styles from "./skills.module.css";
// Importing icons from Simple Icons (si) package included in react-icons
import { 
  SiHtml5, SiCss3, SiSass, SiJavascript, 
  SiReact, SiBootstrap, SiGit, SiFigma,
  SiNodedotjs, SiMysql, SiMongodb, SiTypescript,
  SiCplusplus, SiC
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      
      
      <main className={styles.container}>
        
        {/* Header Box */}
        <div className={styles.titleBox}>
          <h1>Skills</h1>
        </div>

        {/* --- USING NOW --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>USING NOW:</h2>
          <div className={styles.grid}>
            
            <SkillItem icon={<SiHtml5 color="#E34F26" />} name="HTML5" />
            <SkillItem icon={<SiCss3 color="#1572B6" />} name="CSS3" />
            <SkillItem icon={<SiSass color="#CC6699" />} name="SASS" />
            <SkillItem icon={<SiJavascript color="#F7DF1E" />} name="JAVASCRIPT" />
            
            <SkillItem icon={<SiReact color="#61DAFB" />} name="REACT" />
            <SkillItem icon={<SiBootstrap color="#7952B3" />} name="BOOTSTRAP" />
            <SkillItem icon={<SiGit color="#F05032" />} name="GIT" />
            <SkillItem icon={<SiFigma color="#F24E1E" />} name="FIGMA" />
            
          </div>
        </div>

        {/* --- LEARNING --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>LEARNING:</h2>
          <div className={styles.grid}>
            
            <SkillItem icon={<SiNodedotjs color="#339933" />} name="NODEJS" />
            <SkillItem icon={<SiMysql color="#4479A1" />} name="MYSQL" />
            <SkillItem icon={<SiMongodb color="#47A248" />} name="MONGODB" />
            <SkillItem icon={<SiTypescript color="#3178C6" />} name="TYPESCRIPT" />
            
          </div>
        </div>

        {/* --- OTHER SKILLS --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>OTHER SKILLS:</h2>
          <div className={styles.grid}>
            
            {/* English Flag Placeholder */}
            <div className={styles.skillItem}>
              <div className={styles.flagCircle}>🇬🇧</div>
              <span className={styles.skillName}>ANGIELSKI</span>
              <span className={styles.langLevel}>C1/C2</span>
            </div>

            {/* Spanish Flag Placeholder */}
            <div className={styles.skillItem}>
              <div className={styles.flagCircle}>🇪🇸</div>
              <span className={styles.skillName}>HISZPAŃSKI</span>
              <span className={styles.langLevel}>B1/B2</span>
            </div>

            <SkillItem icon={<SiCplusplus color="#00599C" />} name="C++" />
            <SkillItem icon={<SiC color="#A8B9CC" />} name="C" />
            
          </div>
        </div>

      </main>
    </>
  );
}

/* Helper Component to reduce code repetition */
function SkillItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <span className={styles.skillName}>{name}</span>
    </div>
  );
}