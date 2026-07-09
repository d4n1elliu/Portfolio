import { PROFILE } from "../../data/userProfile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-8 py-8 md:px-16">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-sm text-zinc-600">
          © 2025–{new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript &amp; TailwindCSS.
        </p>
        <div className="flex items-center gap-6">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
            GitHub
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
            LinkedIn
          </a>
          <a href="#top" className="text-sm text-zinc-600 transition-colors hover:text-zinc-900">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
