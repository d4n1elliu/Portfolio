import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TimelineRow } from "../components/ui/TimelineRow";
import { PROFILE } from "../data/userProfile";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader title="Education" />
      <div className="divide-y divide-zinc-200">
        {PROFILE.education.map((ed) => (
          <TimelineRow
            key={ed.org}
            period={ed.time}
            title={ed.org}
            subtitle={ed.details}
          />
        ))}
      </div>
    </Section>
  );
}
