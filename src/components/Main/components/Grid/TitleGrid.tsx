import { parseText } from "@/utils/parseText";

interface IGridTitleProps {
  text: string;
}

export function TitleGrid({ text }: IGridTitleProps) {
  return (
    <a
      href="#"
      className="w-64 text-sm font-semibold text-zinc-100 hover:text-purple-300 whitespace-nowrap overflow-hidden text-ellipsis"
    >
      {text}
    </a>
  );
}
