import { TimeLineContent } from "./components/TimeLine";
import { ArrowsComp } from "./components/Arrows";
import { Grid } from "./components/Grid";

export const MainComponent = (): JSX.Element => {
  return (
    <>
      <div className="flex mt-3 items-center justify-between py-6">
        <ArrowsComp left />
        <TimeLineContent />
        <ArrowsComp />
      </div>

      <div className="">
        <Grid.Text text={"Canais de Só na conversa recomendados"} />
      </div>

      <div className=" flex gap-2">
        <Grid.Root>
          <Grid.Thumb />
          <Grid.Layout />
        </Grid.Root>

        <Grid.Root>
          <Grid.Thumb />
          <Grid.Layout />
        </Grid.Root>

        <Grid.Root>
          <Grid.Thumb />
          <Grid.Layout />
        </Grid.Root>

        <Grid.Root>
          <Grid.Thumb />
          <Grid.Layout />
        </Grid.Root>

        <Grid.Root>
          <Grid.Thumb />
          <Grid.Layout />
        </Grid.Root>

        <Grid.Root>
          <Grid.Thumb />
          <Grid.Layout />
        </Grid.Root>
      </div>
    </>
  );
};
