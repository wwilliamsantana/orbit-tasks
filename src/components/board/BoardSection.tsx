import { Board } from "@/components/board/Board";
import { FloatingActionButton } from "./FloatingActionButton";
import { BoardHeader } from "./BoardHeader";
import { BoardFilters } from "./BoardFilters";

export function BoardSection() {
  return (
    <section className="p-8">
      <BoardHeader />
      <BoardFilters />
      <Board />
      <FloatingActionButton />
    </section>
  );
}
