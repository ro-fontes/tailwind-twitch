import { parseText } from "@/utils/parseText";

interface IGridTitleProps {
  text: string;
}

export function TitleGrid({ text }: IGridTitleProps) {
  return (
    <a
      href="#"
      className="flex text-sm justify-center font-semibold text-zinc-100 hover:text-purple-300"
    >
      {parseText({ text, max: 22 })}
    </a>
  );
}
