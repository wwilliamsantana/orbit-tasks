import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-18 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <Logo />

      <div className="flex items-center gap-4">
        <SearchInput />
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
