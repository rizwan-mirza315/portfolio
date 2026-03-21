import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
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
          {/* Dark overlay */}
          <div className={styles.overlay} style={{ background: "linear-gradient(to right, rgba(13,13,13,0.95) 45%, rgba(13,13,13,0.5) 100%)" }} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Name */}
          <h1 className={styles.heading} style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            <span style={{ color: "#fff" }}>Rizwan</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Mirza.
            </span>
          </h1>

          {/* Roles */}
          <div className={styles.roles}>
            {["Builder", "Leader", "Developer"].map((role, i) => (
              <span key={role} className={styles.role}
                style={{ color: i === 0 ? "#a855f7" : i === 1 ? "#06b6d4" : "#f472b6" }}
              >
                {role}{i < 2 && <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: "0.75rem" }}>·</span>}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className={styles.description} style={{ color: "#999", lineHeight: 1.7 }}>
            3rd year Computer Information Systems student at Mount Royal University.
            I founded a consulting club, shipped a real product, and led teams that made headlines.
          </p>

          {/* CTA */}
          <div className={styles.cta}>
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
          </div>
        </div>
      </main>
    </>
  );
}
