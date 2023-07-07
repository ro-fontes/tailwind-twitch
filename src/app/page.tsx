import {
  Crown,
  CrownIcon,
  Inbox,
  MessageSquare,
  Twitch,
  MoreVertical,
  Search,
  ArrowLeftFromLine,
  ArrowUpDown,
} from "lucide-react";
import { BsTwitch, BsChatSquare } from "react-icons/bs";
import { TbTriangle } from "react-icons/tb";
import { LiaBatteryEmptySolid } from "react-icons/lia";
import { CgCrown } from "react-icons/cg";
import { AiOutlineInbox } from "react-icons/ai";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full h-14 bg-zinc-900 p-3 items-center flex justify-between">
        <nav className="flex space-x-8">
          <a href="" className="flex items-center text-lg font-bold">
            <BsTwitch size={30} />
          </a>
          <a
            href=""
            className="flex items-center text-lg font-bold hover:text-purple-300"
          >
            Seguindo
          </a>
          <a
            href=""
            className="flex items-center text-lg font-bold hover:text-purple-300"
          >
            Procurar
          </a>
          <a href="" className="flex items-center text-lg font-bold">
            <MoreVertical />
          </a>
        </nav>
        <div className="flex">
          <input
            className="rounded-s-md border border-zinc-500 w-96 p-1 hover:border-zinc-950 ml-1 bg-transparent active:border-purple-950 focus:border-purple-950"
            placeholder="Buscar"
          />
          <div className="bg-zinc-700 rounded-e items-center p-1">
            <Search />
          </div>
        </div>
        <div className="flex">
          <div className="flex space-x-5 mr-3">
            <button>
              <CgCrown size={20} />
            </button>
            <button>
              <AiOutlineInbox size={20} />
            </button>
            <button>
              <BsChatSquare size={14} strokeWidth={1.5} />
            </button>
            <button>
              <TbTriangle size={20} />
            </button>
            <button className="bg-zinc-700 rounded-md px-3 p-1 text-sm font-bold flex items-center gap-2">
              <LiaBatteryEmptySolid size={20} strokeWidth={1} />
              Assista sem anúncios
            </button>
          </div>
          <Image
            className="rounded-full"
            src={"/profileImage.png"}
            width={30}
            height={30}
            alt="Imagem do perfil"
          />
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-60 bg-neutral-800 h-full flex-col p-3">
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
        <main>main</main>
      </div>
    </div>
  );
}
