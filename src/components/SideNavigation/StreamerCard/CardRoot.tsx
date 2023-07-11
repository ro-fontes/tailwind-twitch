import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="flex justify-between items-center hover:bg-slate-600">
      {children}
    </div>
  );
}
