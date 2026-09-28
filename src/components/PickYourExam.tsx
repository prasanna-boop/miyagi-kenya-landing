"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PickYourExam() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  const exams = [
    {
      title: "KPSEA",
      grade: "Grade 6 Assessment",
      color: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      borderColor: "hover:border-emerald-500/60",
      ctaHoverColor: "group-hover:text-emerald-600",
      url: "https://miyagilabs.ai/ke/kpsea",
      points: [
        "CBC Grade 6 National Assessment Past Papers",
        "Integrated Science, Agriculture & Nutrition",
        "Mathematics, English & Kiswahili Practice",
      ],
    },
    {
      title: "KJSEA",
      grade: "Grade 9 Junior School",
      color: "from-sky-500/10 via-sky-500/5 to-transparent",
      borderColor: "hover:border-sky-500/60",
      ctaHoverColor: "group-hover:text-sky-600",
      url: "https://miyagilabs.ai/ke/kjsea",
      points: [
        "Comprehensive Grade 7–9 CBE Topical Questions",
        "Strand-by-Strand Detailed Digital Notes",
        "Junior School Mock Simulator with AI Feedback",
      ],
    },
    {
      title: "KCSE",
      grade: "Form 4 National Exam",
      color: "from-orange-500/10 via-orange-500/5 to-transparent",
      borderColor: "hover:border-orange-500/60",
      ctaHoverColor: "group-hover:text-[#FF6B00]",
      url: "https://miyagilabs.ai/ke/kcse",
      points: [
        "15+ Years KCSE Past Papers with Step-by-Step Marking",
        "Paper 1, Paper 2 & Practical Science Guides",
        "Maths, Physics, Chem, Bio, English & Kiswahili",
      ],
    },
  ];

  return (
    <section id="exams" ref={containerRef} className="py-10 md:py-16 bg-white transition-colors">
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Pick your exam or grade
          </h2>
        </div>

        {/* 3-Card Grid with customized CTA hover colors matching each card's theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {exams.map((exam, i) => (
            <Link
              key={i}
              href={exam.url}
              className={`group relative rounded-2xl bg-white border border-zinc-200/90 ${exam.borderColor} p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[290px] sm:min-h-[300px] overflow-hidden shadow-sm hover:shadow-xl`}
            >
              {/* Restored Subtle Top Gradient */}
              <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-b ${exam.color} pointer-events-none`} />

              <div className="relative z-10">
                {/* Clean Title & Grade */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-1">
                  {exam.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-500 mb-5">
                  {exam.grade}
                </p>

                {/* Feature Points */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm font-semibold text-zinc-700 leading-snug">
                  {exam.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA with exact matching gradient/theme color */}
              <div className={`relative z-10 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-900 ${exam.ctaHoverColor} transition-colors`}>
                <span>Start Practice</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Grade Quick Jump Strip */}
        <div className="mt-8 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="font-bold text-zinc-700 mr-2">Quick grade access:</span>
          {["Grade 6 (KPSEA)", "Grade 7", "Grade 8", "Grade 9 (KJSEA)", "Grade 10", "Form 4 (KCSE)"].map((grade, idx) => (
            <Link
              key={idx}
              href="https://miyagilabs.ai/login?returnTo=/ke"
              className="px-3 py-1.5 rounded-lg bg-white border border-zinc-200 font-semibold text-zinc-800 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors shadow-2xs"
            >
              {grade}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
