import { useReveal } from "../../lib/useReveal";
import { classNames } from "../../lib/classNames";

/**
 * Wraps children in a scroll-triggered fade-up. `delay` (ms) staggers siblings.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={classNames("reveal h-full", className ?? "")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
