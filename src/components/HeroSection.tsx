"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CloudShader } from "@/components/ui/cloud-shader";
import { FadeWord } from "@/components/ui/fade-word";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { RippleButton } from "@/components/ui/ripple-button";
import { motion } from "framer-motion";

export function HeroSection() {
  const avatarUrls = [
    { imageUrl: "/student_1.jpg", profileUrl: "#" },
    { imageUrl: "/student_2.jpg", profileUrl: "#" },
    { imageUrl: "/student_3.jpg", profileUrl: "#" },
    { imageUrl: "/student_4.jpg", profileUrl: "#" },
  ];

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen w-full overflow-hidden bg-white flex items-center justify-center pt-24 sm:pt-28 pb-4 md:pb-6">
      {/* CloudShader Background with extended linear fade */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_75%,rgba(0,0,0,0.9)_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,rgba(0,0,0,0.9)_90%,transparent_100%)]">
        <CloudShader
          className="h-full w-full opacity-95"
          speed={0.75}
          count={5}
          cloudColor="#ffffff"
          skyTopColor="#3876ba"
          skyBottomColor="#a3cef1"
        />
      </div>

      {/* Gentle White Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/90 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Tightly packed 3D cluster (Reverted to the balanced layout) */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[420px] sm:min-h-[460px]">
            
            {/* Clustered stage area */}
            <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] flex items-center justify-center">

              {/* 1. PRIMARY BIG CENTER MASCOT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, ease: "easeOut" },
                  scale: { duration: 0.5, ease: "easeOut" },
                  y: { duration: 4.6, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative z-20 w-48 sm:w-56 md:w-60 drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)] select-none pointer-events-none"
              >
                <Image
                  src="/scatter-icon.png"
                  alt="Miyagi Primary Center Mascot"
                  width={380}
                  height={380}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>

              {/* 2. TOP RIGHT: Secondary Mascot (+22°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-3 -right-2 sm:-right-4 z-15 w-24 sm:w-28 rotate-[22deg] drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src="/scatter-icon.png"
                  alt="Tutor Mascot Top Right"
                  width={180}
                  height={180}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 3. TOP LEFT: 3D Book (-26°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0], rotate: [-24, -30, -24] }}
                transition={{
                  duration: 0.4,
                  delay: 0.15,
                  y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-2 -left-2 sm:-left-4 z-25 w-22 sm:w-26 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src="/element-3.png"
                  alt="3D Book Top Left"
                  width={180}
                  height={180}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 4. BOTTOM LEFT: Secondary Mascot (-18°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  y: { duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                }}
                className="absolute -bottom-3 -left-2 sm:-left-3 z-25 w-22 sm:w-26 rotate-[-18deg] drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src="/scatter-icon.png"
                  alt="Tutor Mascot Bottom Left"
                  width={170}
                  height={170}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 5. BOTTOM RIGHT: 3D Book (+20°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, 5, 0], rotate: [18, 24, 18] }}
                transition={{
                  duration: 0.4,
                  delay: 0.25,
                  y: { duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-3 -right-1 sm:-right-2 z-15 w-22 sm:w-26 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src="/element-3.png"
                  alt="3D Book Bottom Right"
                  width={170}
                  height={170}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 6. TOP CENTER PENCIL (-18°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0], rotate: [-20, -14, -20] }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                  rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-7 left-20 sm:left-24 z-25 w-16 sm:w-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
              >
                <Image
                  src="/element-4.png"
                  alt="3D Pencil Top"
                  width={140}
                  height={140}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 7. RIGHT FLANK PENCIL (+35°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, 5, 0], rotate: [32, 40, 32] }}
                transition={{
                  duration: 0.4,
                  delay: 0.35,
                  y: { duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                  rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-20 -right-6 sm:-right-7 z-25 w-16 sm:w-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
              >
                <Image
                  src="/element-4.png"
                  alt="3D Pencil Right"
                  width={140}
                  height={140}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 8. LEFT FLANK MASCOT (+14°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, 4, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                }}
                className="absolute top-22 -left-6 sm:-left-7 z-15 w-14 sm:w-18 rotate-[14deg] drop-shadow-[0_8px_18px_rgba(0,0,0,0.14)]"
              >
                <Image
                  src="/scatter-icon.png"
                  alt="Mini Mascot Left"
                  width={120}
                  height={120}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 9. BOTTOM CENTER PENCIL (-42°) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0], rotate: [-44, -36, -44] }}
                transition={{
                  duration: 0.4,
                  delay: 0.45,
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                  rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-7 left-22 sm:left-26 z-25 w-15 sm:w-18 drop-shadow-[0_10px_18px_rgba(0,0,0,0.14)]"
              >
                <Image
                  src="/element-4.png"
                  alt="Mini Pencil Bottom"
                  width={130}
                  height={130}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 10. SPRINKLE 1: 3D Element 5 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0], rotate: [12, 20, 12] }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  y: { duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                  rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute top-8 right-16 sm:right-20 z-25 w-14 sm:w-16 drop-shadow-[0_10px_18px_rgba(0,0,0,0.16)]"
              >
                <Image
                  src="/element-5.png"
                  alt="3D Element 5 Top Right"
                  width={120}
                  height={120}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              {/* 11. SPRINKLE 2: 3D Element 5 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, y: [0, 6, 0], rotate: [-15, -22, -15] }}
                transition={{
                  duration: 0.4,
                  delay: 0.45,
                  y: { duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                  rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute bottom-8 left-14 sm:left-18 z-25 w-14 sm:w-16 drop-shadow-[0_10px_18px_rgba(0,0,0,0.16)]"
              >
                <Image
                  src="/element-5.png"
                  alt="3D Element 5 Bottom Left"
                  width={120}
                  height={120}
                  className="w-full h-auto object-contain"
                />
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN: Copy, Animated Headline, Plain CTAs & Social Proof */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Y Combinator Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-zinc-200 text-zinc-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="w-4 h-4 rounded bg-[#FF6B00] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                Y
              </span>
              <span className="font-bold tracking-tight">Backed by Y Combinator</span>
            </div>

            {/* Asymmetric Headline with Orange FadeWord */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-5">
              <span>Ace</span>{" "}
              <FadeWord
                words={["KPSEA", "KJSEA", "KCSE"]}
                duration={2600}
                className="font-bold text-[#FF6B00] underline decoration-[#FF6B00]/30 decoration-wavy decoration-2"
              />{" "}
              <br className="hidden sm:inline" />
              <span>on your first attempt.</span>
            </h1>

            {/* Kenya-Specific Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-zinc-700 font-medium leading-relaxed mb-8">
              Revision that <strong>50,000+ Kenyan students trust</strong>. Master Grade 6–10 and Form 4 with topical questions, CBE past papers, and 24/7 AI tutor explanations.
            </p>

            {/* Action Buttons: Clean plain buttons without internal icons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
              <Link href="#exams" className="w-full sm:w-auto">
                <RippleButton
                  rippleColor="rgba(255, 255, 255, 0.4)"
                  className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-base flex items-center justify-center border-none transition-colors shadow-lg shadow-orange-500/25"
                >
                  I&apos;m a student
                </RippleButton>
              </Link>
              <Link href="#teachers" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-8 rounded-xl bg-white/95 hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-bold text-base transition-colors flex items-center justify-center shadow-sm">
                  I&apos;m a teacher
                </button>
              </Link>
            </div>

            {/* Scaled-up, prominent Social Proof Section */}
            <div className="flex items-center gap-4 text-left pt-3 border-t border-zinc-200/80 w-full sm:w-auto">
              <AvatarCircles
                avatarUrls={avatarUrls}
                className="border-white"
              />
              <div className="text-sm sm:text-base text-zinc-700 font-medium leading-tight">
                Joined by <strong className="text-zinc-950 font-extrabold text-base sm:text-lg">50,000+ Kenyan learners</strong>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
