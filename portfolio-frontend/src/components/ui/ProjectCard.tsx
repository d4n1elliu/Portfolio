const projectAssets: Record<string, { image?: string; gradient: string; contain?: boolean; bgColor?: string }> = {
  EduMap: {
    image: "/images/edumap.png",
    gradient: "linear-gradient(135deg, #c8b8e8 0%, #f0d080 60%, #e8c870 100%)",
    contain: true,
    bgColor: "#1a1008",
  },
  "Bubble Pop": {
    image: "/images/bubblepop.png",
    gradient: "linear-gradient(135deg, #a8c8f0 0%, #78a8e0 50%, #5890d0 100%)",
    contain: true,
    bgColor: "#0d1520",
  },
  Soleri: {
    image: "/images/soleri.png",
    gradient: "linear-gradient(135deg, #1db954 0%, #158a3e 50%, #0d5c2a 100%)",
    contain: true,
    bgColor: "#111111",
  },
  MemeSOL: {
    image: "/images/memesol.png",
    gradient: "linear-gradient(135deg, #f5c518 0%, #c47d00 50%, #7a4500 100%)",
    contain: true,
    bgColor: "#050505",
  },
};

const FALLBACK_GRADIENT = "linear-gradient(135deg, #aaaaaa 0%, #666666 100%)";

export function ProjectCard({
  title,
  tag,
  link,
  comingSoon = false,
}: {
  title: string;
  tag: string;
  link: string;
  comingSoon?: boolean;
}) {
  const asset = projectAssets[title] ?? { gradient: FALLBACK_GRADIENT };
  const Wrapper = comingSoon ? "div" : "a";
  const wrapperProps = comingSoon
    ? {}
    : { href: link, target: "_blank", rel: "noreferrer" };

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className="group relative block overflow-hidden"
      style={{ height: "380px" }}
    >
      {asset.contain && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: asset.bgColor ?? "#111111" }}
        />
      )}
      {asset.image ? (
        <img
          src={asset.image}
          alt={title}
          className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 ${asset.contain ? "object-contain p-10" : "object-cover"}`}
          style={{ filter: "grayscale(60%) brightness(55%) contrast(1.1)" }}
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: asset.gradient, filter: comingSoon ? "brightness(40%)" : "brightness(70%)" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="border border-white/30 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white/60">
            In Progress
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 p-8">
        <span className="text-xs font-medium uppercase tracking-widest text-white/60">
          {tag}
        </span>
        <h3 className="mt-1 text-2xl font-light text-white">{title}</h3>
      </div>
    </Wrapper>
  );
}
