interface IGameTitleGridProps {
  text: string;
}

export function GameTitleGrid({ text }: IGameTitleGridProps) {
  return (
    <span className="flex text-xs text-zinc-400 hover:text-purple-300 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis">
      {text}
    </span>
  );
}
