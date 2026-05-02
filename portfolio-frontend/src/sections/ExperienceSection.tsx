import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TimelineRow } from "../components/ui/TimelineRow";
import { PROFILE } from "../data/userProfile";

export function Experience() {
  return (
    <Section id="experience" alt>
      <SectionHeader title="Experience" />
      <div className="divide-y divide-zinc-300">
        {PROFILE.experience.map((e) => (
          <TimelineRow
            key={`${e.role}-${e.org}`}
            period={e.time}
            title={e.role}
            subtitle={e.org}
            bullets={e.points}
          />
        ))}
      </div>
    </Section>
  );
}
