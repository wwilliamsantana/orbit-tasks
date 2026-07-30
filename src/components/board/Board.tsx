import { Column } from "@/types/task";
import { SortableContext } from "@dnd-kit/sortable";
import { horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableColumn } from "./SortableColumn";

interface Props {
  board: Column[];
}

export function Board({ board }: Props) {
  return (
    <SortableContext
      items={board.map((column) => column.id)}
      strategy={horizontalListSortingStrategy}
    >
      <section className="grid gap-6 lg:grid-cols-4">
        {board.map((column) => (
          <SortableColumn key={column.id} column={column} />
        ))}
      </section>
    </SortableContext>
  );
}
