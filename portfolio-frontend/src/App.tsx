import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { About } from "./sections/AboutSection";
import { Projects } from "./sections/ProjectsSection";
import { Skills } from "./sections/SkillsSection";
import { Experience } from "./sections/ExperienceSection";
import { Education } from "./sections/EducationSection";
import { Contact } from "./sections/ContactSection";
import { Resume } from "./sections/ResumeSection";

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
