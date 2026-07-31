"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Task } from "@/types/task";
import { TaskCard } from "./TaskCard";

interface Props {
  task: Task;
  columnId: string;
  onDelete: (columnId: string, taskId: string) => void;
}

export function SortableTask({ task, columnId, onDelete }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,

    data: {
      type: "task",
      task,
      columnId,
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`transition-shadow ${isDragging ? "opacity-30" : ""}`}
    >
      <TaskCard {...task} onDelete={() => onDelete(columnId, task.id)} />
    </div>
  );
}
