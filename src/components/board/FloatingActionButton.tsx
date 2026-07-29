"use client";

import { Plus } from "lucide-react";

export function FloatingActionButton() {
  return (
    <button className=" fixed bottom-8 right-8 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-medium text-white shadow-xl transition hover:bg-blue-700">
      <Plus size={20} />
      New Task
    </button>
  );
}
