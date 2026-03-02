//import { useState } from 'react'

// src/App.tsx
// Modern 1-page portfolio template (React + Vite + Tailwind)

import { Divider } from "./components/ui/Divider";
import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";

import { About } from "./sections/AboutSection";
import { Projects } from "./sections/ProjectsSection";
import { Skills } from "./sections/SkillsSection";
import { Experience } from "./sections/ExperienceSection";
import { Education } from "./sections/EducationSection";
import { Contact } from "./sections/ContactSection";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav/>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Hero />

        <Divider />
        <About />

        <Divider />
        <Projects />

        <Divider />
        <Skills />

        <Divider />
        <Experience />

        <Divider />
        <Education />

        <Divider />
        <Contact />

        <Footer />
      </main>
    </div>
  );
}