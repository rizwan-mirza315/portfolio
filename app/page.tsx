"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import ScrambleText from "./components/ScrambleText";
import styles from "./Home.module.css";

const featured = [
  {
    id: "faith-feeds",
    category: "Full-Stack Product",
    name: "Faith Feeds",
    desc: "Food redistribution platform connecting faith organizations with local charities in real time.",
    metric: "100+",
    metricLabel: "Meals Donated",
    stack: ["React", "Supabase", "Twilio", "Vercel"],
    href: "https://faithfeeds.org",
    cta: "Visit Site",
    external: true,
    logo: "/faith-feeds-logo.png",
  },
  {
    id: "bco",
    category: "Consulting Organization",
    name: "Bissett Consulting Org",
    desc: "MRU's first consulting club — real SME engagements, 50+ attendee summits, and campus-wide competitions.",
    metric: "23%",
    metricLabel: "Revenue Lift for Client",
    stack: ["HTML", "CSS", "Vercel"],
    href: "https://bissettconsulting.com",
    cta: "Visit Site",
    external: true,
    logo: "/bco-logo.png",
  },
  {
    id: "ahl",
    category: "Full-Stack Product",
    name: "Ahmadiyya Hockey League",
    desc: "Sports management web app with live standings, player stats leaderboard, and a password-protected admin panel.",
    metric: "50+",
    metricLabel: "Active Users",
    stack: ["Next.js", "TypeScript", "Vercel"],
    href: "https://ahl-ten.vercel.app/",
    cta: "Visit Site",
    external: true,
    logo: "/ahl-logo-v2.png",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <main className={styles.main}>
        <Image src="/new-cover-pic.jpg" alt="" fill className={styles.coverImage} priority />
        <div className={styles.coverOverlay} />
        <div className={styles.mainContent}>
          <h1 className={styles.heading}>
            <ScrambleText text="RIZWAN" />
            <br />
            <ScrambleText text="MIRZA." />
          </h1>

          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Building digital products &amp; leading real consulting engagements
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Link href="/portfolio" className={styles.ctaBtnPrimary}>
              See My Work →
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Featured Projects */}
      <section className={styles.featured}>
        <motion.div
          className={styles.featuredHeader}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <p className={styles.featuredLabel}>Featured Work</p>
          <div className={styles.featuredDivider} />
        </motion.div>

        <div className={styles.featuredGrid}>
          {featured.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {project.logo && (
                <div className={styles.cardLogo}>
                  <Image src={project.logo} alt={project.name} fill style={{ objectFit: "contain", objectPosition: "left center" }} />
                </div>
              )}
              <p className={styles.cardCategory}>{project.category}</p>
              <h3 className={styles.cardName}>{project.name}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>

              <div className={styles.cardMetric}>
                <span className={styles.metricNum}>{project.metric}</span>
                <span className={styles.metricLabel}>{project.metricLabel}</span>
              </div>

              <div className={styles.cardStack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>{tech}</span>
                ))}
              </div>

              <div className={styles.cardCta}>{project.cta} →</div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}
