import { Grid } from "./index";

export function layoutFooterGrid() {
  return (
    <>
      <div className="flex">
        <Grid.Perfil />
        <div className=" flex flex-col items-start">
          <Grid.Description description="Live Gaules" />
          <Grid.Name name="Gaules" />
          <Grid.Tags tags={"FIFA 23"} />
        </div>
      </div>
    </>
  );
}
