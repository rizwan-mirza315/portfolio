"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: "bco",
    title: "Bissett Consulting Organization",
    role: "Founding President",
    year: "Sept 2025–Present",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #7c3aed22, #a855f722)",
    border: "rgba(168,85,247,0.25)",
    logo: "/bco-logo.png",
    image: null,
    href: "https://bissettconsulting.com",
    tags: ["HTML", "CSS", "Vercel", "Consulting", "PwC", "MRU"],
    summary: "Founded MRU's first consulting club. Grew to 30+ members, secured PwC as corporate sponsor, hosted a Corporate Strategy Summit, and delivered consulting engagements for 3 Calgary SMEs.",
    details: [
      {
        title: "What it does",
        body: "BCO gives MRU students real consulting exposure through case workshops, networking with industry professionals, and pro bono engagements for local Calgary businesses. Events include the Corporate Strategy Summit (industry speakers from PwC, Optis, and MRU faculty with Fortune 500 experience, 50+ attendees), the BCO Consulting Cup (flagship campus-wide case competition), and member-exclusive Case Workshops focused on structured problem-solving and analytical thinking.",
      },
      {
        title: "How it's built",
        body: "The BCO website (bissettconsulting.com) is built with HTML and CSS, clean, fast, and deployed on Vercel. Built and maintained by me alongside running the club.",
      },
    ],
    stats: [{ v: "30+", l: "Members" }, { v: "3", l: "SME Clients" }, { v: "1st", l: "Club at MRU" }],
  },
  {
    id: "faith-feeds",
    title: "Faith Feeds",
    role: "Founder & Full-Stack Developer",
    year: "2024",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #0891b222, #06b6d422)",
    border: "rgba(6,182,212,0.25)",
    logo: "/faith-feeds-logo.png",
    image: null,
    href: "https://faithfeeds.org",
    tags: ["React", "Supabase", "Twilio", "Vercel", "Cloudflare"],
    summary: "Full-stack platform connecting faith organizations with excess food to charities in need. Real-time matching, SMS notifications, and logistics coordination.",
    details: [
      {
        title: "What it does",
        body: "Faith Feeds bridges faith communities (mosques, churches, temples) that regularly prepare large amounts of food with local shelters and charities. Organizations post available food, charities claim pickups, and the platform coordinates everything, reducing waste and feeding people who need it.",
      },
      {
        title: "How it's built",
        body: "React frontend deployed on Vercel. Supabase for the database and real-time updates. Twilio for SMS so coordinators get notified without being on the platform. Sender for email workflows. Cloudflare for performance and security.",
      },
    ],
    stats: [{ v: "Live", l: "On Vercel" }, { v: "Real-time", l: "Food Matching" }, { v: "5", l: "Technologies" }],
  },
  {
    id: "distribution-dashboard",
    title: "Distribution Reliability Dashboard",
    role: "Data Analyst",
    year: "2024",
    color: "#f472b6",
    gradient: "linear-gradient(135deg, #db277722, #f472b622)",
    border: "rgba(244,114,182,0.25)",
    logo: null,
    image: null,
    href: null,
    tags: ["Python", "Power BI", "Excel", "Data Engineering"],
    summary: "End-to-end analytics pipeline tracking electrical distribution reliability across 25+ feeders using industry-standard metrics, built to surface actionable insights, not just numbers.",
    details: [
      {
        title: "The Pipeline",
        body: "Built a Python pipeline to automate Excel data extraction and transformation. Data feeds into Power BI where electrical distribution reliability is visualized across 25+ feeders, tracking SAIDI, SAIFI, and CAIDI, the industry-standard reliability metrics used by utility companies.",
      },
      {
        title: "The Insight",
        body: "Segmented planned vs. unplanned outages to surface that unplanned failures drove the majority of customer interruption minutes. Delivered actionable recommendations for targeted reliability improvements, the kind of finding that drives real operational decisions.",
      },
    ],
    stats: [{ v: "25+", l: "Feeders Tracked" }, { v: "3", l: "Reliability Metrics" }, { v: "Python + Power BI", l: "Stack" }],
  },
  {
    id: "retirement-analysis",
    title: "Retirement Portfolio Analysis",
    role: "Financial Analyst",
    year: "2024",
    color: "#34d399",
    gradient: "linear-gradient(135deg, #05966922, #34d39922)",
    border: "rgba(52,211,153,0.25)",
    logo: null,
    image: null,
    href: null,
    tags: ["Finance", "Modeling", "Inflation Analysis", "Excel"],
    summary: "Modeled a $5M retirement portfolio across 6 withdrawal scenarios using time value of money, growing annuity, and real return frameworks, optimizing income sustainability over a 44-year horizon.",
    details: [
      {
        title: "The Model",
        body: "Built a comprehensive retirement model across 6 withdrawal scenarios using time value of money, growing annuity, and real return frameworks. The goal: optimize income sustainability over a 44-year retirement horizon for a $5M portfolio.",
      },
      {
        title: "The Finding",
        body: "Quantified a 52.1% income divergence between 2% and 3% inflation scenarios, a significant gap that most retirees overlook. Recommended an 86.7% equity / 13.3% bank allocation to achieve a 4% real return target and protect against inflation erosion.",
      },
    ],
    stats: [{ v: "$5M", l: "Portfolio Modeled" }, { v: "6", l: "Scenarios" }, { v: "52.1%", l: "Inflation Divergence" }],
  },
];

