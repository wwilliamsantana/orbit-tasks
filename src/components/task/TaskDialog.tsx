"use client";

import { X } from "lucide-react";
import { TaskForm } from "./TaskForm";
import { Task } from "@/types/task";

interface Props {
  open: boolean;
  onClose: () => void;

  onCreateTask: (task: Omit<Task, "id">) => void;
}

export function TaskDialog({ open, onClose, onCreateTask }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full mt-10 max-w-lg rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
        <header className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold">Create Task</h2>

            <p className="mt-1 text-sm text-slate-500">
              Fill the information below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={18} />
          </button>
        </header>

        <TaskForm onSubmit={onCreateTask} onClose={onClose} />


      </div>
    </div>
  );
}