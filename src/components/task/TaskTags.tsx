interface Props {
  tags: string[];
}

export function TaskTags({ tags }: Props) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-lg bg-slate-100 px-3 py-1 text-xs dark:bg-slate-800"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
