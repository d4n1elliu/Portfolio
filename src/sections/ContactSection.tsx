import { Section } from "../components/ui/Section";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
          Get in touch
        </p>
        <h2
          className="font-display leading-[0.95] tracking-tight text-zinc-900"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 400 }}
        >
          Let's build something.
        </h2>

        <div className="mt-10 flex flex-col gap-8 border-t border-zinc-200 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-600">Fastest way to reach me</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-1 block text-lg font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
            >
              {PROFILE.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={PROFILE.links.linkedin}>LinkedIn</ButtonLink>
            <ButtonLink href={PROFILE.links.github} variant="secondary">
              GitHub
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
