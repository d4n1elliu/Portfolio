import { ButtonLink } from "../../components/ui/ButtonLink";
import { PROFILE } from "../../data/userProfile";

export function Nav() {
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
          <ButtonLink href={PROFILE.links.resume} variant="secondary">
            View Resume
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
