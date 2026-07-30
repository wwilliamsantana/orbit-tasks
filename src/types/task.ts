export type ColumnId = "Todo" | "In Progress" | "Review" | "Done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  members: string[];
  tags: string[];
}

export interface Column {
  id: ColumnId;
  title: string;
  tasks: Task[];
}
