"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4"
      style={{ background: "rgba(13,13,13,0.85)", backdropFilter: "blur(12px)" }}
    >
      <Link href="/" className="font-bold text-white text-sm tracking-wide">
        RM<span style={{ color: "#a855f7" }}>.</span>
      </Link>

      <div className="flex items-center gap-1 p-1 rounded-full"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={
                active
                  ? { background: "linear-gradient(135deg, #7c3aed, #a855f7)", color: "#fff" }
                  : { color: "#888" }
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

    </nav>
  );
}
