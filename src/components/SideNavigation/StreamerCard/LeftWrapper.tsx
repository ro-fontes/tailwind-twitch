import { ReactNode } from "react";

interface LeftWrapperProps {
  children: ReactNode;
}

export function LeftWrapperCard({ children }: LeftWrapperProps) {
  return <div className="flex gap-3 h-8 items-center">{children}</div>;
}