const leadership = [
  {
    id: "amya",
    title: "Director of Social Services",
    org: "Ahmadiyya Muslim Youth Association",
    year: "Oct 2023–Present",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #ea580c22, #f9731622)",
    border: "rgba(249,115,22,0.25)",
    image: "/amj-new.jpeg",
    imagePosition: "top",
    tags: ["Community", "Leadership", "Calgary"],
    stats: [{ v: "500+", l: "Meals Served" }, { v: "16,500 lbs", l: "Food Donated" }, { v: "300%", l: "YOY Increase" }, { v: "CTV · Global", l: "Media Coverage" }],
    links: [
      { label: "CTV, Food Distribution Coverage", href: "https://www.ctvnews.ca/calgary/article/muslim-youth-association-hands-out-food-outside-the-calgary-drop-in-centre/" },
      { label: "CTV, Blood Drive Coverage", href: "https://www.ctvnews.ca/calgary/article/muslim-youth-team-with-canadian-blood-services-for-year-end-blood-drive/" },
    ],
    bullets: [
      { h: "Holiday Dinner, 500+ Meals", b: "Led end-to-end planning of a Holiday Dinner for Calgary's homeless. Coordinated volunteers and logistics, personally oversaw 500+ meals served. Earned coverage from CTV and Global News." },
      { h: "Food Drive, 16,500 lbs", b: "Led a 15-member team to organize a region-wide food drive. Collected 16,500 lbs for the Calgary Food Bank, a 300% increase from the prior year." },
      { h: "Community Partnerships", b: "Built partnerships with local organizations and sponsors to secure resources and strengthen engagement across all initiatives." },
    ],
  },
  {
    id: "rfc",
    title: "Chairman",
    org: "Run for Calgary",
    year: "Aug 2025–Present",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg, #0891b222, #22d3ee22)",
    border: "rgba(34,211,238,0.25)",
    image: "/rfc.jpg",
    imagePosition: "center",
    tags: ["Events", "Operations", "Calgary"],
    links: [],
    stats: [{ v: "400+", l: "Participants" }, { v: "20+", l: "Volunteers" }, { v: "End-to-End", l: "Ownership" }],
    bullets: [
      { h: "400+ Participant Community Event", b: "Led cross-functional teams of 20+ volunteers to plan and execute a large-scale event, demonstrating initiative, project management, and adaptability." },
      { h: "Sponsorships & Partnerships", b: "Developed strategic sponsorship proposals through data-driven outreach, strengthening stakeholder engagement and securing key resources." },
      { h: "Full Event Operations", b: "Coordinated logistics, budgeting, and promotional campaigns, ensuring all milestones were met on time and within budget." },
    ],
  },
];

