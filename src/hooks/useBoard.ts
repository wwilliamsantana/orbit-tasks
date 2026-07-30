"use client";

import { useState } from "react";

import { initialBoard } from "@/data/board";
import { Column, Task } from "@/types/task";

export function useBoard() {
  const [board, setBoard] = useState<Column[]>(initialBoard);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  return {
    board,
    setBoard,
    activeTask,
    setActiveTask,
  };
}
