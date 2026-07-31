interface Props {
  progress: number;
}

export function BoardProgress({ progress }: Props) {
  return (
    <div className="mt-6 w-full max-w-md">
      <div className="mb-2 flex justify-between text-sm">
        <span>Progress</span>

        <span className="font-semibold">{progress}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
