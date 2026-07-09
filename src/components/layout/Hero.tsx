import { PROFILE } from "../../data/userProfile";

export function Hero() {
  return (
    <section className="px-8 py-16 md:px-16 md:py-24">
      {/* availability pill */}
      <div className="reveal is-visible flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
          {PROFILE.availability}
        </span>
      </div>

      <h1
        className="font-display mt-7 break-words leading-[0.92] tracking-tight text-zinc-900"
        style={{ fontSize: "clamp(2.5rem, 8.5vw, 8rem)", fontWeight: 400 }}
      >
        {PROFILE.headline}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
        {PROFILE.tagline}
      </p>

      <div className="mt-10 flex flex-col items-start gap-6 border-t border-zinc-200/80 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-zinc-900">{PROFILE.name}</p>
          <p className="mt-1 text-sm text-zinc-600">{PROFILE.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            View Projects
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
