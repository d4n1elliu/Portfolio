import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { TimelineRow } from "../components/ui/TimelineRow";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

export function Education() {
  return (
    <Section id="education" alt>
      <SectionHeader eyebrow="How I got here" title="Education" />
      <div className="border-t border-zinc-200">
        {PROFILE.education.map((ed) => (
          <Reveal key={ed.org}>
            <TimelineRow period={ed.time} title={ed.org} subtitle={ed.details} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
