import { Plus } from "lucide-react";
import { tasks } from "@/data/tasks";
import { TaskCard } from "../task/TaskCard";
import { ColumnHeader } from "./ColumnHeader";

interface Props {
  title: string;
}

export function BoardColumn({ title }: Props) {
  const filteredTasks = tasks.filter((task) => task.column === title);

  return (
    <article className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
      <ColumnHeader title={title} total={filteredTasks.length} />

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
