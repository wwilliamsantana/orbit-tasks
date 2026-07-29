"use client";

import { useState } from "react";
import { tasks as initialTasks } from "@/data/tasks";

export function useBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  return {
    tasks,
    setTasks,
  };
}
