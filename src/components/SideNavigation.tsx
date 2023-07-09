"use client";
import { useStreamers } from "@/context/Streamers";
import { ArrowLeftFromLine, ArrowUpDown } from "lucide-react";
import Image from "next/image";

export const SideNavigation = (): JSX.Element => {
  const { currentStreamers } = useStreamers();
  return (
    <aside className="w-64 bg-neutral-800 h-full flex-col p-3 flex gap-4">
      <div className="font-bold text-lg flex justify-between items-center">
        Para voce
        <button>
          <ArrowLeftFromLine size={18} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm">CANAIS SEGUIDOS</p>
          <p className="text-zinc-500 text-sm">
            Espectadores (ordem decrescente)
          </p>
        </div>
        <button>
          <ArrowUpDown size={18} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {currentStreamers?.map((streamer) => {
          return (
            <div
              className="flex justify-between items-center"
              key={streamer.user_id}
            >
              <div className="flex gap-3 h-8 items-center">
                <Image
                  className="rounded-full"
                  src={streamer.thumbnail_url
                    .replace("{width}", "120")
                    .replace("{height}", "120")}
                  height={30}
                  width={30}
                  alt={"thumbnail_url"}
                />
                <div className="flex flex-col leading-none">
                  <h1>{streamer.user_name}</h1>
                  <span className="text-sm text-zinc-400">
                    {streamer.game_name}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm">
                <div className="bg-red-600 rounded-full w-2 h-2" />
                {streamer.viewer_count}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
