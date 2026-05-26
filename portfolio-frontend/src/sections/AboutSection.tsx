import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ButtonLink } from "../components/ui/ButtonLink";
import { PROFILE } from "../data/userProfile";
import { useState } from "react";

export function About() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Section id="about" alt>
      <SectionHeader title="About Me" />
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="overflow-hidden" style={{ minHeight: "380px" }}>
          {PROFILE.avatar && !imgFailed ? (
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover object-top"
              style={{ minHeight: "380px" }}
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(135deg, #ddd8cc 0%, #c8c0b4 100%)",
                minHeight: "380px",
              }}
            />
          )}
        </div>
        <div className="flex flex-col justify-center gap-6">
          {PROFILE.about.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-zinc-600">
              {paragraph}
            </p>
          ))}
          <ButtonLink href="#contact" className="self-start mt-2">
            Get in Touch
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
