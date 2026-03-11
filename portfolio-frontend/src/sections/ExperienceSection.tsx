import { Section } from "../components/ui/Section";
import { PROFILE } from "../data/userProfile";
import { Card } from "../components/ui/Card";

// Description for all work experiences/side projects
export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Short, impact-focused bullets.">
      <div className="grid gap-4">
        {PROFILE.experience.map((e) => (
          <Card key={`${e.role}-${e.org}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-zinc-100">{e.role}</div>
                <div className="text-sm text-zinc-300">{e.org}</div>
              </div>
              <div className="text-xs text-zinc-400">{e.time}</div>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}