import { PROFILE } from "../data/userProfile";
import { ProjectCard } from "../components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mt-10 px-8 md:px-16">
      <div className="grid gap-4 md:grid-cols-2">
        {PROFILE.projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            tag={p.tag}
            link={p.links.link}
            comingSoon={"comingSoon" in p ? p.comingSoon : false}
          />
        ))}
      </div>
    </section>
  );
}
