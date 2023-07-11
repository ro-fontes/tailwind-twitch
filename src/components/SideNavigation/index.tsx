import { useStreamers } from "@/context/Streamers";
import twitchApiService from "@/services/TwitchApiService";
import { getStreamerImage } from "@/utils/getStreamerImage";
import { ArrowLeftFromLine, ArrowUpDown } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { ProfileImageCard } from "./StreamerCard/ProfileImageCard";
import { StreamerCard } from "./StreamerCard";

export const SideNavigation = (): JSX.Element => {
  const { currentStreamers } = useStreamers();

  return (
    <aside className="w-72 h-full bg-neutral-800 flex-col p-3 flex gap-4 overflow-y-scroll">
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
            <StreamerCard.Root key={streamer.user_id}>
              <StreamerCard.LeftWrapper>
                <StreamerCard.ProfileImage
                  userName={streamer.user_login}
                  className="rounded-full"
                  height={30}
                  width={30}
                />
                <StreamerCard.Content
                  streamerName={streamer.user_name}
                  gameCategory={streamer.game_name}
                />
              </StreamerCard.LeftWrapper>
              <StreamerCard.CountView numberCount={streamer.viewer_count} />
            </StreamerCard.Root>
          );
        })}
      </div>
    </aside>
  );
};
