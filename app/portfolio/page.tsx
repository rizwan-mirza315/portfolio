"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Nav from "../components/Nav";
import styles from "./Portfolio.module.css";

const projects = [
  {
    id: "bco",
    title: "Bissett Consulting Organization",
    role: "Founding President",
    year: "Sept 2025–Present",
    category: "Consulting",
    logo: "/bco-logo.png",
    image: null,
    href: "https://bissettconsulting.com",
    tags: ["HTML", "CSS", "Vercel", "Consulting", "MRU"],
    summary: "Founded MRU's first consulting club. Grew to 30+ members, secured PwC as corporate sponsor, hosted a Corporate Strategy Summit, and delivered consulting engagements for 3 Calgary SMEs.",
    details: [
      {
        title: "What it does",
        body: "BCO gives MRU students real consulting exposure through case workshops, networking with industry professionals, and pro bono engagements for local Calgary businesses. Events include the Corporate Strategy Summit (industry speakers from PwC, Optis, and MRU faculty with Fortune 500 experience, 50+ attendees), the BCO Consulting Cup (flagship campus-wide case competition), and member-exclusive Case Workshops focused on structured problem-solving and analytical thinking.",
      },
      {
        title: "Client Results",
        body: "Improved conversion for an auto repair shop by 23% through digital channel analysis and online presence recommendations. Reduced average per-vehicle costs by 12% for a car dealership through financial statement analysis and cost categorization.",
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
    year: "2026–Present",
    category: "Product",
    logo: "/faith-feeds-logo.png",
    image: null,
    href: "https://faithfeeds.org",
    tags: ["React", "Supabase", "Twilio", "Vercel", "Cloudflare"],
    summary: "Full-stack platform connecting faith organizations with excess food to charities in need. Real-time matching, SMS notifications, and logistics coordination.",
    details: [
      {
        title: "What it does",
        body: "Faith Feeds bridges faith communities (mosques, churches, temples) that regularly prepare large amounts of food with local shelters and charities. Organizations post available food, charities claim pickups, and the platform coordinates everything, facilitating 100+ meals donated and improving visibility and allocation of surplus food across participating organizations.",
      },
      {
        title: "How it's built",
        body: "React frontend deployed on Vercel. Supabase for the database and real-time updates. Twilio for SMS so coordinators get notified without being on the platform. Sender for email workflows. Cloudflare for performance and security.",
      },
    ],
    stats: [{ v: "100+", l: "Meals Donated" }, { v: "Real-time", l: "Food Matching" }, { v: "5", l: "Technologies" }],
  },
  {
    id: "ahl",
    title: "Ahmadiyya Hockey League",
    role: "Full-Stack Developer",
    year: "2025–Present",
    category: "Product",
    logo: "/ahl-logo-v2.png",
    image: null,
    href: "https://ahl-ten.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    summary: "Full-stack sports management platform for a community hockey league. Live standings, schedules, player stats, team rosters, and a password-protected admin panel, no external database needed.",
    details: [
      {
        title: "What it does",
        body: "The AHL web app handles everything a community hockey league needs: a live standings table with dynamically calculated points, a full season schedule with game results, a player statistics leaderboard, individual team roster pages, and a head-to-head player comparison tool with shareable URLs so users can filter by team and compare season stats side by side.",
      },
      {
        title: "How it's built",
        body: "Built with Next.js 14, TypeScript, and Tailwind CSS, deployed on Vercel. Includes a password-protected admin panel where league managers submit game scores and player stats through a form interface. Data persists to a local JSON file via Next.js API routes, eliminating the need for any external database.",
      },
    ],
    stats: [{ v: "50+", l: "Users" }, { v: "Live", l: "On Vercel" }, { v: "4", l: "Core Features" }],
  },
  {
    id: "distribution-dashboard",
    title: "Distribution Reliability Dashboard",
    role: "Data Analyst",
    year: "2024",
    category: "Data",
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
    id: "chipotle-capital",
    title: "Chipotle Capital Structure Analysis",
    role: "Corporate Finance",
    year: "",
    category: "Finance",
    logo: null,
    image: null,
    href: null,
    tags: ["Excel", "DCF", "APV", "WACC", "Financial Modeling"],
    summary: "Multi-scenario financial model analyzing Chipotle's optimal capital structure across three debt levels using APV and DCF frameworks, culminating in a recommendation grounded in Trade-Off Theory, Pecking Order Theory, and MM with taxes.",
    details: [
      {
        title: "The Model",
        body: "Evaluated three debt scenarios ($1,150mm, $2,300mm, $3,450mm) against a zero-debt baseline. For each scenario, calculated post-buyback share prices, shares repurchased, levered betas using the Hamada equation, cost of equity, and WACC. Built separate FCFF and FCFE DCF sheets for each scenario with 5-year projections and terminal value.",
      },
      {
        title: "The Recommendation",
        body: "Recommended Scenario 1 ($1,150mm) grounded in Trade-Off Theory, Pecking Order Theory, and MM with taxes. Chipotle's food safety tail risk was the key constraint on leverage — the potential for a headline event creating sudden liquidity pressure made heavier debt loads too dangerous regardless of the tax shield benefit.",
      },
    ],
    stats: [{ v: "3", l: "Debt Scenarios" }, { v: "5-Year", l: "Projections" }, { v: "APV + DCF", l: "Framework" }],
  },
  {
    id: "retirement-analysis",
    title: "Retirement Portfolio Analysis",
    role: "Financial Analyst",
    year: "",
    category: "Finance",
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
    year: "2023–Present",
    category: "Leadership",
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
    year: "2025–Present",
    category: "Leadership",
    image: "/rfc.jpg",
    imagePosition: "center",
    tags: ["Events", "Operations", "Calgary"],
    links: [],
    stats: [{ v: "400+", l: "Participants" }, { v: "$25K+", l: "Raised" }, { v: "20+", l: "Volunteers" }],
    bullets: [
      { h: "400+ Participant Community Event", b: "Led cross-functional teams of 20+ volunteers to plan and execute a large-scale event, demonstrating initiative, project management, and adaptability." },
      { h: "Sponsorships & Partnerships", b: "Developed and executed sponsorship and outreach strategy, securing partnerships and raising $25K+ through structured proposals and targeted communication." },
      { h: "Full Event Operations", b: "Coordinated logistics, budgeting, and promotional campaigns, ensuring all milestones were met on time and within budget." },
    ],
  },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/([\d,]+(?:\.\d+)?)/);
    if (!match || match.index === undefined) return;

    const raw = parseFloat(match[1].replace(/,/g, ""));
    const pre = value.slice(0, match.index);
    const post = value.slice(match.index + match[1].length);
    const isFloat = match[1].includes(".");
    const decimals = isFloat ? match[1].split(".")[1].length : 0;

    const start = performance.now();
    const dur = 1000;

    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const cur = ease * raw;
      const fmt = isFloat ? cur.toFixed(decimals) : Math.floor(cur).toLocaleString();
      setDisplay(`${pre}${fmt}${post}`);
      if (t < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className={styles.statItem}>
      <p className={styles.statValue}>{display}</p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

function Card({ item, type }: { item: typeof projects[0] | typeof leadership[0]; type: "project" | "leadership" }) {
  const [open, setOpen] = useState(false);
  const isProject = type === "project";
  const p = item as typeof projects[0];
  const l = item as typeof leadership[0];

  return (
    <div className={styles.projectRow}>
      <div className={styles.rowMain} onClick={() => setOpen(!open)}>
        <div className={styles.rowLeft}>
          {isProject && p.logo && (
            <div className={["faith-feeds","ahl"].includes(p.id) ? styles.rowLogoLarge : styles.rowLogo}>
              <Image src={p.logo} alt={item.title} fill style={{ objectFit: "contain" }} />
            </div>
          )}
          <div>
            <h3 className={styles.rowTitle}>{item.title}</h3>
            <p className={styles.rowSub}>{isProject ? p.role : l.org}</p>
          </div>
        </div>
        <div className={styles.rowRight}>
          <span className={styles.rowCategory}>{item.category}</span>
          {item.year && <span className={styles.rowYear}>{item.year}</span>}
          <span className={styles.rowToggle} style={{ transform: open ? "rotate(45deg)" : "none" }}>+</span>
        </div>
      </div>

      {open && (
        <div
          className={item.image ? styles.expandedWithImage : styles.expandedSection}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={item.image ? styles.expandedInfo : undefined}>
            <div className={styles.expandedTags}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <p className={styles.summary}>
              {isProject ? p.summary : l.bullets[0].b}
            </p>

            <div className={styles.statsRow}>
              {item.stats.map((s) => (
                <AnimatedStat key={s.l} value={s.v} label={s.l} />
              ))}
            </div>

            <div className={styles.detailsBlock}>
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
                        <p className={styles.bulletTitle}>{b.h}</p>
                        <p className={styles.bulletBody}>{b.b}</p>
                      </div>
                    ))}
                    {l.links && l.links.length > 0 && (
                      <div className={styles.mediaLinks}>
                        <p className={styles.mediaLabel}>Media Coverage</p>
                        {l.links.map((link) => (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                            ↗ {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
              }
            </div>

            {isProject && p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={styles.visitBtn}
              >
                Visit Site ↗
              </a>
            )}
          </div>

          {item.image && (
            <div className={styles.cardImageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={1600}
                className={styles.cardImage}
                style={{ objectPosition: (item as typeof leadership[0]).imagePosition ?? "center" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <div className={styles.container}>
          <motion.div
            className={styles.pageHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className={styles.sectionLabel}>/ My Portfolio</p>
            <h1 className={styles.heading}>
              Things I&apos;ve<br />Built & Led.
            </h1>
            <p className={styles.subtext}>
              Click any row to expand the full story.
            </p>
          </motion.div>

          {[
            { title: "Software Development & Consulting", items: projects.filter(p => ["bco","faith-feeds","ahl"].includes(p.id)) },
            { title: "Business / Financial Analysis", items: projects.filter(p => ["distribution-dashboard","chipotle-capital","retirement-analysis"].includes(p.id)) },
          ].map((section) => (
            <section key={section.title} className={styles.section}>
              <motion.div
                className={styles.sectionHeader}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className={styles.sectionTitle}>{section.title}</span>
                <div className={styles.sectionDivider} />
              </motion.div>
              {section.items.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                >
                  <Card item={p} type="project" />
                </motion.div>
              ))}
            </section>
          ))}

          <section className={styles.section}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className={styles.sectionTitle}>Leadership</span>
              <div className={styles.sectionDivider} />
            </motion.div>
            {leadership.map((l, i) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              >
                <Card item={l} type="leadership" />
              </motion.div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
