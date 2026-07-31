"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Column } from "@/types/task";
import { BoardColumn } from "../board/BoardColumn";

interface Props {
  column: Column;
  onAddTask: (columnId: string) => void;
  onDelete: (columnId: string, taskId: string) => void;
}

export function SortableColumn({ column, onAddTask, onDelete }: Props) {
  const { setNodeRef, transform, transition, isDragging } = useSortable({
    id: column.id,

    data: {
      type: "column",
      column,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={isDragging ? "opacity-60" : ""}
    >
      <BoardColumn column={column} onAddTask={onAddTask} onDelete={onDelete} />
    </div>
  );
}
