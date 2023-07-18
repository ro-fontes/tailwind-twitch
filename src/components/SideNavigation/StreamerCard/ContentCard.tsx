import { parseText } from "@/utils/parseText";

interface ContentCardProps {
  streamerName: string;
  gameCategory: string;
}

export function ContentCard({ streamerName, gameCategory }: ContentCardProps) {
  return (
    <div className="flex flex-col leading-none">
      <h1 className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-28">
        {streamerName}
      </h1>
      <span className="text-xs text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis w-32">
        {gameCategory}
      </span>
    </div>
  );
}
