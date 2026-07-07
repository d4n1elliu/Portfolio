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

export function ProjectCard({
  title,
  tag,
  year,
  description,
  tech,
  link,
  comingSoon = false,
}: {
  title: string;
  tag: string;
  year?: string;
  description?: string;
  tech?: string[];
  link: string;
  comingSoon?: boolean;
}) {
  const asset = projectAssets[title] ?? FALLBACK;
  const Wrapper = comingSoon ? "div" : "a";
  const wrapperProps = comingSoon ? {} : { href: link, target: "_blank", rel: "noreferrer" };

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className="group flex h-full flex-col border border-zinc-200/80 bg-[#fbfaf6] transition-all duration-300 hover:border-zinc-900/20 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
    >
      {/* image banner */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ backgroundColor: asset.bgColor ?? "#111" }}
      >
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
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
            {tag}
          </span>
          {year && <span className="text-xs text-zinc-400">{year}</span>}
        </div>

        <h3 className="mt-2 text-2xl font-medium text-zinc-900">{title}</h3>

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">{description}</p>
        )}

        {tech && tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="border border-zinc-300 px-2.5 py-1 text-xs text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {!comingSoon && (
          <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-zinc-900">
            View project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>
    </Wrapper>
  );
}
