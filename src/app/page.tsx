import { BoardSection } from "@/components/board/BoardSection";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <BoardSection />
      </main>
    </>
  );
}
