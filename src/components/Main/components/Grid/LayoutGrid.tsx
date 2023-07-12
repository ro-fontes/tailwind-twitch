import { Grid } from "./index";

interface ILayoutFooterGridProps {
  streamTitle: string;
  streamerName: string;
  gameTitle: string;
  livestreamTags: string[];
}

export function layoutFooterGrid({
  gameTitle,
  livestreamTags,
  streamTitle,
  streamerName,
}: ILayoutFooterGridProps) {
  return (
    <>
      <div className="flex pt-3 gap-2">
        <Grid.Perfil userName={streamerName} />
        <div className=" flex flex-col items-start gap-1">
          <Grid.Title text={streamTitle} />
          <Grid.Name name={streamerName} />
          <Grid.GameTitle text={gameTitle} />
          <Grid.Tags tags={livestreamTags} />
        </div>
      </div>
    </>
  );
}
