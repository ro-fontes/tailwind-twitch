import Image from "next/image";
import React from "react";

export const TimeLineContent = (): JSX.Element => {
  return (
    <div className="flex space-x-5 mr-3">
      <Image
          src="/gaules.jpg"
          width={560}
          height={320}
          alt="Imagem do Gaules fazendo live"
        />
    </div>
  );
};
