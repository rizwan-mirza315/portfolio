import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/cover-page1.jpg"
            alt="Rizwan Mirza"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,13,13,0.95) 45%, rgba(13,13,13,0.5) 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-16 lg:px-24 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(168,85,247,0.4)", color: "#a855f7" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to internships · Calgary, AB
          </div>

          {/* Name */}
          <h1 className="font-bold leading-none mb-4" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            <span className="text-white">Rizwan</span>
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
          <div className="flex flex-wrap gap-3 mb-8">
            {["Builder", "Leader", "Developer"].map((role, i) => (
              <span key={role} className="text-lg sm:text-2xl font-semibold"
                style={{ color: i === 0 ? "#a855f7" : i === 1 ? "#06b6d4" : "#f472b6" }}
              >
                {role}{i < 2 && <span className="text-white/20 ml-3">·</span>}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg mb-10 max-w-xl" style={{ color: "#999", lineHeight: 1.7 }}>
            3rd year Computer Information Systems student at Mount Royal University.
            I founded a consulting club, shipped a real product, and led teams that made headlines.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }}
            >
              See My Work →
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
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
