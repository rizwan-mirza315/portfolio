import Nav from "../components/Nav";

const socials = [
  { label: "Email", value: "rmirz559@mtroyal.ca", href: "mailto:rmirz559@mtroyal.ca", color: "#a855f7" },
  { label: "LinkedIn", value: "linkedin.com/in/rizwan-bmirza", href: "https://www.linkedin.com/in/rizwan-bmirza/", color: "#06b6d4" },
  { label: "GitHub", value: "github.com/rizwan-mirza315", href: "https://github.com/rizwan-mirza315", color: "#f472b6" },
];

export default function Contact() {
  return (
    <>
      <Nav />

      <main className="min-h-screen pt-24 pb-20 px-6 sm:px-10 lg:px-20 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <p className="text-sm font-semibold mb-4" style={{ color: "#a855f7" }}>/ Contact Me</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Let&apos;s build
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              something great.
            </span>
          </h1>
          <p className="text-base mb-14 max-w-lg" style={{ color: "#666", lineHeight: 1.7 }}>
            I&apos;m actively looking for startup internships — product, engineering, or operations.
            If you&apos;re building something interesting, I&apos;d love to be part of it.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group block rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: `${s.color}12`,
                  border: `1px solid ${s.color}30`,
                }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: s.color }}>{s.label}</p>
                <p className="text-white font-medium text-sm break-all">{s.value}</p>
                <p className="text-xs mt-3 transition-colors" style={{ color: "#555" }}>
                  Click to open →
                </p>
              </a>
            ))}
          </div>

          {/* Big CTA */}
          <div className="rounded-2xl p-8 sm:p-12 text-center"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to work together?
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ color: "#666" }}>
              I respond fast. Drop me an email and let&apos;s set up a call.
            </p>
            <a
              href="mailto:rmirz559@mtroyal.ca"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
            >
              Say Hello →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
