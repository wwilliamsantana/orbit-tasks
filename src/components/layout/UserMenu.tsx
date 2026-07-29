import Image from "next/image";

export function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-xl transition hover:bg-slate-100 dark:hover:bg-slate-800 p-2">
      <Image
        src="https://github.com/wwilliamsantana.png"
        alt="Avatar"
        width={40}
        height={40}
        className="rounded-full"
      />

      <div className="text-left">
        <h3 className="text-sm font-semibold">
          William Santana
        </h3>

        <p className="text-xs text-slate-500">
          Product Designer
        </p>
      </div>
    </button>
  );
}