import { parseText } from "@/utils/parseText";

interface ContentCardProps {
  streamerName: string;
  gameCategory: string;
}

export function ContentCard({ streamerName, gameCategory }: ContentCardProps) {
  return (
    <div className="flex flex-col leading-none">
      <h1 className="text-sm font-semibold">
        {parseText({ text: streamerName, max: 14 })}
      </h1>
      <span className="text-xs text-zinc-400">
        {parseText({ text: gameCategory, max: 17 })}
      </span>
    </div>
  );
}
