"use client";

import { useDroppable } from "@dnd-kit/core";

interface Props {
  id: string;
  children: React.ReactNode;
}

export function DroppableColumn({ id, children }: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id,

    data: {
      type: "column",
      columnId: id,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        h-full
        rounded-3xl
        transition-colors

        ${isOver ? "bg-blue-50 dark:bg-slate-800" : ""}
      `}
    >
      {children}
    </div>
  );
}
