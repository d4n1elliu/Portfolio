import { useEffect, useState } from "react";

const projectAssets: Record<string, { image?: string; gradient: string; bgColor?: string }> = {
  EduMap: {
    image: "/images/edumap.png",
    gradient: "linear-gradient(135deg, #c8b8e8 0%, #f0d080 60%, #e8c870 100%)",
    bgColor: "#1a1008",
  },
  "Bubble Pop": {
    image: "/images/bubblepop.png",
    gradient: "linear-gradient(135deg, #a8c8f0 0%, #78a8e0 50%, #5890d0 100%)",
    bgColor: "#0d1520",
  },
  Soleri: {
    image: "/images/soleri.png",
    gradient: "linear-gradient(135deg, #1db954 0%, #158a3e 50%, #0d5c2a 100%)",
    bgColor: "#111111",
  },
  MemeSOL: {
    image: "/images/memesol.svg",
    gradient: "linear-gradient(135deg, #f5c518 0%, #c47d00 50%, #7a4500 100%)",
    bgColor: "#050505",
  },
};

const FALLBACK = { gradient: "linear-gradient(135deg, #aaaaaa 0%, #666666 100%)", bgColor: "#222" };

/** Extract the video id from any YouTube watch / short / embed URL. */
function youTubeId(url: string): string | null {
  const watch = url.match(/[?&]v=([\w-]+)/);
  const short = url.match(/youtu\.be\/([\w-]+)/);
  const embed = url.match(/youtube\.com\/embed\/([\w-]+)/);
  return watch?.[1] ?? short?.[1] ?? embed?.[1] ?? null;
}

/**
 * Build the embed src. Passing an explicit `origin` avoids YouTube's
 * "Error 153 – Video player configuration error" that occurs when the
 * embedding origin can't be resolved.
 */
function embedSrc(id: string): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const params = new URLSearchParams({ rel: "0", autoplay: "1", playsinline: "1" });
  if (origin) params.set("origin", origin);
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" strokeLinecap="round" />
  </svg>
);

const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 5.5v13a1 1 0 0 0 1.52.85l10.5-6.5a1 1 0 0 0 0-1.7L8.52 4.65A1 1 0 0 0 7 5.5Z" />
  </svg>
);

const BTN_BASE =
  "inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors";

export function ProjectCard({
  title,
  tag,
  year,
  description,
  tech,
  website,
  github,
  demo,
  comingSoon = false,
}: {
  title: string;
  tag: string;
  year?: string;
  description?: string;
  tech?: string[];
  website?: string;
  github?: string;
  demo?: string;
  comingSoon?: boolean;
}) {
  const asset = projectAssets[title] ?? FALLBACK;
  const videoId = demo ? youTubeId(demo) : null;
  const [open, setOpen] = useState(false);

  // Close on Escape. We intentionally do NOT lock body scroll so the page
  // stays scrollable while the demo is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const openDemo = () => {
    if (videoId) setOpen(true);
    else if (demo) window.open(demo, "_blank", "noreferrer");
  };

  return (
    <div className="group flex h-full flex-col border border-zinc-200/80 bg-[#fbfaf6] transition-all duration-300 hover:border-zinc-900/20 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
      {/* image banner */}
      <div className="relative h-52 overflow-hidden" style={{ backgroundColor: asset.bgColor ?? "#111" }}>
        {asset.image ? (
          <img
            src={asset.image}
            alt={`${title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105"
            style={{ filter: comingSoon ? "grayscale(100%) brightness(45%)" : "none" }}
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{ background: asset.gradient }}
          />
        )}

        {comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="border border-white/30 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/70">
              In Progress
            </span>
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">{tag}</span>
          {year && <span className="text-xs text-zinc-400">{year}</span>}
        </div>

        <h3 className="mt-2 text-2xl font-medium text-zinc-900">{title}</h3>

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{description}</p>
        )}

        {tech && tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="border border-zinc-300 px-2.5 py-1 text-xs text-zinc-600">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* action buttons — always two options; unavailable ones are greyed out */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className={`${BTN_BASE} bg-zinc-900 text-white hover:bg-zinc-700`}
            >
              <GlobeIcon />
              View website
            </a>
          ) : (
            <span
              className={`${BTN_BASE} cursor-not-allowed border border-zinc-200 text-zinc-300`}
              aria-disabled="true"
              title="No live site available"
            >
              <GlobeIcon />
              View website
            </span>
          )}

          {demo ? (
            <button
              type="button"
              onClick={openDemo}
              className={`${BTN_BASE} border border-zinc-300 text-zinc-800 hover:border-zinc-900 hover:bg-zinc-100`}
            >
              <PlayIcon />
              Watch demo
            </button>
          ) : (
            <span
              className={`${BTN_BASE} cursor-not-allowed border border-zinc-200 text-zinc-300`}
              aria-disabled="true"
              title="Demo coming soon"
            >
              <PlayIcon />
              Watch demo
            </span>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} on GitHub`}
              title="View source on GitHub"
              className="ml-auto flex h-9 w-9 items-center justify-center border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-900 hover:bg-zinc-100 hover:text-zinc-900"
            >
              <GithubIcon size={17} />
            </a>
          )}
        </div>
      </div>

      {/* demo video lightbox — page stays scrollable behind it */}
      {open && videoId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} demo video`}
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="absolute -top-11 right-0 flex items-center gap-5">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Open on YouTube ↗
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close video"
                className="flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
              >
                Close
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="aspect-video w-full overflow-hidden bg-black shadow-2xl">
              <iframe
                src={embedSrc(videoId)}
                title={`${title} demo video`}
                className="h-full w-full"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
