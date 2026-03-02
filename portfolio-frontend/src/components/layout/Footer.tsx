import { PROFILE } from "../../data/userProfile";

export function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-zinc-500">
      <p>
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Vite + Tailwind.
      </p>
    </footer>
  );
}