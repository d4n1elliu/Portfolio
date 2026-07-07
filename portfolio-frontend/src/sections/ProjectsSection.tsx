import { PROFILE } from "../data/userProfile";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" style={{ scrollMarginTop: "5rem" }} className="px-8 pb-20 pt-6 md:px-16">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects"
        description="A selection of full-stack and mobile projects — the tech, the problem and a link to each."
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
              link={p.links.link}
              comingSoon={"comingSoon" in p ? p.comingSoon : false}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
