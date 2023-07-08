import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { BsChatSquare } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { LiaBatteryEmptySolid } from "react-icons/lia";
import { TbTriangle } from "react-icons/tb";

export const ContentButton = (): JSX.Element => {
  return (
    <div className="flex space-x-5 mr-3">
      <button>
        <CgCrown size={20} />
      </button>
      <button>
        <AiOutlineInbox size={20} />
      </button>
      <button>
        <BsChatSquare size={14} strokeWidth={1.5} />
      </button>
      <button>
        <TbTriangle size={20} />
      </button>
      <button className="bg-zinc-700 rounded-md px-3 p-1 text-sm font-bold flex items-center gap-2">
        <LiaBatteryEmptySolid size={20} strokeWidth={1} />
        Assista sem anúncios
      </button>
    </div>
  );
};
