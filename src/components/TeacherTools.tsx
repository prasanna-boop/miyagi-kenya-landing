"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TeacherTools() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  const tools = [
    {
      title: "Curriculum Designs",
      link: "https://miyagilabs.ai/ke/teachers/curriculum",
      image: "/teacher-curriculum.png",
      alt: "Curriculum Designs 3D Asset",
      points: [
        "Official Grade 4 to Grade 12 CBE Designs",
        "Strands, Sub-strands & Specific Outcomes",
      ],
    },
    {
      title: "Lesson Plans",
      link: "https://miyagilabs.ai/ke/teachers/plans",
      image: "/teacher-lesson-plans.png",
      alt: "Lesson Plans 3D Asset",
      points: [
        "Plan lessons from strand & sub-strand in minutes",
        "Learning activities, key inquiry & assessment",
      ],
    },
    {
      title: "Assessment Generator",
      link: "https://miyagilabs.ai/ke/teachers/assessments",
      image: "/teacher-assessment.png",
      alt: "Assessment Generator 3D Asset",
      points: [
        "Build automated quizzes for any substrand",
        "Custom question counts with teacher marking rubrics",
      ],
    },
    {
      title: "Schemes of Work",
      link: "https://miyagilabs.ai/ke/teachers/schemes",
      image: "/teacher-schemes.png",
      alt: "Schemes of Work 3D Asset",
      points: [
        "Plan a term's lessons week-by-week instantly",
        "Auto-aligned with official curriculum designs",
      ],
    },
    {
      title: "Lesson Notes & Books",
      link: "https://miyagilabs.ai/ke/teachers/notes",
      image: "/teacher-notes.png",
      alt: "Lesson Notes & Books 3D Asset",
      points: [
        "Teacher summaries of textbooks strand-by-strand",
        "Digital article-style notes ready for class",
      ],
    },
    {
      title: "Practical Science Labs",
      link: "https://miyagilabs.ai/ke/teachers/labs",
      image: "/teacher-labs.png",
      alt: "Science Labs 3D Asset",
      points: [
        "Create dry practicals for everyday classrooms",
        "Lab apparatus, safety rules & step-by-step guides",
      ],
    },
  ];

  return (
    <section id="teachers" ref={containerRef} className="py-12 md:py-16 bg-zinc-50 border-y border-zinc-200/80 transition-colors">
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-6xl px-6"
      >
        {/* Section Header with stretched single-line heading */}
        <div className="w-full max-w-5xl mx-auto mb-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-wider px-4 py-1.5 rounded-full bg-[#FF6B00] text-white shadow-sm shadow-orange-500/25 mb-4 inline-block">
            FOR TEACHERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-zinc-950 whitespace-nowrap">
            Our tools help teachers save 2 hours a day
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tools.map((tool, idx) => (
            <Link
              key={idx}
              href={tool.link}
              className="group relative rounded-2xl bg-white border border-orange-500/25 hover:border-orange-500/60 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[250px] sm:min-h-[265px] overflow-hidden shadow-[0_0_24px_-4px_rgba(255,107,0,0.06)] hover:shadow-[0_0_36px_-2px_rgba(255,107,0,0.18)]"
            >
              {/* Left Content Column */}
              <div className="relative z-10 max-w-[62%] sm:max-w-[64%]">
                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight mb-3.5 leading-snug group-hover:text-[#FF6B00] transition-colors">
                  {tool.title}
                </h3>

                {/* Exactly 2 Bullet Points with orange checkmarks */}
                <div className="space-y-3 mb-5 text-xs sm:text-sm font-semibold text-zinc-700 leading-snug">
                  {tool.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <div className="size-4 rounded-full bg-orange-500/20 text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Left CTA */}
              <div className="relative z-10 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-900 group-hover:text-[#FF6B00] transition-colors">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>

              {/* Perfectly Vertically Centered 3D Image on the Right with Pop-out */}
              <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-[110px] sm:w-[130px] h-[110px] sm:h-[130px] pointer-events-none select-none z-0 flex items-center justify-center">
                <Image
                  src={tool.image}
                  alt={tool.alt}
                  width={240}
                  height={240}
                  className="w-full h-full object-contain transform group-hover:scale-115 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
