"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import ScrambleText from "./components/ScrambleText";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <Image src="/new-cover-pic.jpg" alt="" fill className={styles.coverImage} priority />
        <div className={styles.coverOverlay} />
        <div className={styles.mainContent}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Calgary, AB — CIS + Finance, MRU &apos;27
        </motion.p>

        <h1 className={styles.heading}>
          <ScrambleText text="RIZWAN" />
          <br />
          <ScrambleText text="MIRZA." />
        </h1>

        <motion.p
          className={styles.roles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Builder &nbsp;·&nbsp; Leader &nbsp;·&nbsp; Developer
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          I founded a consulting club, shipped a real product,
          and led teams that made headlines.
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
    </>
  );
}
