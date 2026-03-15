import { Section } from "../components/ui/Section";

// This component renders the "About" section for the portfolio website
// It provides a short intro description about myself 
// highlighting my background interest for computer science
// This section contains reusable UI component and 
// contains descriptive paragraphs outlining technical experience, 
// deveolopment focus and career interests
export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Computer Science (Honours) student focused on building clean, practical software."
    >
      <div className="space-y-4 text-zinc-300 leading-relaxed">
        <p>
          I’m a final-year Computer Science (Honours) student at UTS with a
          strong interest in full-stack development and interaction design.
          I enjoy building modern web applications that are both technically
          solid and thoughtfully designed.
        </p>

        <p>
          My recent work includes building React + TypeScript applications,
          integrating REST APIs with ASP.NET Core backends and deploying
          projects using Azure and CI/CD pipelines. I focus on writing clean,
          maintainable code and designing interfaces that feel intuitive.
        </p>

        <p>
          I’m particularly interested in software engineering roles where I can
          contribute to meaningful products, collaborate with strong teams 
          and continue growing my technical depth in frontend, backend and
          system design.
        </p>
      </div>
    </Section>
  );
}