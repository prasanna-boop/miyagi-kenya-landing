"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { motion, useScroll, useTransform } from "framer-motion";

type StudentFeedback = {
  name: string;
  grade: string;
  feedback: string;
};

const allTestimonials: StudentFeedback[] = [
  {
    name: "John Marston",
    grade: "Grade 9",
    feedback: "bro i went from 60/72 to 65/72",
  },
  {
    name: "Alex Githaiga",
    grade: "Grade 9",
    feedback: "it is very nice because it has all Kenyan exams and subjects.it is the best learning app.",
  },
  {
    name: "Maxie Wekesa",
    grade: "Grade 9",
    feedback: "such good app for revision 10/10 totally recommend",
  },
  {
    name: "Georgina",
    grade: "Grade 9",
    feedback: "I rather have Miyagi labs for revision than meta Ai or Chatgpt, this app helped me revise I did my exam and sure thing all the questions it gave me it came in my exam and it's explain much more better",
  },
  {
    name: "philly atieno",
    grade: "Grade 8",
    feedback: "It guides you step by step and tells you the topics you really need to work on",
  },
  {
    name: "Willy Njoroge",
    grade: "Grade 9",
    feedback: "Miyagi is the best app a person could ever study with. I know I am going to ace my next exam.",
  },
  {
    name: "Akello Osumba",
    grade: "Grade 9",
    feedback: "I love you so much! Thank you for making this website. I'm 100% sure I will ace my exams; the provision of notes is just perfect.",
  },
  {
    name: "Flavia",
    grade: "Grade 9",
    feedback: "This app is nice. I have learned new things and I hope I pass my KJSEA!",
  },
  {
    name: "Kevin Harris",
    grade: "Grade 9",
    feedback: "This is a great platform for students to learn.",
  },
  {
    name: "Shamah Muturi",
    grade: "Grade 8",
    feedback: "I really enjoy revising with your app.",
  },
  {
    name: "Cecilia Okweri",
    grade: "Grade 9",
    feedback: "Miyagi has been very helpful with my studies.",
  },
  {
    name: "Khan Gattai",
    grade: "Grade 8",
    feedback: "Thanks for the notes! They are well organized and easy to read and understand.",
  },
  {
    name: "Selfa Kuloo",
    grade: "Grade 7",
    feedback: "I like your notes.",
  },
  {
    name: "Javan Miheso",
    grade: "Grade 9",
    feedback: "I like this app very much.",
  },
  {
    name: "Clinton Nyoike",
    grade: "Grade 9",
    feedback: "I like this app and feel like this will help many people.",
  },
  {
    name: "Augustine",
    grade: "Grade 9",
    feedback: "Thank you a lot! This will really help me.",
  },
  {
    name: "Nemuel Mwangi",
    grade: "Grade 9",
    feedback: "Very nice, love the work.",
  },
  {
    name: "Skyler Jackline",
    grade: "Grade 8",
    feedback: "Miyagi has helped so much. I now know my strong subjects and feel very comfortable learning. Thank you!",
  },
  {
    name: "Raymond Mutua",
    grade: "Grade 6",
    feedback: "The best of the best!",
  },
  {
    name: "Perez Odhiambo",
    grade: "Grade 6",
    feedback: "I love the app!",
  },
  {
    name: "Hassan Omar",
    grade: "Grade 6",
    feedback: "It is a very nice app.",
  },
  {
    name: "Victor",
    grade: "Grade 12 (KCSE)",
    feedback: "The website is excellent and top-notch; it serves its purpose wonderfully.",
  },
  {
    name: "Daniel Munyao",
    grade: "Grade 12 (KCSE)",
    feedback: "It is very nice.",
  },
  {
    name: "Gaby Kano",
    grade: "Grade 8",
    feedback: "Thanks for the amazing app!",
  },
];

const row1 = allTestimonials.slice(0, 12);
const row2 = allTestimonials.slice(12, 24);

function FeedbackCard({ item }: { item: StudentFeedback }) {
  return (
    <figure className="relative w-[310px] sm:w-[350px] h-[175px] sm:h-[185px] shrink-0 rounded-2xl bg-white border border-zinc-200/90 p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-orange-500/50 hover:shadow-[0_8px_25px_-4px_rgba(255,107,0,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Feedback text without quotes */}
      <div className="relative z-10 flex-1 flex items-start">
        <p className="text-sm sm:text-base font-medium text-zinc-700 leading-relaxed line-clamp-3">
          {item.feedback}
        </p>
      </div>

      {/* Bottom info footer */}
      <figcaption className="relative z-10 pt-3 border-t border-zinc-100 flex items-center justify-between">
        <cite className="not-italic font-bold text-sm sm:text-base text-zinc-950 tracking-tight">
          {item.name}
        </cite>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] border border-orange-200/80">
          {item.grade}
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.85], [30, 0]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-12 md:py-18 bg-white relative overflow-hidden transition-colors"
    >
      <motion.div
        style={{ opacity, y }}
        className="mx-auto max-w-5xl lg:max-w-6xl px-6"
      >
        {/* Unified Title Size (text-3xl sm:text-4xl) */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            What our students are saying
          </h2>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left/Center Sliding Rows */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5 overflow-hidden w-full">
            {/* Row 1: Smooth Slow Slide Left */}
            <InfiniteSlider gap={20} duration={75}>
              {row1.map((item, idx) => (
                <FeedbackCard key={idx} item={item} />
              ))}
            </InfiniteSlider>

            {/* Row 2: Smooth Slow Slide Right */}
            <InfiniteSlider gap={20} duration={85} reverse>
              {row2.map((item, idx) => (
                <FeedbackCard key={idx} item={item} />
              ))}
            </InfiniteSlider>
          </div>

          {/* Right Column: Big 3D Student Illustration */}
          <div className="lg:col-span-5 xl:col-span-4 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-full max-w-[320px] drop-shadow-[0_20px_40px_rgba(255,107,0,0.22)] select-none pointer-events-none"
            >
              <Image
                src="/testimonials-mascot.png"
                alt="Student Testimonials 3D Mascot"
                width={420}
                height={420}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
