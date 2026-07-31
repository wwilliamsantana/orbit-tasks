"use client";

import { useState } from "react";

import { initialBoard } from "@/data/board";
import { Column, Task } from "@/types/task";

export function useBoard() {
  const [board, setBoard] = useState<Column[]>(initialBoard);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  function addTask(columnId: string, task: Task) {
    setBoard((columns) =>
      columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [...column.tasks, task],
            }
          : column,
      ),
    );
  }

  function removeTask(columnId: string, taskId: string) {
    setBoard((columns) =>
      columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            }
          : column,
      ),
    );
  }

  return {
    board,
    setBoard,
    activeTask,
    setActiveTask,
    addTask,
    removeTask,
  };
}
