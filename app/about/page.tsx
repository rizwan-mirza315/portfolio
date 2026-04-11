import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import FadeUp from "../components/FadeUp";
import styles from "./About.module.css";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend & Data", items: ["Supabase", "PostgreSQL", "Python", "Excel"] },
  { category: "Tools & Platforms", items: ["Power BI", "Git", "Vercel", "Cloudflare", "Twilio"] },
  { category: "Finance", items: ["Financial Modeling", "TVM", "Inflation Modeling", "Portfolio Analysis"] },
];

const experience = [
  { org: "Bissett Consulting Organization", role: "Founding President", period: "2025–Present" },
  { org: "Under Armour", role: "Sales Associate", period: "2024–Present" },
  { org: "9Round Kickboxing Fitness", role: "Gym Operations Coordinator", period: "2022–2024" },
];

export default function About() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <FadeUp className={styles.headerSection}>
          <p className={styles.sectionLabel}>/ About Me</p>
          <h1 className={styles.heading}>
            The person<br />behind the work.
          </h1>
        </FadeUp>

        <div className={styles.grid}>
          <FadeUp className={styles.photoCol}>
            <div style={{ position: "relative" }}>
              <div className={styles.photoWrapper}>
                <Image
                  src="/rizwan-headshot.jpg"
                  alt="Rizwan Mirza"
                  fill
                  className={styles.photoImage}
                />
                <div className={styles.photoOverlay} />
              </div>
              <div className={styles.photoBadge}>
                <p className={styles.photoBadgeYear}>3rd Year</p>
                <p className={styles.photoBadgeRole}>CIS + Finance @ MRU</p>
              </div>
            </div>

            <div className={styles.card}>
              <p className={styles.cardLabel}>Education</p>
              <p className={styles.cardTitle}>Bachelor of Computer Information Systems</p>
              <p className={styles.cardSubtitle}>Minor in Finance</p>
              <p className={styles.cardMeta}>Mount Royal University · Expected 2027</p>
              <p className={styles.cardCourses}>
                Computing (Python, C++, Java) · Computer Architecture · Business Communication · Financial Accounting · Advanced Corporate Finance
              </p>
            </div>

            <div className={styles.expCard}>
              <p className={styles.cardLabel}>Experience</p>
              <div className={styles.expList}>
                {experience.map((e) => (
                  <div key={e.org} className={styles.expItem}>
                    <div className={styles.expDot} />
                    <div>
                      <p className={styles.expRole}>{e.role}</p>
                      <p className={styles.expOrg}>{e.org}</p>
                      <p className={styles.expPeriod}>{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp className={styles.bioCol} delay={0.15}>
            <div className={styles.bio}>
              <p>
                My name is Rizwan, a third year Computer Information Systems student at Mount Royal University in Calgary. I move fast and execute with purpose.
              </p>
              <p>
                I founded MRU&apos;s first consulting club and built a full stack food rescue platform because I look for gaps and act on them.
              </p>
              <p>
                Outside of work, I take initiative where I can create impact. I have helped serve nearly 10,000 meals to Calgary&apos;s homeless community, led a food drive that collected 16,500 pounds for the Calgary Food Bank, and chaired Run for Calgary with over 400 participants.
              </p>
              <p>
                I am looking to join a team where I can contribute immediately. I take ownership, operate well in ambiguity, and execute quickly with purpose.
              </p>
            </div>

            <div className={styles.skillsSection}>
              <p className={styles.skillsHeading}>Skills & Stack</p>
              {skills.map((group) => (
                <div key={group.category} className={styles.skillGroup}>
                  <p className={styles.skillGroupLabel}>{group.category}</p>
                  <div className={styles.skillPills}>
                    {group.items.map((item) => (
                      <span key={item} className={styles.skillPill}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/portfolio" className={styles.ctaBtn}>
              See My Work →
            </Link>
          </FadeUp>
        </div>
      </main>
    </>
  );
}
