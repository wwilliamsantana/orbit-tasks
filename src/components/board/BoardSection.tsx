"use client";

import { Board } from "@/components/board/Board";
import { FloatingActionButton } from "./FloatingActionButton";
import { BoardHeader } from "./BoardHeader";
import { BoardFilters } from "./BoardFilters";
import { useBoard } from "@/hooks/useBoard";
import { DndContext } from "@dnd-kit/core";

export function BoardSection() {
  const { tasks } = useBoard();

  return (
    <section className="p-8">
      <BoardHeader />
      <BoardFilters />
      <DndContext>
        <Board tasks={tasks} />
      </DndContext>
      <FloatingActionButton />
    </section>
  );
}
