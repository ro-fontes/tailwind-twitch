import { TwitchIcon, MoreVertical, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full bg-zinc-900 p-3 items-center flex justify-between">
        <nav className="flex space-x-8">
          <a href="" className="flex items-center text-lg font-bold">
            <TwitchIcon />
          </a>
          <a className="flex items-center text-lg font-bold">Seguindo</a>
          <a className="flex items-center text-lg font-bold">Procurar</a>
          <a className="flex items-center text-lg font-bold">
            <MoreVertical />
          </a>
        </nav>
        <div className="rounded-s-md border-2 border-zinc-400 w-96 p-1">
          <h2 className="ml-1">Buscar</h2>
        </div>
        <h1>search</h1>
        <h1>teste</h1>
      </header>
      <div className="flex">
        <aside className="w-60">aside</aside>
        <main className="w-full h-80">
            <div className="flex mt-3 items-center justify-between p-6">
              <a href="#" className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20" >
                 <ArrowLeft/>
              </a>
              <Image src="/gaules.jpg" width={560} height={320} alt="Imagem do Gaules fazendo live"/>
              <a href="#"className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20">
                
                <ArrowRight/>
              </a>

            </div>
          </main>
      </div>
    </div>
  );
}
