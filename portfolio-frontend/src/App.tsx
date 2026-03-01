//import { useState } from 'react'

// src/App.tsx
// Modern 1-page portfolio template (React + Vite + Tailwind)
// Temporary Hard Coded Portfolio Website

const PROFILE = {
  name: "Daniel Liu",
  headline:
    "Penultimate-year BCompSc (Hons) @ UTS · Frontend Developer · UI/UX (Interaction Design) · Open to Internships",
  location: "Sydney, NSW, Australia",
  email: "dl56386994@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-liu-987b27252/",
    github: "https://github.com/", // <-- put your GitHub profile link
    resume: "#", // <-- add your resume link later (Google Drive / PDF)
  },
  about: [
    "I build modern web and mobile experiences that combine frontend engineering with user-centred design.",
    "My work spans React + TypeScript, UI systems, and API-driven apps, with a focus on clean UX and polish.",
  ],
  highlights: [
    { label: "React + TypeScript", value: "Primary stack" },
    { label: "UI/UX", value: "Interaction Design major" },
    { label: "Open to", value: "Internships & part-time roles" },
  ],
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Azure",
    "Figma",
    "SQL",
    "C#",
    "Java",
  ],
  projects: [
    {
      title: "EduMap",
      tag: "Capstone / UI/UX",
      description:
        "Student-focused web platform with onboarding flows and interactive modules. Built with React + Tailwind and a focus on user-centred design.",
      tech: ["React", "TypeScript", "Tailwind", "Azure", "Figma"],
      links: {
        live: "#",
        code: "#",
        caseStudy: "#",
      },
    },
    {
      title: "Spoti-List",
      tag: "Personal Project",
      description:
        "Spotify playlist analytics dashboard. Visualises playlist insights with reusable components and charts.",
      tech: ["React", "Tailwind", "Node.js", "Azure"],
      links: {
        live: "#",
        code: "#",
        caseStudy: "#",
      },
    },
    {
      title: "Freshify (Online Grocery Website)",
      tag: "Full-stack",
      description:
        "E-commerce site with product search, categories, cart, checkout flow, and order confirmation.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      links: {
        live: "#",
        code: "#",
        caseStudy: "#",
      },
    },
  ],
  experience: [
    {
      role: "Independent Software Developer",
      org: "Self-employed",
      time: "Jan 2022 — Present",
      points: [
        "Built and iterated on personal and university projects with a focus on clean UX.",
        "Developed reusable UI components and improved responsiveness and accessibility.",
      ],
    },
    {
      role: "Team Member",
      org: "Woolworths Supermarkets",
      time: "Sep 2019 — Oct 2019",
      points: [
        "Customer-facing support in a fast-paced environment.",
        "Maintained stock, organisation, and operational efficiency.",
      ],
    },
  ],
  education: [
    {
      org: "University of Technology Sydney (UTS)",
      detail: "Bachelor of Computing Science (Honours) — Interaction Design (UI/UX)",
      time: "Feb 2023 — Dec 2026",
    },
  ],
};

function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      {children}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70";
  const styles =
    variant === "primary"
      ? "bg-sky-500 text-zinc-950 hover:bg-sky-400"
      : "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10";
  return (
    <a className={classNames(base, styles)} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-white/10" />;
}

function Nav() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight text-zinc-100">
          {PROFILE.name}
        </a>
        <nav className="hidden gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href={PROFILE.links.linkedin} variant="secondary">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={PROFILE.links.github} variant="secondary">
            GitHub
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7">
      <div className="absolute -top-24 right-[-120px] h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute -bottom-28 left-[-120px] h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>{PROFILE.location}</Pill>
            <Pill>Open to internships</Pill>
            <Pill>React · TypeScript · UI/UX</Pill>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            {PROFILE.headline}
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            {PROFILE.about.join(" ")}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={PROFILE.links.resume}>View Resume</ButtonLink>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              View Projects
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Contact
            </a>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {PROFILE.highlights.map((h) => (
              <Card key={h.label}>
                <div className="text-xs text-zinc-400">{h.label}</div>
                <div className="mt-1 text-sm font-medium text-zinc-100">{h.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I’ve built — swap links + add screenshots later."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {PROFILE.projects.map((p) => (
          <Card key={p.title} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-zinc-100">{p.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <ButtonLink href={p.links.live} variant="secondary">
                Live
              </ButtonLink>
              <ButtonLink href={p.links.code} variant="secondary">
                Code
              </ButtonLink>
              <ButtonLink href={p.links.caseStudy} variant="secondary">
                Case study
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Keep this tight — only list what you’re happy to be interviewed on."
    >
      <Card>
        <div className="flex flex-wrap gap-2">
          {PROFILE.skills.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Card>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Short, impact-focused bullets.">
      <div className="grid gap-4">
        {PROFILE.experience.map((e) => (
          <Card key={`${e.role}-${e.org}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-zinc-100">{e.role}</div>
                <div className="text-sm text-zinc-300">{e.org}</div>
              </div>
              <div className="text-xs text-zinc-400">{e.time}</div>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {PROFILE.education.map((ed) => (
          <Card key={ed.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-zinc-100">{ed.org}</div>
                <div className="mt-1 text-sm text-zinc-300">{ed.detail}</div>
              </div>
              <div className="text-xs text-zinc-400">{ed.time}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Fastest way to reach me is email or LinkedIn."
    >
      <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold text-zinc-100">Let’s build something.</div>
          <div className="mt-1 text-sm text-zinc-300">
            Email:{" "}
            <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href={PROFILE.links.linkedin}>LinkedIn</ButtonLink>
          <ButtonLink href={PROFILE.links.github} variant="secondary">
            GitHub
          </ButtonLink>
        </div>
      </Card>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-zinc-500">
      <p>
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Vite + Tailwind.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Hero />

        <Divider />

        <Section id="about" title="About">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                {PROFILE.about.join(" ")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Frontend</Pill>
                <Pill>UI/UX</Pill>
                <Pill>React + TS</Pill>
                <Pill>Design systems</Pill>
              </div>
            </Card>

            <Card>
              <div className="text-xs text-zinc-400">Quick links</div>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
                <a
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
                <a
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                  href={`mailto:${PROFILE.email}`}
                >
                  Email →
                </a>
              </div>
            </Card>
          </div>
        </Section>

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
