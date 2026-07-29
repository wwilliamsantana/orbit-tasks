import { Board } from "@/components/board/Board";
import { FloatingActionButton } from "./FloatingActionButton";

export function BoardSection() {
  return (
    <section className="p-8">
      <Board />
      <FloatingActionButton />
    </section>
  );
}
