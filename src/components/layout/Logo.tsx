import { KanbanSquare } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-blue-600 p-2 text-white">
        <KanbanSquare size={22} />
      </div>

      <div>
        <h1 className="font-bold text-slate-900 dark:text-white">TaskFlow</h1>

        <p className="text-sm text-slate-500">Project Workspace</p>
      </div>
    </div>
  );
}
