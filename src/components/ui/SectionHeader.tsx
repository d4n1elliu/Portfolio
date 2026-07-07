export function SectionHeader({
  title,
  eyebrow,
  description,
  action,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-4xl font-normal leading-[1.08] tracking-tight text-zinc-900 md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-zinc-600">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
