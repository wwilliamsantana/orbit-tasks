"use client";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Column } from "@/types/task";

import { ColumnHeader } from "./ColumnHeader";

import { SortableTask } from "../task/SortableTask";
import { DroppableColumn } from "./DroppableColumn";

interface Props {
  column: Column;
}

export function BoardColumn({ column }: Props) {
  return (
    <DroppableColumn id={column.id}>
      <article className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-900">
        <ColumnHeader title={column.title} total={column.tasks.length} />

        <SortableContext
          items={column.tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {column.tasks.map((task) => (
              <SortableTask key={task.id} task={task} columnId={column.id} />
            ))}
          </div>
        </SortableContext>
      </article>
    </DroppableColumn>
  );
}
