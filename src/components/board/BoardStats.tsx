import { CheckCircle2, Clock3, ListTodo } from "lucide-react";

const stats = [
  {
    icon: ListTodo,
    label: "Tasks",
    value: "12",
  },
  {
    icon: CheckCircle2,
    label: "Completed",
    value: "7",
  },
  {
    icon: Clock3,
    label: "Remaining",
    value: "5",
  },
];

export function BoardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className=" flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
        >
          <stat.icon size={22} className="mb-3 text-blue-600" />

          <div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
