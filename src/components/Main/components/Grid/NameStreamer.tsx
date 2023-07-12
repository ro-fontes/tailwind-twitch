interface INameStreamerProps {
  name: string;
}

export function nameStreamerLayout({ name }: INameStreamerProps) {
  return <h3 className="flex text-xs text-zinc-400 cursor-pointer">{name}</h3>;
}
