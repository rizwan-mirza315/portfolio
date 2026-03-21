"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import ScrambleText from "./components/ScrambleText";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        {/* Background image */}
        <div className={styles.bg}>
          <Image
            src="/cover-page1.jpg"
            alt="Rizwan Mirza"
            fill
            className={styles.bgImage}
            priority
          />
          <div className={styles.overlay} style={{ background: "linear-gradient(to right, rgba(13,13,13,0.95) 45%, rgba(13,13,13,0.5) 100%)" }} />
        </div>

        {/* Content */}
        <div className={styles.content}>

          {/* Name */}
          <h1 className={styles.heading} style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            <ScrambleText text="Rizwan" style={{ color: "#fff" }} />
            <br />
            <ScrambleText
              text="Mirza."
              style={{
                background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </h1>

          {/* Roles */}
          <motion.div
            className={styles.roles}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
          >
            {["Builder", "Leader", "Developer"].map((role, i) => (
              <span key={role} className={styles.role}
                style={{ color: i === 0 ? "#a855f7" : i === 1 ? "#06b6d4" : "#f472b6" }}
              >
                {role}{i < 2 && <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: "0.75rem" }}>·</span>}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className={styles.description}
            style={{ color: "#999", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          >
            3rd year Computer Information Systems student at Mount Royal University.
            I founded a consulting club, shipped a real product, and led teams that made headlines.
          </motion.p>

          {/* CTA */}
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65, ease: "easeOut" }}
          >
            <Link
              href="/portfolio"
              className={styles.ctaBtn}
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
            >
              See My Work →
            </Link>
            <Link
              href="/about"
              className={styles.ctaBtnSecondary}
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#ccc" }}
            >
              About Me
            </Link>
          </motion.div>

        </div>
      </main>
    </>
  );
}
