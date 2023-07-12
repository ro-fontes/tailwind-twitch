interface ITagsGrid {
  tags: string[];
}

export function TagsGrid({ tags }: ITagsGrid) {
  return (
    <div className="flex gap-1 mt-1">
      {tags
        .filter((e) => e.length < 10)
        .slice(0, 4)
        .map((tag) => {
          return (
            <p
              key={tag}
              className="px-2 py-1 rounded-full bg-zinc-700 text-xs font-semibold text-zinc-600"
            >
              {tag}
            </p>
          );
        })}
    </div>
  );
}
