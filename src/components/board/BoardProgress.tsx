export function BoardProgress() {
  return (
    <div className="mt-6 w-full max-w-md">
      <div className="mb-2 flex justify-between text-sm">
        <span>Progress</span>

        <span className="font-semibold">63%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full w-[63%] rounded-full bg-blue-600" />
      </div>
    </div>
  );
}
