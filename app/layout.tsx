import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Rizwan Mirza",
  description: "Builder. Leader. Developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <CustomCursor />
        {children}
        <footer style={{
          borderTop: "1px solid #1a1a1a",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#333" }}>
            © 2025 Rizwan Mirza
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "Email", href: "mailto:rmirz559@mtroyal.ca" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/rizwan-bmirza/" },
              { label: "GitHub", href: "https://github.com/rizwan-mirza315" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#333", textDecoration: "none" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
