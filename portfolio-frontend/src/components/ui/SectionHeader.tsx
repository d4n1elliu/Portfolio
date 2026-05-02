export function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <h2 className="text-4xl font-light text-zinc-900 md:text-5xl">{title}</h2>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
