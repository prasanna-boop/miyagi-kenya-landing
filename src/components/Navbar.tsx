"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RippleButton } from "@/components/ui/ripple-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            : "bg-white/60 backdrop-blur-md border border-white/50 shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/ke" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Miyagi Labs"
              width={32}
              height={32}
              className="object-contain transform group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <span className="font-bold text-lg text-zinc-950 tracking-tight">
            Miyagi
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="#features" className="hover:text-zinc-950 transition-colors">
            Features
          </Link>
          <Link href="#exams" className="hover:text-zinc-950 transition-colors">
            Exams & Grades
          </Link>
          <Link href="#teachers" className="hover:text-zinc-950 transition-colors">
            For Teachers
          </Link>
          <Link href="#app" className="hover:text-zinc-950 transition-colors">
            Get App
          </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link href="https://miyagilabs.ai/login?returnTo=/ke">
            <RippleButton
              rippleColor="rgba(255, 255, 255, 0.4)"
              className="px-5 py-2 rounded-full bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all"
            >
              Get Started
            </RippleButton>
          </Link>
        </div>
      </nav>
    </header>
  );
}
