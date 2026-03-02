import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { PROFILE } from "../data/userProfile";
import { Pill } from "../components/ui/Pill";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Keep this tight — only list what you’re happy to be interviewed on."
    >
      <Card>
        <div className="flex flex-wrap gap-2">
          {PROFILE.skills.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </Card>
    </Section>
  );
}