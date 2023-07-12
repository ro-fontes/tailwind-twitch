import { RecommendedLiveChannel } from "./components/RecommendedLiveChannels";
import { TimeLineContent } from "./components/TimeLine";

export const MainComponent = (): JSX.Element => {
  return (
    <div className="flex w-full h-full flex-col p-6 gap-10">
      <TimeLineContent />

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          <a
            className="text-violet-500 hover:underline hover:text-violet-600"
            href="#"
          >
            Canais ao vivo
          </a>
          <span> que achamos que você vai gostar</span>
        </h2>
        <RecommendedLiveChannel />
      </div>
    </div>
  );
};
