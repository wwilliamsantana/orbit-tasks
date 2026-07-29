"use client";

import { useDroppable } from "@dnd-kit/core";

interface Props {
  id: string;
  children: React.ReactNode;
}

export function DroppableColumn({ id, children }: Props) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className="h-full">
      {children}
    </div>
  );
}
