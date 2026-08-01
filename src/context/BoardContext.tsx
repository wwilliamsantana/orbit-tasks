"use client";

import { createContext, useContext } from "react";
import { Column, Task } from "@/types/task";

export interface BoardContextType {
  board: Column[];
  setBoard: React.Dispatch<React.SetStateAction<Column[]>>;

  activeTask: Task | null;
  setActiveTask: React.Dispatch<React.SetStateAction<Task | null>>;

  dialogValueOpen: boolean;
  selectedColumn: string;

  openDialog: (columnId: string) => void;
  closeDialog: () => void;

  addTask: (columnId: string, task: Omit<Task, "id">) => void;

  removeTask: (columnId: string, taskId: string) => void;
}

export const BoardContext = createContext<BoardContextType | null>(null);

export function useBoardContext() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useBoardContext must be used inside BoardProvider");
  }

  return context;
}
