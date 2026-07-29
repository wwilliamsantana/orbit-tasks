"use client";

import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search tasks..."
        className="w-72 rounded-xl border  border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 placeholder:text-slate-700"
      />
    </div>
  );
}
