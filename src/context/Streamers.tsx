"use client";
import AuthTwitchApiService from "@/services/AuthTwitchApiService";
import twitchApiService from "@/services/TwitchApiService";
import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";

interface IStreamerData {
  id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  viewer_count: string;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
  tags: string[];
  is_mature: boolean;
}

type TResponseData = { data: IStreamerData[] };

interface IStreamersContext {
  currentStreamers: IStreamerData[] | undefined;
  setCurrentStreamers: React.Dispatch<
    React.SetStateAction<IStreamerData[] | undefined>
  >;
}

const StreamersContext = createContext({} as IStreamersContext);

export const StreamersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStreamers, setCurrentStreamers] = useState<
    IStreamerData[] | undefined
  >();

  useQuery(`streamers`, async () => {
    if (!currentStreamers) {
      const response = await AuthTwitchApiService.post(
        "token?client_secret=rr713b2850ctj1lzqdlx3tc1d9t6b4&client_id=lfyxb4l3ef82jzljbg1cc535reyv7i&grant_type=client_credentials"
      );
      console.log(response);
      const { data }: { data: TResponseData } = await twitchApiService.get(
        "/helix/streams",
        {
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
          },
        }
      );
      console.log(data.data);
      setCurrentStreamers(data.data);
    }
  });
  return (
    <StreamersContext.Provider
      value={{
        currentStreamers,
        setCurrentStreamers,
      }}
    >
      {children}
    </StreamersContext.Provider>
  );
};

export const useStreamers = () => {
  const context = useContext(StreamersContext);

  if (!context) {
    throw new Error("useStreamers must be used within a StreamerProvider");
  }

  return context;
};
