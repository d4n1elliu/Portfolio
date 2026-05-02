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
    <div className="grid gap-4 py-10 md:grid-cols-3 md:gap-12">
      <p className="text-sm text-zinc-400">{period}</p>
      <div className="md:col-span-2">
        <p className="text-lg font-medium text-zinc-900">{title}</p>
        <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="text-sm leading-relaxed text-zinc-600">
                — {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
