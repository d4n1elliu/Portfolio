type ShapeType = "circle" | "square" | "triangle";

function Icon({ type }: { type: ShapeType }) {
  if (type === "circle") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="4" fill="#18181b"/>
        <path d="M11 15l5 5-5 5M20 25h9" stroke="#f4f4f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (type === "square") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="4" fill="#18181b"/>
        <rect x="10" y="10" width="20" height="14" rx="2" stroke="#f4f4f5" strokeWidth="2"/>
        <path d="M14 30h12M20 24v6" stroke="#f4f4f5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="4" fill="#18181b"/>
      <path d="M20 11l2.5 5 5.5.8-4 3.9.9 5.5L20 23.5l-4.9 2.7.9-5.5-4-3.9 5.5-.8L20 11z" stroke="#f4f4f5" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
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
      <Icon type={shape} />
      <h3 className="mt-8 text-xl font-normal text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}
