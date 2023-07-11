import { getStreamerImage } from "@/utils/getStreamerImage";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface ProfileImageCard extends Partial<ImageProps> {
  userName: string;
}

export function ProfileImageCard({ userName, ...rest }: ProfileImageCard) {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const run = async () => {
      const image = await getStreamerImage(userName);
      setProfileImage(image);
    };
    run();
  });

  return <Image {...rest} alt={userName} src={profileImage} />;
}
