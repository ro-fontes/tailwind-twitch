import { Layout } from "@/components/Layout";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex mt-3 items-center justify-between p-6">
        <button className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20">
          <ArrowLeft />
        </button>
        <Image
          src="/gaules.jpg"
          width={560}
          height={320}
          alt="Imagem do Gaules fazendo live"
        />
        <button className="flex items-center p-2 w-9 h-9 rounded hover:bg-zinc-400/20">
          <ArrowRight />
        </button>
      </div>
    </Layout>
  );
}
