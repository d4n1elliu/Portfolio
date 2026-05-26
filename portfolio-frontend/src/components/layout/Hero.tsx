import { PROFILE } from "../../data/userProfile";

export function Hero() {
  return (
    <section className="px-8 pb-0 pt-10 md:px-16">
      <h1
        className="font-light leading-none tracking-tight text-zinc-900"
        style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)", fontWeight: 300 }}
      >
        Full Stack Developer
      </h1>

      <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-base font-medium text-zinc-900">{PROFILE.name}</p>
          <p className="mt-1 whitespace-nowrap text-sm text-zinc-500">
            {PROFILE.location} · Seeking Graduate Roles & Summer Internships
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="border border-zinc-300 px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href="#projects"
            className="bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
