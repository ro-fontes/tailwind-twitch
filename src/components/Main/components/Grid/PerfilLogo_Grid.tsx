import Image from "next/image";

export function PerfilLogoGrid() {
  return (
    <div className="">
      <Image
        className="flex ml-6 mr-2 mt-5 mb-2 rounded-full"
        src="/logoGaules.jpg"
        width={42}
        height={42}
        alt="Imagem do Gaules fazendo live"
      />
    </div>
  );
}
