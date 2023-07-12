import { ReactNode } from "react";

interface IRootGrid {
  children: ReactNode;
}

export function RootGrid({ children }: IRootGrid) {
  return <div className="h-[18.75rem] w-[18.75rem">{children}</div>;
}
