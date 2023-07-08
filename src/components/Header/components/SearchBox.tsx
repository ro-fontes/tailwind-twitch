import { Search } from "lucide-react";

export const SearchBox = (): JSX.Element => {
  return (
    <div className="flex">
      <input
        className="rounded-s-md border border-zinc-500 w-96 p-1 hover:border-zinc-950 ml-1 bg-transparent  focus:outline-red-700"
        placeholder="Buscar"
      />
      <div className="bg-zinc-700 rounded-e items-center p-1">
        <Search />
      </div>
    </div>
  );
};
