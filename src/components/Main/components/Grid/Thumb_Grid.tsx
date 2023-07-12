import { formatNumber } from "@/utils/formatNumber";
import Image from "next/image";

interface IThumbGridProps {
  thumbLink: string;
  viewCount: string;
  streamerName?: string;
}

export function ThumbGrid({
  thumbLink,
  viewCount,
  streamerName,
}: IThumbGridProps) {
  return (
    <div className="relative">
      <span className="absolute text-sm font-bold top-2 left-2 z-10 bg-[red] p-1 py-[1px] rounded-md">
        AO VIVO
      </span>
      <Image
        src={thumbLink}
        alt={streamerName || "genericThumb"}
        width={300}
        height={172}
      />
      <span className="absolute bottom-2 left-2 z-10 bg-zinc-900/90 rounded-sm px-1 py-[1px] text-sm">
        {formatNumber(Number(viewCount))} telespectadores
      </span>
    </div>
  );
}
