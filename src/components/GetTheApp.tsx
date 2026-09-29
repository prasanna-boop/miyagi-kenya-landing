"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function GetTheApp() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  return (
    <section
      id="app"
      ref={containerRef}
      className="py-10 sm:py-14 md:py-18 bg-white relative overflow-hidden transition-colors"
    >
      <motion.div
        style={{ opacity, y }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
            Download the Miyagi app
          </h2>
          <p className="text-sm sm:text-base font-medium text-zinc-600">
            The easiest way to revise Grade 6–10 and Form 4 on your phone.
          </p>
        </div>

        {/* Store Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-12">
          {/* Apple App Store */}
          <Link
            href="https://apps.apple.com/us/app/miyagi-labs/id6749786901"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.12.65-2.79 1.43-.58.68-1.1 1.74-1.02 2.79 1.07.08 2.18-.57 2.8-1.35z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-zinc-400 font-semibold uppercase">Download on the</div>
              <div className="text-sm font-bold text-white">App Store</div>
            </div>
          </Link>

          {/* Official Google Play Badge */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.miyagilabs.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-md hover:shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.2 24.3C40.6 31.4 36.8 42.6 36.8 56.4V455.6C36.8 469.4 40.6 480.6 47.2 487.7L51.3 491.5L276.9 265.9V256.1L51.3 20.5L47.2 24.3Z" fill="#00D4FF"/>
              <path d="M352.1 341.1L276.9 265.9V256.1L352.1 180.9L353.9 181.9L443 232.5C468.4 246.9 468.4 270.7 443 285.1L353.9 335.7L352.1 341.1Z" fill="#FFCC00"/>
              <path d="M353.9 340.1L276.9 263.1L47.2 492.8C55.6 501.7 69.3 502.8 84.7 494.1L353.9 340.1Z" fill="#FF334B"/>
              <path d="M353.9 171.9L84.7 17.9C69.3 9.2 55.6 10.3 47.2 19.2L276.9 248.9L353.9 171.9Z" fill="#00E676"/>
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[10px] text-zinc-400 font-semibold uppercase">Get it on</div>
              <div className="text-sm font-bold text-white">Google Play</div>
            </div>
          </Link>
        </div>

        {/* App Mockup Picture */}
        <div className="relative max-w-2xl mx-auto flex justify-center">
          <Image
            src="/app_img.png"
            alt="Miyagi Kenya App Preview"
            width={600}
            height={400}
            className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,107,0,0.15)]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
