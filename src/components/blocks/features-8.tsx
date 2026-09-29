"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Trophy, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MiyagiGazeAvatar } from "@/components/MiyagiGazeAvatar";
import { motion, useScroll, useTransform } from "framer-motion";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-10 sm:py-14 md:py-18 bg-white relative z-10 transition-colors"
    >
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-5xl lg:max-w-6xl px-6"
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Everything you need to excel in CBE
          </h2>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3.5 sm:gap-4">
            
            {/* Card 1: CBE Topical Questions & Revision Notes (Emerald Green) */}
            <Card className="group relative col-span-full flex overflow-hidden lg:col-span-2 bg-white border border-zinc-200 hover:border-emerald-500/60 transition-all rounded-2xl p-5 sm:p-6 flex-col justify-between shadow-sm hover:shadow-md">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="relative flex h-24 w-full max-w-[220px] items-center justify-center">
                  <div className="relative flex aspect-square size-20 rounded-full border border-emerald-500/30 before:absolute before:-inset-1 before:rounded-full before:border before:border-emerald-500/15 bg-emerald-50 items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <BookOpen className="size-8 text-emerald-600" strokeWidth={2.2} />
                  </div>
                  <span className="absolute bottom-0 right-8 text-xs font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full shadow-sm">
                    Grade 6–10
                  </span>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Topical Questions & Notes
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 max-w-[260px] leading-relaxed">
                  Article-style revision notes for every subject, strand by strand like a digital textbook.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: KPSEA, KJSEA & KCSE Past Papers (Sky Blue) */}
            <Card className="group relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-white border border-zinc-200 hover:border-sky-500/60 transition-all rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="relative flex h-24 w-full items-center justify-center">
                  <div className="w-full max-w-[200px] rounded-xl bg-sky-50 border border-sky-200/80 p-3 flex flex-col justify-center space-y-1.5 shadow-inner transform group-hover:scale-106 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-700 font-bold">KNEC Past Papers</span>
                      <ShieldCheck className="size-4 text-sky-600" />
                    </div>
                    <div className="flex gap-1.5 pt-1 justify-center">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white rounded border border-sky-300 text-sky-700">KPSEA</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white rounded border border-sky-300 text-sky-700">KJSEA</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white rounded border border-sky-300 text-sky-700">KCSE</span>
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  Exam Past Papers & Mocks
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 max-w-[260px] leading-relaxed">
                  Full past papers and mock tests with marking schemes and instant performance breakdowns.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Win Cash via M-Pesa (Gold / Amber Accent) */}
            <Card className="group relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-white border border-zinc-200 hover:border-amber-500/60 transition-all rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="relative flex h-24 w-full max-w-[220px] items-center justify-center">
                  <div className="relative flex aspect-square size-20 rounded-full border border-amber-500/30 before:absolute before:-inset-1 before:rounded-full before:border before:border-amber-500/15 bg-amber-50 items-center justify-center transform group-hover:scale-115 group-hover:-translate-y-1 transition-all duration-300">
                    <Trophy className="size-8 text-amber-500" strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  M-Pesa Cash Prizes
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-medium text-zinc-600 max-w-[260px] leading-relaxed">
                  Climb the leaderboard by revising questions. Top students win real cash prizes paid directly via M-Pesa.
                </p>
              </CardContent>
            </Card>

            {/* Card 4: 24/7 AI Tutor with MiyagiGazeAvatar */}
            <Card className="group relative col-span-full overflow-hidden lg:col-span-3 bg-white border border-zinc-200 hover:border-[#FF6B00]/60 transition-all rounded-2xl p-6 sm:p-7 min-h-[200px] shadow-sm hover:shadow-md">
              <CardContent className="p-0 flex flex-col items-center text-center sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center sm:text-left">
                
                {/* Visual Top Container on Mobile / Right Column on Desktop */}
                <div className="order-1 sm:order-2 relative z-10 flex items-center justify-center sm:justify-end mb-4 sm:mb-0">
                  <div className="transform group-hover:scale-110 group-hover:-translate-y-1.5 transition-all duration-300">
                    <MiyagiGazeAvatar size={135} className="drop-shadow-[0_12px_28px_rgba(255,107,0,0.25)]" />
                  </div>
                </div>

                {/* Content Area: Centered text on mobile, left on desktop */}
                <div className="order-2 sm:order-1 relative z-10 flex flex-col justify-center items-center sm:items-start space-y-2 sm:space-y-3">
                  <div className="hidden sm:flex relative aspect-square size-11 rounded-full border border-orange-500/30 bg-orange-50 items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Sparkles className="size-5 text-[#FF6B00]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-1.5">
                      24/7 AI Tutor
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-600 leading-relaxed max-w-sm sm:max-w-none">
                      Doubt-solving tutor using the Socratic method that guides students step-by-step toward the answer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Complete CBE Coverage */}
            <Card className="group relative col-span-full overflow-hidden lg:col-span-3 bg-white border border-zinc-200 hover:border-violet-500/60 transition-all rounded-2xl p-6 sm:p-7 min-h-[200px] shadow-sm hover:shadow-md">
              <CardContent className="p-0 flex flex-col items-center text-center sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center sm:text-left">
                
                {/* Visual Top Container on Mobile / Right Column on Desktop */}
                <div className="order-1 sm:order-2 relative z-10 w-full flex justify-center sm:justify-end mb-5 sm:mb-0">
                  <div className="rounded-xl border border-zinc-200 p-3.5 bg-zinc-50 flex flex-col justify-center space-y-2 shadow-inner w-full max-w-[240px] sm:max-w-[200px] transform group-hover:scale-106 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="text-xs font-bold text-zinc-900 flex items-center justify-between">
                      <span>Mathematics</span>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
                    </div>
                    <div className="text-xs font-bold text-zinc-900 flex items-center justify-between">
                      <span>Integrated Science</span>
                      <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-1.5 py-0.5 rounded">Active</span>
                    </div>
                    <div className="text-xs font-bold text-zinc-900 flex items-center justify-between">
                      <span>English & Kiswahili</span>
                      <span className="text-[10px] text-violet-600 font-bold bg-violet-50 px-1.5 py-0.5 rounded">Active</span>
                    </div>
                  </div>
                </div>

                {/* Content Area: Centered text on mobile, left on desktop */}
                <div className="order-2 sm:order-1 relative z-10 flex flex-col justify-center items-center sm:items-start space-y-2 sm:space-y-3">
                  <div className="hidden sm:flex relative aspect-square size-11 rounded-full border border-violet-500/30 bg-violet-50 items-center justify-center transform group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="size-5 text-violet-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight mb-1.5">
                      Complete CBE Coverage
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-zinc-600 leading-relaxed max-w-sm sm:max-w-none">
                      Maths, Sciences, English, Kiswahili, Social Studies, and CRE across all primary and secondary levels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
