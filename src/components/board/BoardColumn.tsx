"use client";

import { DroppableColumn } from "../task/DroppableColumn";
import { SortableTask } from "../task/SortableTask";
import { TaskCard } from "../task/TaskCard";
import { ColumnHeader } from "./ColumnHeader";
import { Task } from "@/types/task";

interface Props {
  title: string;
  tasks: Task[];
}

export function BoardColumn({ title, tasks }: Props) {
  return (
    <DroppableColumn id="title">
      <article className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
        <ColumnHeader title={title} total={tasks.length} />

        <div className="space-y-4">
          {tasks.map((task) => (
            <SortableTask key={task.id} task={task} />
          ))}
        </div>
      </article>
    </DroppableColumn>
  );
}
