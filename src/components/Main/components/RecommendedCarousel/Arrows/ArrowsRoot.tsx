import { ReactNode } from "react";

interface IArrowsRootProps {
  children: ReactNode;
}

export function ArrowsRoot({ children }: IArrowsRootProps): JSX.Element {
  return (
    <div className="flex mt-3 items-center justify-between">{children}</div>
  );
}
