"use client";
import { ArrowLeftFromLine, ArrowUpDown } from "lucide-react";

export const SideNavigation = (): JSX.Element => {
  return (
    <aside className="w-64 bg-neutral-800 h-full flex-col p-3">
      <div className="font-bold text-lg flex justify-between items-center mb-3">
        Para voce
        <button>
          <ArrowLeftFromLine size={18} />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm">CANAIS SEGUIDOS</p>
          <p className="text-zinc-500 text-sm">
            Espectadores (ordem decrescente)
          </p>
        </div>
        <button>
          <ArrowUpDown size={18} />
        </button>
      </div>
    </aside>
  );
};
