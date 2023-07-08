import React, { createContext, useState } from "react";
import { useQuery } from "react-query";

interface IResponseData {
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

interface IStreamersContext {
  currentStreamers: IResponseData | undefined;
  setCurrentStreamers: React.Dispatch<
    React.SetStateAction<IResponseData | undefined>
  >;
}

const StreamersContext = createContext({} as IStreamersContext);

export const StreamersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStreamers, setCurrentStreamers] = useState<
    IResponseData | undefined
  >();

  //   useQuery(`streamers`, async () => {
  //     const response = await
  //   });
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
