import { classNames } from "../../lib/classNames";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}