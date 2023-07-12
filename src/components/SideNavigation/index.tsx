import { useStreamers } from "@/context/Streamers";
import { ArrowLeftFromLine, ArrowUpDown } from "lucide-react";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { StreamerCard } from "./StreamerCard";

export const SideNavigation = (): JSX.Element => {
  const { currentStreamers } = useStreamers();

  return (
    <aside className="w-[17.3rem] h-full bg-neutral-800 flex-col flex gap-3">
      <SimpleBarReact className="max-h-full pr-2">
        <div className="p-3 gap-2 flex flex-col">
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
        </div>
        <div className="flex flex-col gap-1">
          {currentStreamers?.map((streamer) => {
            return (
              <StreamerCard.Root key={streamer.user_id}>
                <StreamerCard.LeftWrapper>
                  <StreamerCard.ProfileImage
                    userName={streamer.user_login}
                    className="rounded-full"
                    height={33}
                    width={33}
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
      </SimpleBarReact>
    </aside>
  );
};
