import { Plus } from "lucide-react";
import { EmptyTask } from "./EmptyTask";
import { tasks } from "@/data/tasks";
import { TaskCard } from "../task/TaskCard";

interface Props {
  title: string;
}

export function BoardColumn({ title }: Props) {
  const filteredTasks = tasks.filter((task) => task.column === title);

  return (
    <article className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
      <header className="mb-5 flex items-center justify-between">
        <h2 className="font-semibold">{title}</h2>

        <button className="rounded-lg p-2 transition hover:bg-slate-200 dark:hover:bg-slate-800">
          <Plus size={18} />
        </button>
      </header>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            dueDate={task.dueDate}
            members={task.members}
            tags={task.tags}
          />
        ))}
      </div>
    </article>
  );
}
