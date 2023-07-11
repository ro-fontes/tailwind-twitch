import Image from "next/image";
import React from "react";

export const TimeLineContent = (): JSX.Element => {
  return (
    <>
      <div className="flex space-y-5 ">
        <Image
            src="/gaules.jpg"
            width={560}
            height={320}
            alt="Imagem do Gaules fazendo live"
          />
          <div className="bg-black w-56 h-"></div>
      </div>
    </>
  );
};
