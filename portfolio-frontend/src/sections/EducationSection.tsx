import { Section } from "../components/ui/Section";
import { PROFILE } from "../data/userProfile";
import { Card } from "../components/ui/Card";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {PROFILE.education.map((ed) => (
          <Card key={ed.org}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-zinc-100">{ed.org}</div>
                <div className="mt-1 text-sm text-zinc-300">{ed.details}</div>
              </div>
              <div className="text-xs text-zinc-400">{ed.time}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}