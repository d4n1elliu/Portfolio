import { classNames } from "../../lib/classNames";

export function Section({
  id,
  alt = false,
  children,
  className,
}: {
  id?: string;
  alt?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={classNames("px-8 py-20 md:px-16", alt ? "bg-[#f0ebe0]" : "", className ?? "")}
    >
      {children}
    </section>
  );
}
