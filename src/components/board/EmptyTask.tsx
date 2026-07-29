import { CircleDashed } from "lucide-react";

export function EmptyTask() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
      <CircleDashed className="mx-auto mb-3 text-slate-400" size={28} />

      <p className="text-sm text-slate-500">No tasks yet</p>
    </div>
  );
}
