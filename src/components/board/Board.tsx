import { BoardColumn } from "./BoardColumn";

const columns = ["Todo", "In Progress", "Review", "Done"];

export function Board() {
  return (
    <section className="grid gap-6 lg:grid-cols-4">
      {columns.map((column) => (
        <BoardColumn key={column} title={column} />
      ))}
    </section>
  );
}
