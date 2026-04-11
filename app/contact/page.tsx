import Nav from "../components/Nav";
import FadeUp from "../components/FadeUp";
import styles from "./Contact.module.css";

const socials = [
  { label: "Email", value: "rmirz559@mtroyal.ca", href: "mailto:rmirz559@mtroyal.ca" },
  { label: "LinkedIn", value: "linkedin.com/in/rizwan-bmirza", href: "https://www.linkedin.com/in/rizwan-bmirza/" },
  { label: "GitHub", value: "github.com/rizwan-mirza315", href: "https://github.com/rizwan-mirza315" },
];

export default function Contact() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.container}>
          <FadeUp>
            <p className={styles.sectionLabel}>/ Contact Me</p>
            <h1 className={styles.heading}>
              Let&apos;s build<br />something great.
            </h1>
            <p className={styles.tagline}>
              I&apos;m actively looking for internships in: consulting and strategy, software engineering, or operations.
              If you&apos;re building something, I&apos;d love to be part of it!
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className={styles.grid}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <p className={styles.socialLabel}>{s.label}</p>
                  <p className={styles.socialValue}>{s.value}</p>
                  <p className={styles.socialHint}>Open →</p>
                </a>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Ready to work together?</h2>
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
          </FadeUp>
        </div>
      </main>
    </>
  );
}
