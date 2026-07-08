import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { FeatureItem } from "../components/ui/FeatureItem";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title="Skills" />
      <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
        {PROFILE.skills.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <FeatureItem
              shape={s.shape}
              title={s.title}
              description={s.description}
              items={s.items}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
