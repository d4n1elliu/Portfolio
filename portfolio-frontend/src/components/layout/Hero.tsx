import { Pill } from "../ui/Pill";
import { ButtonLink } from "../ui/ButtonLink";
import { PROFILE } from "../../data/userProfile";
import { Card } from "../ui/Card";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7">
      <div className="absolute -top-24 right-[-120px] h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute -bottom-28 left-[-120px] h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>{PROFILE.location}</Pill>
            <Pill>Open to internships</Pill>
            <Pill>React · TypeScript · UI/UX</Pill>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            {PROFILE.headline}
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            {PROFILE.about.join(" ")}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={PROFILE.links.resume}>View Resume</ButtonLink>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              View Projects
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Contact
            </a>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {PROFILE.highlights.map((h) => (
              <Card key={h.label}>
                <div className="text-xs text-zinc-400">{h.label}</div>
                <div className="mt-1 text-sm font-medium text-zinc-100">{h.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
