import { PROFILE } from "../../data/userProfile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-8 py-8 md:px-16">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p className="text-xs text-zinc-400">Built with React + Vite + Tailwind</p>
      </div>
    </footer>
  );
}
