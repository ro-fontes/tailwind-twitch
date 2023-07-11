interface ITagsGrid {
  tags: String;
}

export function TagsGrid({ tags }: ITagsGrid) {
  return (
    <div className="flex justify-center ">
      <p className="text-sm mt-1 px-1 rounded-md bg-zinc-700">{tags}</p>
    </div>
  );
}
