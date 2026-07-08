import { PROFILE } from "../data/userProfile";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function Projects() {
  return (
    <Section id="projects" alt>
      <SectionHeader
        title="Projects"
        description="Visit the live site, browse the code, or watch a demo where available."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {PROFILE.projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 90}>
            <ProjectCard
              title={p.title}
              tag={p.tag}
              year={"year" in p ? p.year : undefined}
              description={p.description}
              tech={[...p.tech]}
              website={"website" in p.links ? p.links.website : undefined}
              github={"github" in p.links ? p.links.github : undefined}
              demo={"demo" in p.links ? p.links.demo : undefined}
              comingSoon={"comingSoon" in p ? p.comingSoon : false}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
