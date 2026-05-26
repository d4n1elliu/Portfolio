import { PROFILE } from "../../data/userProfile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-8 py-6 md:px-16">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <p className="text-sm text-zinc-500">
          © 2025–{new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <a
          href="#top"
          className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
