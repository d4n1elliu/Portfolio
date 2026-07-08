import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TimelineRow } from "../components/ui/TimelineRow";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" />
      <div className="border-t border-zinc-200">
        {PROFILE.experience.map((e) => (
          <Reveal key={`${e.role}-${e.org}`}>
            <TimelineRow
              period={e.time}
              title={e.role}
              subtitle={e.org}
              bullets={e.points}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
