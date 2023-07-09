import { ArrowLeft, ArrowRight } from "lucide-react";

interface IArrowsComp {
  left?: boolean;
}

export const ArrowsComp = ({ left }: IArrowsComp): JSX.Element => {
  return (
    <div className="flex mt-3 items-center justify-between p-6">
      {left ? (
        <button className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20">
          <ArrowLeft />
        </button>
      ) : (
        <button className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20">
          <ArrowRight />
        </button>
      )}
    </div>
  );
};
