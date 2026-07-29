import { Task } from "@/types/task";
import { BoardColumn } from "./BoardColumn";

const columns = ["Todo", "In Progress", "Review", "Done"];

interface Props {
  tasks: Task[];
}

export function Board({ tasks }: Props) {
  return (
    <section className="grid gap-6 lg:grid-cols-4">
      {columns.map((column) => (
        <BoardColumn
          key={column}
          title={column}
          tasks={tasks.filter((task) => task.column === column)}
        />
      ))}
    </section>
  );
}
