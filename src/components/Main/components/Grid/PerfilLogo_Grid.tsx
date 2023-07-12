import { getStreamerImage } from "@/utils/getStreamerImage";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PerfilLogoGrid({ userName }: { userName: string }) {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const run = async () => {
      const image = await getStreamerImage(userName);
      setProfileImage(image);
    };
    run();
  });

  return (
    <div className="h-11 w-11">
      <Image
        className="flex rounded-full"
        src={profileImage}
        width={42}
        height={42}
        alt={profileImage}
      />
    </div>
  );
}
