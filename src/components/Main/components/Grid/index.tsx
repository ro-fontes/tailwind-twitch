import { DescriptionGrid } from "./Description_Grid";
import { layoutFooterGrid } from "./LayoutGrid";
import { nameStreamerLayout } from "./NameStreamer";
import { PerfilLogoGrid } from "./PerfilLogo_Grid";
import { RootGrid } from "./Root_Grid";
import { TagsGrid } from "./Tags_Grid";
import { TextGrid } from "./Text_Grid";
import { ThumbGrid } from "./Thumb_Grid";

export const Grid = {
  Root: RootGrid,
  Text: TextGrid,
  Perfil: PerfilLogoGrid,
  Thumb: ThumbGrid,
  Description: DescriptionGrid,
  Tags: TagsGrid,
  Layout: layoutFooterGrid,
  Name: nameStreamerLayout,
};
