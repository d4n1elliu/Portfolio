export const PROFILE = {
  name: "Daniel Liu",
  headline: "Full-Stack Developer",
  tagline:
    "Final-year Computer Science (Honours) student at UTS building fast, well-designed web applications with React, TypeScript and .NET.",
  location: "Sydney, NSW, Australia",
  email: "ziyangliu2.work@gmail.com",
  availability: "Open to 2027 graduate roles & summer internships",
  links: {
    linkedin: "https://www.linkedin.com/in/daniel-liu-987b27252/",
    github: "https://github.com/d4n1elliu",
    resume: "/Daniel-Liu-CV.pdf",
  },

  avatar: "/images/profile.jpg",

  about: [
    "I'm a final-year Computer Science (Honours) student at UTS with a strong interest in full-stack development and interaction design. I enjoy building modern web applications that are both technically solid and thoughtfully designed.",
    "My recent work spans React + TypeScript front-ends, ASP.NET Core back-ends and deployments on Azure with CI/CD pipelines. I care about clean, maintainable code and interfaces that feel intuitive — I'm especially drawn to roles where engineering and design intersect.",
  ],

  // Quick-scan panel shown in the About section (works with or without a photo).
  atAGlance: [
    { label: "Based in", value: "Sydney, Australia" },
    { label: "Focus", value: "Full-stack web & interaction design" },
    { label: "Core stack", value: "React · TypeScript · .NET · Azure" },
    { label: "Education", value: "BCompSci (Hons), UTS — 2026" },
    { label: "Status", value: "Open to grad roles & internships" },
  ],

  skills: [
    {
      shape: "circle" as const,
      title: "Frontend Development",
      description:
        "Building fast, accessible and visually polished user interfaces.",
      items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "SwiftUI"],
    },
    {
      shape: "square" as const,
      title: "Backend & Cloud",
      description:
        "Designing scalable APIs and deploying production applications with CI/CD.",
      items: ["ASP.NET Core", "Node.js", "C#", "PostgreSQL", "Azure", "Docker"],
    },
    {
      shape: "triangle" as const,
      title: "UI/UX Design",
      description:
        "Crafting user-centred experiences grounded in UTS's Interaction Design curriculum.",
      items: ["Figma", "Canva", "Interaction Design", "Prototyping"],
    },
  ],

  projects: [
    {
      title: "Soleri",
      tag: "Personal Project",
      year: "2025 – 2026",
      description:
        "A personal Spotify analytics dashboard powered by the Spotify API — listening heatmaps, discovery-rate charts, marathon tracking, artist obsession phases and a Billboard Hot 100 comparison. OAuth handled via Vercel serverless functions.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Spotify API", "Node.js", "Vercel"],
      links: { website: "https://soleri.vercel.app/" },
      featured: true as const,
      comingSoon: false as const,
    },
    {
      title: "EduMap",
      tag: "Capstone Project",
      year: "2025",
      description:
        "A high-fidelity web platform helping incoming university students transition into degree life — a course-matching questionnaire, an events & networking map and a buddy program. React + Tailwind front-end with an ASP.NET Core API on Azure.",
      tech: ["React", "Tailwind CSS", "ASP.NET Core", "PostgreSQL", "Azure", "CI/CD"],
      links: {
        github: "https://github.com/d4n1elliu/EduMap",
        demo: "https://www.youtube.com/watch?v=wZ4FTTmbc1Q",
      },
      featured: true as const,
      comingSoon: false as const,
    },
    {
      title: "MemeSOL",
      tag: "Group Project",
      year: "2026",
      description:
        "A full-stack iOS cryptocurrency wallet built with SwiftUI and ASP.NET Core that lets users create and manage custom meme coins — secure auth, QR-code transfers and transaction tracking, built collaboratively via Git.",
      tech: ["Swift", "SwiftUI", ".NET", "PostgreSQL", "Docker", "CI/CD"],
      links: {
        website: "https://memesol.daniel-liu.dev",
        demo: "https://youtu.be/1JZuNkn7EKY",
      },
      comingSoon: false as const,
    },
    {
      title: "Bubble Pop",
      tag: "Personal Project",
      year: "2026",
      description:
        "A casual iOS mini-game in Swift — SwiftUI navigation with SpriteKit physics, a colour-weighted scoring system, combo multipliers and a persistent SwiftData leaderboard that scales across iPhone and iPad.",
      tech: ["Swift", "SwiftUI", "SpriteKit", "SwiftData"],
      links: {
        github: "https://github.com/d4n1elliu/Bubble-Pop",
        demo: "https://youtu.be/Rp7rezuPVnk",
      },
      comingSoon: false as const,
    },
  ],

  experience: [
    {
      role: "Software Developer (Self-Taught)",
      org: "Independent Development",
      time: "Feb 2022 - Present",
      points: [
        "Built and iterated on personal and university projects with a focus on clean UX.",
        "Developed reusable UI components and improved responsiveness and accessibility.",
      ],
    },
  ],

  education: [
    {
      org: "University of Technology Sydney (UTS)",
      details: "Bachelor of Computing Science (Honours) - Interaction Design (UI/UX)",
      time: "Feb 2023 - Dec 2026",
    },
    {
      org: "UTS College",
      details: "Diploma of Information Technology",
      time: "Mar 2022 - Dec 2022",
    },
  ],

  // Honours, awards and recognition. Drop photos into /public/images/awards/
  // and reference them below — missing images fall back to a placeholder tile.
  awards: [
    {
      title: "Selected to Showcase MemeSOL",
      event: "UTS TechFest 2026 · Software Category",
      date: "2026",
      team: "With Sun Kim, Gurpreet Kaur & Ineshka De Mel",
      description:
        "Selected to present MemeSOL — a full-stack iOS crypto wallet that lets anyone create custom meme coins with no coding — in the Software category at UTS TechFest 2026, powered by the UTS Faculty of Engineering & IT. Demoed the app live to industry guests, academics and fellow students.",
      tags: ["MemeSOL", "UTS TechFest", "Software Category", "SwiftUI", "ASP.NET"],
      images: [
        { src: "/images/awards/banner.jpeg", caption: "UTS TechFest 2026, powered by the Faculty of Engineering & IT" },
        { src: "/images/awards/projectShowcase.jpeg", caption: "The MemeSOL stand in the Software category" },
        { src: "/images/awards/presenters.jpeg", caption: "Demoing MemeSOL live to attendees" },
        { src: "/images/awards/members.jpeg", caption: "The MemeSOL team" },
      ],
    },
  ],
} as const;
