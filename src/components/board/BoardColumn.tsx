import { Plus } from "lucide-react";
import { EmptyTask } from "./EmptyTask";

interface Props {
  title: string;
}

export function BoardColumn({ title }: Props) {
  return (
    <article className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
      <header className="mb-5 flex items-center justify-between">
        <h2 className="font-semibold">{title}</h2>

        <button className="rounded-lg p-2 transition hover:bg-slate-200 dark:hover:bg-slate-800">
          <Plus size={18} />
        </button>
      </header>

      <div className="space-y-4">
        <EmptyTask />
      </div>
    </article>
  );
}
