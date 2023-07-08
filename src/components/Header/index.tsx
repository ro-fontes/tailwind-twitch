import Image from "next/image";
import { ContentButton } from "./components/ContentButton";
import { NavTopGroup } from "./components/NavTopGroup";
import { SearchBox } from "./components/SearchBox";

export const HeaderComponent = (): JSX.Element => {
  return (
    <header className="w-full h-14 bg-zinc-900 p-3 items-center flex justify-between">
      <NavTopGroup />
      <SearchBox />
      <div className="flex">
        <ContentButton />
        <Image
          className="rounded-full"
          src={"/profileImage.png"}
          width={30}
          height={30}
          alt="Imagem do perfil"
        />
      </div>
    </header>
  );
};
