import { PROFILE } from "../../data/userProfile";

export function Hero() {
  return (
    <section className="px-8 pb-0 pt-16 md:px-16">
      <h1
        className="font-light leading-none tracking-tight text-zinc-900"
        style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)", fontWeight: 300 }}
      >
        Full Stack Developer
      </h1>

      <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-base font-medium text-zinc-900">{PROFILE.name}</p>
          <p className="mt-1 max-w-md text-sm text-zinc-500">
            {PROFILE.location} · Open to Internships
          </p>
        </div>
        <a
          href="#projects"
          className="shrink-0 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
