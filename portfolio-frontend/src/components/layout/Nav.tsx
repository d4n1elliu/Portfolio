import { PROFILE } from "../../data/userProfile";

export function Nav() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f8f5ef]">
      <div className="flex items-center justify-between px-8 py-4 md:px-16">
        <a href="#top" className="text-sm font-medium tracking-wide text-zinc-900">
          {PROFILE.name}
        </a>
        <nav className="hidden gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={PROFILE.links.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-none bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
