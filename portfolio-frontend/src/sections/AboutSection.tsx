import { useState } from "react";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

export function About() {
  const [imgOk, setImgOk] = useState(true);
  const hasPhoto = Boolean(PROFILE.avatar) && imgOk;

  return (
    <Section id="about" alt>
      <SectionHeader eyebrow="Who I am" title="About" />
      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        {/* text */}
        <Reveal className="md:col-span-3">
          <div className="flex flex-col gap-6">
            {PROFILE.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-zinc-700 md:text-lg">
                {paragraph}
              </p>
            ))}
            <ButtonLink href="#contact" className="mt-2 self-start">
              Get in Touch
            </ButtonLink>
          </div>
        </Reveal>

        {/* at-a-glance / photo */}
        <Reveal className="md:col-span-2" delay={120}>
          <div className="flex flex-col gap-6">
            {hasPhoto && (
              <div className="overflow-hidden border border-zinc-300/60">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  onError={() => setImgOk(false)}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            )}
            <dl className="border border-zinc-300/60 bg-[#faf7f0]">
              {PROFILE.atAGlance.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1 px-5 py-4 ${
                    i !== 0 ? "border-t border-zinc-300/50" : ""
                  }`}
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-medium text-zinc-900">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
