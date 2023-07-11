import { ReactNode } from "react";

interface IRootGrid {
  children: ReactNode;
}

export function RootGrid({ children }: IRootGrid) {
  return <div className="">{children}</div>;
}
