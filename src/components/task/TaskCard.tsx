"use client";

import { CalendarDays, Trash2 } from "lucide-react";
import Image from "next/image";

import { TaskPriority } from "./TaskPriority";
import { TaskTags } from "./TaskTags";
import { formatDate } from "@/utils/formatDate";

interface Props {
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  tags: string[];
  members: string[];
  onDelete?: () => void;
}

export function TaskCard({
  title,
  description,
  priority,
  dueDate,
  tags,
  members,
  onDelete,
}: Props) {
  return (
    <article className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <TaskPriority priority={priority} />

        {/* {onDelete && ( */}
        <button
          onClick={onDelete}
          className="rounded-lg p-1 text-slate-400 transition hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20"
        >
          <Trash2 size={16} />
        </button>
        {/* )} */}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
      <TaskTags tags={tags} />

      <footer className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm text-slate-500">
          <CalendarDays size={16} />
          {formatDate(dueDate)}
        </div>

        <div className="flex -space-x-2">
          {members.map((member) => (
            <Image
              key={member}
              src={member}
              alt=""
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
          ))}
        </div>
      </footer>
    </article>
  );
}
