"use client";

import { useEffect, useState } from "react";

import { initialBoard } from "@/data/board";
import { Column, Task } from "@/types/task";
const STORAGE_KEY = "orbit-board";

export function useBoard() {
  const [board, setBoard] = useState<Column[]>(() => {
    if (typeof window === "undefined") {
      return initialBoard;
    }
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return initialBoard;
    }

    try {
      return JSON.parse(stored);
    } catch {
      return initialBoard;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
  }, [board]);

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
