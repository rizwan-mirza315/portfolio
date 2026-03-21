import Nav from "../components/Nav";
import styles from "./Contact.module.css";

const socials = [
  { label: "Email", value: "rmirz559@mtroyal.ca", href: "mailto:rmirz559@mtroyal.ca", color: "#a855f7" },
  { label: "LinkedIn", value: "linkedin.com/in/rizwan-bmirza", href: "https://www.linkedin.com/in/rizwan-bmirza/", color: "#06b6d4" },
  { label: "GitHub", value: "github.com/rizwan-mirza315", href: "https://github.com/rizwan-mirza315", color: "#f472b6" },
];

export default function Contact() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>/ Contact Me</p>
          <h1 className={styles.heading}>
            Let&apos;s build
            <br />
            <span className={styles.gradientText}>
              something great.
            </span>
          </h1>
          <p className={styles.tagline}>
            I&apos;m actively looking for startup internships in: consulting and strategy, software engineering, or operations.
            If you&apos;re building something, I&apos;d love to be part of it!
          </p>

          <div className={styles.grid}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={styles.socialCard}
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}30` }}
              >
                <p className={styles.socialLabel} style={{ color: s.color }}>{s.label}</p>
                <p className={styles.socialValue}>{s.value}</p>
                <p className={styles.socialHint}>Click to open →</p>
              </a>
            ))}
          </div>

          <div className={styles.ctaBox}
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            <h2 className={styles.ctaTitle}>
              Ready to work together?
            </h2>
            <p className={styles.ctaText}>
              I respond fast. Drop me an email and let&apos;s set up a call.
            </p>
            <a
              href="mailto:rmirz559@mtroyal.ca"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Say Hello →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
