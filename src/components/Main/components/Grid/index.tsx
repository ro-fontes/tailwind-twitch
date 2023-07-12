import { GameTitleGrid } from "./GameTitleGrid";
import { layoutFooterGrid } from "./LayoutGrid";
import { nameStreamerLayout } from "./NameStreamer";
import { PerfilLogoGrid } from "./PerfilLogo_Grid";
import { RootGrid } from "./Root_Grid";
import { TagsGrid } from "./Tags_Grid";
import { TextGrid } from "./Text_Grid";
import { ThumbGrid } from "./Thumb_Grid";
import { TitleGrid } from "./TitleGrid";

export const Grid = {
  Root: RootGrid,
  Text: TextGrid,
  Perfil: PerfilLogoGrid,
  Thumb: ThumbGrid,
  Title: TitleGrid,
  Tags: TagsGrid,
  Layout: layoutFooterGrid,
  Name: nameStreamerLayout,
  GameTitle: GameTitleGrid,
};
