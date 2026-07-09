export function TimelineRow({
  period,
  title,
  subtitle,
  bullets,
}: {
  period: string;
  title: string;
  subtitle: string;
  bullets?: readonly string[];
}) {
  return (
    <div className="grid gap-2 border-b border-zinc-200/70 py-9 md:grid-cols-4 md:gap-12">
      <p className="text-sm font-medium text-zinc-600">{period}</p>
      <div className="md:col-span-3">
        <p className="text-lg font-medium text-zinc-900">{title}</p>
        <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
