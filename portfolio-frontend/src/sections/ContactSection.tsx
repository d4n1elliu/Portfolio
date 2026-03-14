import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { PROFILE } from "../data/userProfile";
import { ButtonLink } from "../components/ui/ButtonLink";

// Contact section displaying email and social links (LinkedIn, GitHub) for users to reach out.
export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Fastest way to reach me is email or LinkedIn."
    >
      <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold text-zinc-100">Let’s build something.</div>
          <div className="mt-1 text-sm text-zinc-300">
            Email:{" "}
            <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href={PROFILE.links.linkedin}>LinkedIn</ButtonLink>
          <ButtonLink href={PROFILE.links.github} variant="secondary">
            GitHub
          </ButtonLink>
        </div>
      </Card>
    </Section>
  );
}