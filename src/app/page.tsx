import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { DeveloperConsole } from "@/components/DeveloperConsole";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { DigitalTwinChat } from "@/components/DigitalTwinChat";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Thanniru Yaswanth | Full Stack Software Developer",
  description:
    "Official portfolio website of Thanniru Yaswanth. Full Stack Software Developer, MERN stack engineer, and Python/Django developer.",
  keywords: [
    "Thanniru Yaswanth",
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "React",
    "Node.js",
    "Python",
    "Django",
    "Fake News Detection ML System",
    "Parul University",
    "Digital Twin AI",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ExperienceTimeline />
      <SkillsMatrix />
      <DeveloperConsole />
      <ContactSection />
      <DigitalTwinChat />
      <BackToTop />
      <Footer />
    </main>
  );
}
