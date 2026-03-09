import { Section } from "../components/ui/Section";
import { PROFILE } from "../data/userProfile";
import { Card } from "../components/ui/Card";
import { Pill } from "../components/ui/Pill";
import { ButtonLink } from "../components/ui/ButtonLink";

// Creating responsive grid of project cards using data from PROFILE.projects.
// Each card displays:
// Project title
// Project tag/category
// Short description
// Technology stack
// External project link
export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I’ve built — swap links + add screenshots later."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {PROFILE.projects.map((p) => (
          <Card key={p.title} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-zinc-100">{p.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              <ButtonLink href={p.links.link} variant="secondary">
                Link
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}