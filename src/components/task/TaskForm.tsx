"use client";

import { Task } from "@/types/task";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (task: Omit<Task, "id">) => void;
  onClose: () => void;
}

interface TaskFormData {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  tag: string;
}

export function TaskForm({ onSubmit, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    defaultValues: {
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      tag: "",
    },
  });

  function onFormSubmit(data: TaskFormData) {
    onSubmit({
      title: data.title,
      description: data.description,
      priority: data.priority,
      dueDate: data.dueDate,
      tags: data.tag ? [data.tag] : [],
      members: ["https://github.com/wwilliamsantana.png"],
    });

    reset();
  }

  return (
    <form className="space-y-5 p-6" onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label className="mb-2 block text-sm font-medium">Title</label>

        <input
          {...register("title", {
            required: "O título é obrigatório",
          })}
          placeholder="Landing Page"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Description</label>

        <textarea
          rows={4}
          {...register("description")}
          placeholder="Describe the task..."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Priority</label>

          <select
            {...register("priority")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Due Date</label>

          <input
            type="date"
            {...register("dueDate")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Tag</label>

        <input
          {...register("tag")}
          placeholder="Frontend"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
        />
      </div>
      <footer className="flex justify-end gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl border border-slate-300 px-5 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Create Task
        </button>
      </footer>
    </form>
  );
}
