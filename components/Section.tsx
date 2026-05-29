import { ReactNode } from "react";

export default function Section({
  containerClassName,
  children
}: {
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <div className={containerClassName}>
      <div className={"max-w-5xl mx-auto px-4 py-16"}>{children}</div>
    </div>
  );
}
