import { classNames } from "../../lib/classNames";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("//");
  const base = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-700"
      : "border border-zinc-300 text-zinc-900 hover:bg-zinc-100";
  return (
    <a
      className={classNames(base, styles, className ?? "")}
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}
