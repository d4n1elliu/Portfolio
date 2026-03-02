export const PROFILE = {
    name: "Daniel Liu",
    headline:
        "Penultimate-year BCompSc (Hons) @ UTS · FullStack Developer · IOS Engineer · UI/UX (Interaction Design) · Open to Internships",
    location: "Sydney, NSW, Australia",
    email: "dl56386994@gmail.com",
    links: {
        linkedin: "https://www.linkedin.com/in/daniel-liu-987b27252/",
        github: "https://github.com/d4n1elliu", // <-- put your GitHub profile link
        resume: "./Daniel-Liu-Resume-2025.pdf", // <-- add your resume link later (Google Drive / PDF)
    },
    about: [
        "I build modern web and mobile experiences that combine frontend engineering with user-centred design.",
        "I build modern, scalable web applications with clean architecture and intuitive user experiences.",
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
        "Canva",
    ],

    // Projects sections
    projects: [
        {
            title: "EduMap",
            tag: "Capstone / UI/UX",
            description:
                "Student-focused web platform with onboarding flows and interactive modules. Built with React + Tailwind and a focus on user-centred design.",
            tech: ["React", "TailwindCSS", "Javascript", "Microsoft Azure", "PostgreSQL", "Python"],
            links: {
                link: "https://github.com/d4n1elliu/EduMap",
                },
            },
        {
            title: "Spoti-List",
            tag: "Personal Project",
            description:
                "Spotify playlist analytics dashboard. Visualises playlist insights with reusable components and charts.",
            tech: ["React", "TailwindCSS", "TypeScript", "Node.js", "Microsoft Azure"],
            links: {
                link: "https://github.com/d4n1elliu/Spoti-list",
            },
        },
        {
            title: "Freshify (Online Grocery Website)",
            tag: "Personal Project",
            description:
                "E-commerce site with product search, categories, cart, checkout flow, and order confirmation.",
            tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
            links: {
                link: "https://github.com/d4n1elliu/Freshify",
            },
        },
    ],

   // Experience sections
    experience: [
    {
        role: "Independent Software Developer",
        org: "Self-employed",
        time: "Feb 2023 — Present",
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
        details: "Bachelor of Computing Science (Honours) — Interaction Design (UI/UX)",
        time: "Feb 2023 — Dec 2026",
    },
    {
        org: "UTS College",
        details: "Diploma of Information Technology",
        time: "Mar 2022 - Dec 2022",
    },
  ],
} as const;