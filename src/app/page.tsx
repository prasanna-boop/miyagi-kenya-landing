import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/blocks/features-8";
import { PickYourExam } from "@/components/PickYourExam";
import { TeacherTools } from "@/components/TeacherTools";
import { GetTheApp } from "@/components/GetTheApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 selection:bg-[#FF6B00]/20 selection:text-[#FF6B00] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <PickYourExam />
      <TeacherTools />
      <GetTheApp />
      <Footer />
    </main>
  );
}
