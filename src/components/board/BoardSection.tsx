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

export function BoardSection() {
  const { board, setBoard, activeTask, setActiveTask, addTask, removeTask } =
    useBoard();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  function handleOpenDialog(columnId: string) {
    setSelectedColumn(columnId);
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  function handleCreateTask(task: Omit<Task, "id">) {
    addTask(selectedColumn, {
      ...task,
      id: crypto.randomUUID(),
    });

    handleCloseDialog();
  }

  function handleDeleteTask(columnId: string, taskId: string) {
    removeTask(columnId, taskId);
  }

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

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    if (active.data.current?.type !== "task") {
      return;
    }

    setActiveTask(active.data.current.task as Task);
  }

  function findColumn(board: Column[], taskId: string) {
    return board.find((column) =>
      column.tasks.some((task) => task.id === taskId),
    );
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
      <BoardHeader />

      <BoardFilters />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Board
          board={board}
          onAddTask={handleOpenDialog}
          onDelete={handleDeleteTask}
        />
        <DragOverlay>
          {activeTask ? <TaskCard {...activeTask} /> : null}
        </DragOverlay>
      </DndContext>

      <TaskDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onCreateTask={handleCreateTask}
      />

      <FloatingActionButton />
    </section>
  );
}
