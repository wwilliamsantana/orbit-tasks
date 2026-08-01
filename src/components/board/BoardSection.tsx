"use client";

import {
  closestCorners,
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
} from "@dnd-kit/core";

import { Board } from "@/components/board/Board";
import { BoardFilters } from "@/components/board/BoardFilters";
import { BoardHeader } from "@/components/board/BoardHeader";

import { useBoard } from "@/hooks/useBoard";
import { FloatingActionButton } from "./FloatingActionButton";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Column, Task } from "@/types/task";
import { TaskCard } from "../task/TaskCard";
import { useState } from "react";
import { TaskDialog } from "../task/TaskDialog";
import { useBoardContext } from "@/context/BoardContext";

export function BoardSection() {
  const { activeTask, setActiveTask, board, setBoard } = useBoardContext();

  const totalTasks = board.reduce(
    (acc, column) => acc + column.tasks.length,
    0,
  );
  const completedTasks =
    board.find((column) => column.id === "Done")?.tasks.length ?? 0;

  const remainingTasks = totalTasks - completedTasks;

  const progressTasks =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),

    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function findColumn(board: Column[], taskId: string) {
    return board.find((column) =>
      column.tasks.some((task) => task.id === taskId),
    );
  }
  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    if (active.data.current?.type !== "task") {
      return;
    }

    setActiveTask(active.data.current.task as Task);
  }
  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;

    if (activeType !== "task") return;

    const activeTaskId = String(active.id);

    setBoard((board) => {
      const activeColumn = findColumn(board, activeTaskId);

      if (!activeColumn) return board;

      let targetColumn: Column | undefined;

      if (overType === "task") {
        targetColumn = findColumn(board, String(over.id));
      }

      if (overType === "column") {
        targetColumn = board.find((column) => column.id === over.id);
      }

      if (!targetColumn) return board;

      if (activeColumn.id === targetColumn.id) {
        return board;
      }

      const movingTask = activeColumn.tasks.find(
        (task) => task.id === activeTaskId,
      );

      if (!movingTask) return board;

      return board.map((column) => {
        if (column.id === activeColumn.id) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== activeTaskId),
          };
        }

        if (column.id === targetColumn.id) {
          return {
            ...column,
            tasks: [...column.tasks, movingTask],
          };
        }

        return column;
      });
    });
  }
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    setActiveTask(null);

    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    if (activeId === overId) return;

    setBoard((board) => {
      return board.map((column) => {
        const oldIndex = column.tasks.findIndex((task) => task.id === activeId);

        const newIndex = column.tasks.findIndex((task) => task.id === overId);

        if (oldIndex !== -1 && newIndex !== -1) {
          return {
            ...column,
            tasks: arrayMove(column.tasks, oldIndex, newIndex),
          };
        }

        return column;
      });
    });
  }

  return (
    <section className="p-8">
      <BoardHeader
        completed={completedTasks}
        progress={progressTasks}
        remaining={remainingTasks}
        total={totalTasks}
      />

      <BoardFilters />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Board />
        <DragOverlay>
          {activeTask ? <TaskCard {...activeTask} /> : null}
        </DragOverlay>
      </DndContext>

      <TaskDialog />

      <FloatingActionButton />
    </section>
  );
}
