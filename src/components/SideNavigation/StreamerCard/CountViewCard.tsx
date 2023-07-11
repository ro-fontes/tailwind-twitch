import { formatNumber } from "@/utils/formatNumber";

interface CountViewCardProps {
  numberCount: string;
}

export function CountViewCard({ numberCount }: CountViewCardProps) {
  return (
    <div className="flex items-center gap-1 text-[13px]">
      <div className="bg-red-600 rounded-full w-2 h-2" />
      {formatNumber(Number(numberCount))}
    </div>
  );
}
