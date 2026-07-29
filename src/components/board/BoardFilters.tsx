import { SlidersHorizontal } from "lucide-react";

export function BoardFilters() {
  return (
    <section className="mb-8 flex flex-wrap items-center gap-4">
      <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
        Priority
      </button>

      <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
        Assignee
      </button>

      <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
        Sort
      </button>

      <button className="ml-auto flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
        <SlidersHorizontal size={18} />
        Filters
      </button>
    </section>
  );
}
