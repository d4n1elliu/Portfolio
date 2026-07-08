import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ButtonLink } from "../components/ui/ButtonLink";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeader title="Résumé" />
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 border border-zinc-200 bg-[#f0ebe0] p-8 md:flex-row md:items-center md:p-10">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-zinc-900 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-zinc-900">Daniel Liu — Résumé 2026</p>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-zinc-600">
                A concise overview of my experience, projects and education. Open it in a
                new tab or download the PDF.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href={PROFILE.links.resume} newTab>View résumé</ButtonLink>
            <ButtonLink href={PROFILE.links.resume} variant="secondary" download>
              Download PDF
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
