export const PROFILE = {
  name: "Daniel Liu",
  headline:
    "Penultimate-year BCompSc (Hons) @ UTS · Frontend Developer · UI/UX (Interaction Design) · Open to Internships",
  location: "Sydney, NSW, Australia",
  email: "dl56386994@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-liu-987b27252/",
    github: "https://github.com/d4n1elliu", // <-- put your GitHub profile link
    resume: "./Daniel-Liu-Resume-2025.pdf", // <-- add your resume link later (Google Drive / PDF)
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

  // Projects sections
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

   // Experience sections
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

  // Education sections
  education: [
    {
      org: "University of Technology Sydney (UTS)",
      detail: "Bachelor of Computing Science (Honours) — Interaction Design (UI/UX)",
      time: "Feb 2023 — Dec 2026",
    },
  ],
} as const;