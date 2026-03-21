import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import styles from "./About.module.css";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend & Data", items: ["Supabase", "PostgreSQL", "Python", "Excel"] },
  { category: "Tools & Platforms", items: ["Power BI", "Git", "Vercel", "Cloudflare", "Twilio"] },
  { category: "Finance", items: ["Financial Modeling", "TVM", "Inflation Modeling", "Portfolio Analysis"] },
];

const experience = [
  {
    org: "Bissett Consulting Organization",
    role: "Founding President",
    period: "Sept 2025–Present",
    color: "#a855f7",
  },
  {
    org: "Under Armour",
    role: "Sales Associate",
    period: "Oct 2024–Present",
    color: "#f472b6",
  },
  {
    org: "9Round Kickboxing Fitness",
    role: "Lead Fitness Trainer",
    period: "Sept 2022–Feb 2024",
    color: "#06b6d4",
  },
];

export default function About() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.headerSection}>
          <p className={styles.sectionLabel} style={{ color: "#a855f7" }}>/ About Me</p>
          <h1 className={styles.heading}>
            The person behind
            <br />
            <span className={styles.gradientText}>
              the work.
            </span>
          </h1>
        </div>

        <div className={styles.grid}>
          {/* Photo + Education */}
          <div className={styles.photoCol}>
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
              <div className={styles.photoBadge}
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(10px)" }}
              >
                <p className={styles.photoBadgeYear}>3rd Year</p>
                <p className={styles.photoBadgeRole}>CIS + Finance @ MRU</p>
              </div>
            </div>

            {/* Education card */}
            <div className={styles.card}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className={styles.cardLabel}>Education</p>
              <p className={styles.cardTitle}>Bachelor of Computer Information Systems</p>
              <p className={styles.cardSubtitle}>Minor in Finance</p>
              <p className={styles.cardMeta}>Mount Royal University · Expected 2027</p>
              <p className={styles.cardCourses}>
                Computing (Python, C++, Java) · Computer Architecture · Business Communication · Financial Accounting · Advanced Corporate Finance
              </p>
            </div>

            {/* Work experience */}
            <div className={styles.expCard}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className={styles.cardLabel}>Experience</p>
              <div className={styles.expList}>
                {experience.map((e) => (
                  <div key={e.org} className={styles.expItem}>
                    <div className={styles.expDot} style={{ background: e.color }} />
                    <div>
                      <p className={styles.expRole}>{e.role}</p>
                      <p className={styles.expOrg} style={{ color: e.color }}>{e.org}</p>
                      <p className={styles.expPeriod}>{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio + Skills */}
          <div className={styles.bioCol}>
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

            {/* Skills */}
            <div className={styles.skillsSection}>
              <p className={styles.skillsHeading}>Skills & Stack</p>
              {skills.map((group) => (
                <div key={group.category} className={styles.skillGroup}>
                  <p className={styles.skillGroupLabel}>{group.category}</p>
                  <div className={styles.skillPills}>
                    {group.items.map((item) => (
                      <span key={item} className={styles.skillPill}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/portfolio" className={styles.ctaBtn}>
              See My Work →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
