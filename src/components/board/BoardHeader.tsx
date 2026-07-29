import { BoardProgress } from "./BoardProgress";
import { BoardStats } from "./BoardStats";

export function BoardHeader() {
  return (
    <section className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
      <div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          Sprint 4
        </span>
        <p className="mt-2 text-slate-500">
          Organize tasks and collaborate with your team.
        </p>
        <BoardProgress />
      </div>
      <BoardStats />
    </section>
  );
}
