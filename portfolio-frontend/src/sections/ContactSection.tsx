import { Section } from "../components/ui/Section";
import { ButtonLink } from "../components/ui/ButtonLink";
import { PROFILE } from "../data/userProfile";

export function Contact() {
  return (
    <Section id="contact" alt>
      <h2
        className="font-light leading-none tracking-tight text-zinc-900"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 300 }}
      >
        Let's build something.
      </h2>

      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-500">Fastest way to reach me</p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-1 block text-base font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600"
          >
            {PROFILE.email}
          </a>
        </div>
        <div className="flex gap-4">
          <ButtonLink href={PROFILE.links.linkedin}>LinkedIn</ButtonLink>
          <ButtonLink href={PROFILE.links.github} variant="secondary">GitHub</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
