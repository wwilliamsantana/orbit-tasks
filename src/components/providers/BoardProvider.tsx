"use client";

import { useState, useEffect } from "react";

import { BoardContext } from "@/context/BoardContext";

import { initialBoard } from "@/data/board";

import { Column, Task } from "@/types/task";

const STORAGE_KEY = "orbit-board";

interface Props {
  children: React.ReactNode;
}

export function BoardProvider({ children }: Props) {
  const [board, setBoard] = useState<Column[]>(initialBoard);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const [dialogValueOpen, setDialogValueOpen] = useState(false);

  const [selectedColumn, setSelectedColumn] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setBoard(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
  }, [board]);

  function openDialog(columnId: string) {
    setSelectedColumn(columnId);
    setDialogValueOpen(true);
  }

  function closeDialog() {
    setDialogValueOpen(false);
  }

  function addTask(columnId: string, task: Omit<Task, "id">) {
    setBoard((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: [
                ...column.tasks,
                {
                  ...task,
                  id: crypto.randomUUID(),
                },
              ],
            }
          : column,
      ),
    );
  }

  function removeTask(columnId: string, taskId: string) {
    setBoard((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            }
          : column,
      ),
    );
  }

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,

        activeTask,
        setActiveTask,

        dialogValueOpen,
        selectedColumn,

        openDialog,
        closeDialog,

        addTask,
        removeTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
