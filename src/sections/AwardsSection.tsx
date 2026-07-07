import { useState } from "react";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Reveal } from "../components/ui/Reveal";
import { PROFILE } from "../data/userProfile";

function AwardImage({ src, caption }: { src: string; caption?: string }) {
  const [ok, setOk] = useState(true);

  return (
    <figure className="mb-5 block break-inside-avoid overflow-hidden border border-zinc-300/60 bg-[#faf7f0]">
      {ok ? (
        <img
          src={src}
          alt={caption ?? "Award photo"}
          loading="lazy"
          onError={() => setOk(false)}
          className="w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      ) : (
        <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 bg-[#ece5d8] text-zinc-400">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M4 8a2 2 0 0 1 2-2h1.5l1-2h5l1 2H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
          <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.14em]">Add photo</span>
        </div>
      )}
      {caption && (
        <figcaption className="px-4 py-3 text-xs leading-relaxed text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Awards() {
  return (
    <Section id="awards">
      <SectionHeader
        eyebrow="Recognition"
        title="Honours & Awards"
        description="Moments where my work was recognised and put in front of an audience."
      />

      <div className="flex flex-col gap-16">
        {PROFILE.awards.map((award) => (
          <Reveal key={award.title}>
            <div className="grid gap-10 md:grid-cols-5 md:gap-14">
              {/* details */}
              <div className="md:col-span-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                    {award.event}
                  </span>
                  <span className="text-xs text-zinc-400">· {award.date}</span>
                </div>
                <h3 className="mt-3 text-2xl font-medium leading-snug text-zinc-900">
                  {award.title}
                </h3>
                {"team" in award && award.team && (
                  <p className="mt-2 text-sm text-zinc-500">{award.team}</p>
                )}
                <div className="mt-4 space-y-3">
                  {award.description.map((para) => (
                    <p key={para} className="text-base leading-relaxed text-zinc-600">
                      {para}
                    </p>
                  ))}
                </div>
                {award.tags && award.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {award.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-zinc-300 px-2.5 py-1 text-xs text-zinc-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* photo gallery — masonry keeps portrait & landscape uncropped */}
              <div className="md:col-span-3">
                <div className="columns-1 gap-5 sm:columns-2">
                  {award.images.map((img) => (
                    <AwardImage key={img.src} src={img.src} caption={img.caption} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
