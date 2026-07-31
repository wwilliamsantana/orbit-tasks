"use client";

import { Task } from "@/types/task";
import { useState } from "react";

interface Props {
  onSubmit: (task: Omit<Task, "id">) => void;
  onClose: () => void;
}

export function TaskForm({ onSubmit, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState("");

  function handleSubmit() {
    if (!title.trim()) return;

    onSubmit({
      title,
      description,
      priority,
      dueDate,
      tags: tag ? [tag] : [],
      members: [
        "https://github.com/wwilliamsantana.png",
      ],
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setTag("");
  }

  return (
    <form className="space-y-5 p-6">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Title
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Landing Page"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the task..."
          className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Priority
          </label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as "High" | "Medium" | "Low")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-950"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Tag
        </label>

        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Frontend"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
        />
      </div>
      <footer className="flex justify-end gap-3 border-t border-slate-200 p-6 dark:border-slate-800">
        <button
          onClick={onClose}
          className="rounded-xl border border-slate-300 px-5 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Cancel
        </button>

        <button onClick={handleSubmit} className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
          Create Task
        </button>
      </footer>
    </form>
  );
}