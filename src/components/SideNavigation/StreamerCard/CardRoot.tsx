import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="flex p-1 pl-3 justify-between items-center hover:bg-zinc-600">
      {children}
    </div>
  );
}
