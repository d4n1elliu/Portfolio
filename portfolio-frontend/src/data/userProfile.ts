export const PROFILE = {
  name: "Daniel Liu",
  headline: "FullStack Developer",
  location: "Sydney, NSW, Australia",
  email: "dl56386994@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-liu-987b27252/",
    github: "https://github.com/d4n1elliu",
    resume: "/Daniel-Liu-2025-Resume.pdf",
  },

  about: [
    "I'm a penultimate year Computer Science (Honours) student at UTS with a strong interest in full-stack development and interaction design. I enjoy building modern web applications that are both technically solid and thoughtfully designed.",
    "My recent work includes React + TypeScript applications, ASP.NET Core backends and deployments on Azure with CI/CD pipelines. I focus on clean, maintainable code and interfaces that feel intuitive with a particular interest in roles where engineering and design intersect.",
  ],

  skills: [
    {
      shape: "circle" as const,
      title: "Frontend Development",
      description: "React, TypeScript, JavaScript, Tailwind CSS — building fast, accessible and visually polished user interfaces.",
    },
    {
      shape: "square" as const,
      title: "Backend & Cloud",
      description: "Node.js, C#, SQL, Azure — designing scalable APIs and deploying production applications with CI/CD pipelines.",
    },
    {
      shape: "triangle" as const,
      title: "UI/UX Design",
      description: "Figma, Canva, Interaction Design — crafting user centred experiences grounded in UTS's Interaction Design curriculum.",
    },
  ],

  projects: [
    {
      title: "EduMap",
      tag: "Capstone Project",
      description:
        "Student-focused web platform with onboarding flows and interactive modules. Built with React + Tailwind and a focus on user-centred design.",
      tech: ["React", "TailwindCSS", "Javascript", "Microsoft Azure", "PostgreSQL", "Python"],
      links: { link: "https://github.com/d4n1elliu/EduMap" },
    },
    {
      title: "Bubble Pop",
      tag: "Personal Project",
      description:
        "A fun interactive bubble-popping game built as a personal project to explore game mechanics and DOM interactions.",
      tech: ["HTML/CSS", "JavaScript"],
      links: { link: "https://github.com/d4n1elliu" },
      comingSoon: false as const,
    },
    {
      title: "Spoti-List",
      tag: "Personal Project",
      description:
        "Spotify playlist analytics dashboard. Visualises playlist insights with reusable components and charts.",
      tech: ["React", "TailwindCSS", "TypeScript", "Node.js", "Microsoft Azure"],
      links: { link: "https://github.com/d4n1elliu/Spoti-list" },
      comingSoon: true as const,
    },
  ],

  experience: [
    {
      role: "Software Developer (Self Taught)",
      org: "Independent Development",
      time: "Feb 2022 — Present",
      points: [
        "Built and iterated on personal and university projects with a focus on clean UX.",
        "Developed reusable UI components and improved responsiveness and accessibility.",
      ],
    },
  ],

  education: [
    {
      org: "University of Technology Sydney (UTS)",
      details: "Bachelor of Computing Science (Honours) — Interaction Design (UI/UX)",
      time: "Feb 2023 — Dec 2026",
    },
    {
      org: "UTS College",
      details: "Diploma of Information Technology",
      time: "Mar 2022 — Dec 2022",
    },
  ],
} as const;
