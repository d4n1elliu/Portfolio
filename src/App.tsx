import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { About } from "./sections/AboutSection";
import { Projects } from "./sections/ProjectsSection";
import { Skills } from "./sections/SkillsSection";
import { Experience } from "./sections/ExperienceSection";
import { Awards } from "./sections/AwardsSection";
import { Education } from "./sections/EducationSection";
import { Contact } from "./sections/ContactSection";
import { Resume } from "./sections/ResumeSection";

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <div className="px-8 py-4 md:px-16">
          <hr className="border-t border-zinc-300" />
        </div>
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Awards />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
