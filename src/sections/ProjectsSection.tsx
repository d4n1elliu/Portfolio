import { PROFILE } from "../data/userProfile";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" style={{ scrollMarginTop: "5rem" }} className="px-8 pb-20 pt-6 md:px-16">
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
    </section>
  );
}
