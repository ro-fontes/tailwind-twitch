import { ComponentProps, ElementType } from "react";

interface IArrowIcon extends ComponentProps<"button"> {
  icon: ElementType;
}

export function ArrowsIcon({ icon: Icon, ...rest }: IArrowIcon): JSX.Element {
  return (
    <button
      {...rest}
      className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20"
    >
      <Icon />
    </button>
  );
}
