'use client'

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="prose prose-sm mx-auto max-w-7xl">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <WorkExperience />
        <ServicesSection />
        <TechStack />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-400">
       <h6>Doğuş Yaman © {new Date().getFullYear()}</h6>
      </footer>
    </div>
  );
}
