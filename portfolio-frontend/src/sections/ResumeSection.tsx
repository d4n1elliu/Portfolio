import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ButtonLink } from "../components/ui/ButtonLink";
import { PROFILE } from "../data/userProfile";

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeader
        title="Resume"
        action={<ButtonLink href={PROFILE.links.resume} download>Download PDF</ButtonLink>}
      />
      <div className="w-full overflow-hidden border border-zinc-200" style={{ height: "80vh" }}>
        <iframe
          src={`${PROFILE.links.resume}#view=FitH`}
          title="Daniel Liu Resume"
          className="h-full w-full"
          style={{ border: "none" }}
        />
      </div>
    </Section>
  );
}
