import { BoardProgress } from "./BoardProgress";
import { BoardStats } from "./BoardStats";

interface Props {
  total: number;
  completed: number;
  remaining: number;
  progress: number;
}

export function BoardHeader({ completed, progress, remaining, total }: Props) {
  const sprints = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5"];
  return (
    <section className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
      <div>
        <select className=" rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 outline-none transition dark:bg-blue-900/40 dark:text-blue-300">
          {sprints.map((sprint) => (
            <option key={sprint} value={sprint}>
              {sprint}
            </option>
          ))}
        </select>
        <p className="mt-2 text-slate-500">
          Organize tasks and collaborate with your team.
        </p>
        <BoardProgress progress={progress} />
      </div>
      <BoardStats total={total} remaining={remaining} completed={completed} />
    </section>
  );
}
