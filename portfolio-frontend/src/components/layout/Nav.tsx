import { useState } from "react";
import { PROFILE } from "../../data/userProfile";

export function Nav() {
  const [open, setOpen] = useState(false);

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

        {/* desktop nav */}
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

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-none bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Resume
          </a>

          {/* mobile hamburger */}
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-900 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
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
        </nav>
      )}
    </header>
  );
}