function Card({ item, type }: { item: typeof projects[0] | typeof leadership[0]; type: "project" | "leadership" }) {
  const [open, setOpen] = useState(false);
  const isProject = type === "project";
  const p = item as typeof projects[0];
  const l = item as typeof leadership[0];

  return (
    <div
      className={styles.card}
      style={{ background: item.gradient, border: `1px solid ${item.border}` }}
      onClick={() => setOpen(!open)}
    >
      {item.image && (
        <div className={styles.cardImageWrapper}>
          <Image src={item.image} alt={item.title} width={1200} height={1200} className={styles.cardImage} style={{ filter: "brightness(0.7)" }} />
          <div className={styles.cardImageOverlay} style={{ background: "linear-gradient(to bottom, transparent, rgba(13,13,13,0.8))" }} />
        </div>
      )}

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitleArea}>
            {isProject && p.logo && (
              <div className={styles.logoContainer}>
                <Image src={p.logo} alt={item.title} fill style={{ objectFit: "cover" }} />
              </div>
            )}
            <div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSubtitle} style={{ color: item.color }}>
                {isProject ? p.role : l.org}
              </p>
            </div>
          </div>
          <div className={styles.cardMeta}>
            <span className={styles.cardYear}>{item.year}</span>
            <span className={styles.cardToggle} style={{ color: item.color, transform: open ? "rotate(45deg)" : "none" }}>+</span>
          </div>
        </div>

        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}
              style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.summary}>
          {isProject ? p.summary : l.bullets[0].b.slice(0, 120) + "..."}
        </p>

        <div className={styles.cardFooter} style={{ borderTop: `1px solid ${item.border}` }}>
          <div className={styles.stats}>
            {item.stats.map((s) => (
              <div key={s.l}>
                <p className={styles.statValue}>{s.v}</p>
                <p className={styles.statLabel}>{s.l}</p>
              </div>
            ))}
          </div>
          {isProject && p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={styles.visitBtn}
              style={{ background: `${item.color}22`, color: item.color, border: `1px solid ${item.color}44` }}
            >
              Visit Site ↗
            </a>
          )}
        </div>

        {open && (
          <div className={styles.expandedSection} style={{ borderTop: `1px solid ${item.border}` }}
            onClick={(e) => e.stopPropagation()}
          >
            {isProject
              ? p.details.map((d) => (
                  <div key={d.title}>
                    <p className={styles.detailTitle}>{d.title}</p>
                    <p className={styles.detailBody}>{d.body}</p>
                  </div>
                ))
              : <>
                  {l.bullets.map((b) => (
                    <div key={b.h} className={styles.bulletItem}>
                      <span className={styles.bulletDot} style={{ background: item.color }} />
                      <div>
                        <p className={styles.bulletTitle}>{b.h}</p>
                        <p className={styles.bulletBody}>{b.b}</p>
                      </div>
                    </div>
                  ))}
                  {l.links && l.links.length > 0 && (
                    <div className={styles.mediaLinks}>
                      <p className={styles.mediaLabel}>Media Coverage</p>
                      {l.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                          className={styles.mediaLink}
                          style={{ color: item.color }}
                        >
                          ↗ {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <p className={styles.sectionLabel}>/ My Portfolio</p>
            <h1 className={styles.heading}>
              Things I&apos;ve
              <br />
              <span className={styles.gradientText}>
                built & led.
              </span>
            </h1>
            <p className={styles.subtext}>
              Click any card to expand the full story. These aren&apos;t class projects, they&apos;re real work with real impact.
            </p>
          </div>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>Projects</span>
              <div className={styles.sectionDivider} />
            </div>
            <div className={styles.grid}>
              {projects.map((p) => (
                <Card key={p.id} item={p} type="project" />
              ))}
            </div>
          </section>

          <section>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>Leadership</span>
              <div className={styles.sectionDivider} />
            </div>
            <div className={styles.grid}>
              {leadership.map((l) => (
                <Card key={l.id} item={l} type="leadership" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
