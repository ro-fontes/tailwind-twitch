"use client";
import { useState, useEffect, useMemo } from "react";
import { Grid } from "../Grid";
import { useStreamers } from "@/context/Streamers";

export function RecommendedLiveChannel() {
  const [localWitdh, setLocalWitdh] = useState<number>(window.innerWidth);

  const { currentStreamers } = useStreamers();

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  // criar um useWidth
  useEffect(() => {
    const updateDimension = () => {
      setLocalWitdh(getCurrentDimension().width);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [localWitdh]);

  const parseNumber =
    localWitdh > 1770 ? 5 : localWitdh > 1230 && localWitdh < 1770 ? 4 : 3;

  const streamers = useMemo(
    () => currentStreamers?.slice(0, parseNumber),
    [currentStreamers, parseNumber]
  );

  return (
    <div className="grid grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-3">
      {streamers?.map((streamer) => {
        return (
          <Grid.Root key={streamer.id}>
            <Grid.Thumb
              thumbLink={streamer.thumbnail_url
                .replace("{width}", "300")
                .replace("{height}", "172")}
              viewCount={streamer.viewer_count}
              streamerName={streamer.user_name}
            />
            <Grid.Layout
              gameTitle={streamer.game_name}
              livestreamTags={streamer.tags}
              streamTitle={streamer.title}
              streamerName={streamer.user_name}
            />
          </Grid.Root>
        );
      })}
    </div>
  );
}
