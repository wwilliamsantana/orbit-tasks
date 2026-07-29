export type Column = "Todo" | "In Progress" | "Review" | "Done";

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  members: string[];
  tags: string[];
  column: Column;
}
