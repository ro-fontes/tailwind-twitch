interface INameStreamerProps {
  name: string;
}

export function nameStreamerLayout({ name }: INameStreamerProps) {
  return (
    <div className="">
      <p className="flex text-xs text-zinc-400">{name}</p>
    </div>
  );
}
