import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";

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

      <main className="min-h-screen pt-24 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto mb-16">
          <p className="text-sm font-semibold mb-3" style={{ color: "#a855f7" }}>/ About Me</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            The person behind
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              the work.
            </span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo + Education */}
          <div className="space-y-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-sm">
                <Image
                  src="/rizwan-headshot.jpg"
                  alt="Rizwan Mirza"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-32"
                  style={{ background: "linear-gradient(to top, #0d0d0d, transparent)" }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:right-0 rounded-xl px-5 py-4"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(168,85,247,0.3)", backdropFilter: "blur(10px)" }}
              >
                <p className="text-white font-bold text-lg">3rd Year</p>
                <p className="text-sm mt-0.5" style={{ color: "#a855f7" }}>CIS + Finance @ MRU</p>
              </div>
            </div>

            {/* Education card */}
            <div className="rounded-2xl p-6 mt-8"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "#555" }}>Education</p>
              <p className="text-white font-bold">Bachelor of Computer Information Systems</p>
              <p className="text-sm mt-0.5" style={{ color: "#a855f7" }}>Minor in Finance</p>
              <p className="text-sm mt-1" style={{ color: "#555" }}>Mount Royal University · Expected 2027</p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "#555" }}>
                Computing (Python, C++, Java) · Computer Architecture · Business Communication · Financial Accounting · Advanced Corporate Finance
              </p>
            </div>

            {/* Work experience */}
            <div className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: "#555" }}>Experience</p>
              <div className="space-y-4">
                {experience.map((e) => (
                  <div key={e.org} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: e.color }} />
                    <div>
                      <p className="text-white font-semibold text-sm">{e.role}</p>
                      <p className="text-xs mt-0.5" style={{ color: e.color }}>{e.org}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#444" }}>{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio + Skills */}
          <div className="space-y-8">
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#aaa" }}>
              <p>
                I&apos;m Rizwan — a Computer Information Systems student with a Minor in Finance at Mount Royal University in Calgary.
                I&apos;ve never been someone who just goes to class and calls it a day.
              </p>
              <p>
                I founded <span className="text-white font-semibold">BCO</span> — MRU&apos;s first consulting club —
                from scratch, secured <span className="text-white font-semibold">PwC as a corporate sponsor</span> in the inaugural semester,
                hosted a Corporate Strategy Summit with Fortune 500 speakers, and delivered consulting engagements for 3 Calgary SMEs.
              </p>
              <p>
                I built <span className="text-white font-semibold">Faith Feeds</span>, a full-stack food rescue platform,
                because I saw a problem and knew I could solve it. Before that, I spent over a year as a
                <span className="text-white font-semibold"> Lead Trainer at 9Round</span>, managing 65+ clients and improving
                customer satisfaction by 15% through operational improvements.
              </p>
              <p>
                Outside of work, I&apos;ve served 500+ meals to Calgary&apos;s homeless (covered by CTV & Global),
                led a food drive that collected 16,500 lbs for the Calgary Food Bank — 300% more than the year before —
                and chaired Run for Calgary with 400+ participants.
              </p>
              <p>
                I&apos;m looking for a startup internship where I can hit the ground running. I work well in ambiguity,
                I ship fast, and I genuinely care about the outcome.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-sm font-semibold text-white">Skills & Stack</p>
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-medium mb-2" style={{ color: "#a855f7" }}>{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ccc" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
            >
              See My Work →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
