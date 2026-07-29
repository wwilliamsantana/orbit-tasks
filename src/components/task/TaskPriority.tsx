interface Props {
  priority: string;
}

export function TaskPriority({ priority }: Props) {
  const styles = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-emerald-100 text-emerald-600",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[priority as keyof typeof styles]
      }`}
    >
      {priority}
    </span>
  );
}
