import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { PROFILE } from "../data/userProfile";
import { Pill } from "../components/ui/Pill";

// Displays range of technical skills from PROFILE.SKILLS
// Pill tag is a small UI label that highlights my individual skills & technology usage
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