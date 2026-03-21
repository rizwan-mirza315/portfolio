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
      </body>
    </html>
  );
}
