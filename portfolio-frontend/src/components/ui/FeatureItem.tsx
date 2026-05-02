type ShapeType = "circle" | "square" | "triangle";

function Shape({ type }: { type: ShapeType }) {
  if (type === "circle") return <div className="h-10 w-10 rounded-full bg-zinc-900" />;
  if (type === "square") return <div className="h-10 w-10 bg-zinc-900" />;
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderBottom: "40px solid #1a1a1a",
      }}
    />
  );
}

export function FeatureItem({
  shape,
  title,
  description,
}: {
  shape: ShapeType;
  title: string;
  description: string;
}) {
  return (
    <div>
      <Shape type={shape} />
      <h3 className="mt-8 text-xl font-normal text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}
