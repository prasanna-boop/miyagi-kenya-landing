import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miyagi Kenya | Revision for KPSEA, KJSEA & KCSE",
  description:
    "Revision that 50,000+ Kenyan students trust. Practice with CBE past papers, topical questions, 24/7 AI Tutor, and win M-Pesa cash prizes.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="font-sans antialiased bg-white text-zinc-900 selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
        {children}
      </body>
    </html>
  );
}
