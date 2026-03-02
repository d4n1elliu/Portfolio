import { classNames } from "../../lib/classNames";

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70";
  const styles =
    variant === "primary"
      ? "bg-sky-500 text-zinc-950 hover:bg-sky-400"
      : "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10";
  return (
    <a className={classNames(base, styles)} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}