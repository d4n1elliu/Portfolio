import { useEffect, useState } from "react";
import { PROFILE } from "../../data/userProfile";

const items = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#f8f5ef]/90 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-zinc-200 shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4 md:px-16">
        <a href="#top" className="font-display text-lg font-medium tracking-tight text-zinc-900">
          {PROFILE.name}
        </a>

        {/* desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                active === item.href
                  ? "text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 sm:inline-block"
          >
            Resume
          </a>

          {/* mobile hamburger */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <nav className="border-t border-zinc-200 bg-[#f8f5ef] px-8 pb-4 pt-2 md:hidden">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 block bg-zinc-900 px-5 py-3 text-center text-sm font-medium text-white"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
