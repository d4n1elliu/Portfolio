import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { FeatureItem } from "../components/ui/FeatureItem";
import { PROFILE } from "../data/userProfile";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title="Key Skills" />
      <div className="grid gap-12 md:grid-cols-3">
        {PROFILE.skills.map((s) => (
          <FeatureItem key={s.title} shape={s.shape} title={s.title} description={s.description} />
        ))}
      </div>
    </Section>
  );
}
