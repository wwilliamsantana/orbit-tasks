import { Plus } from "lucide-react";

interface Props {
  title: string;
  total: number;
  onAddTask: () => void;
}

export function ColumnHeader({ title, total, onAddTask }: Props) {
  console.log(total);
  return (
    <header className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="font-semibold">{title}</h2>

        <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold dark:bg-slate-700">
          {total}
        </span>
      </div>
      <button
        onClick={onAddTask}
        className="rounded-lg p-2 transition hover:bg-slate-200 dark:hover:bg-slate-800"
      >
        <Plus size={18} />
      </button>
    </header>
  );
}
