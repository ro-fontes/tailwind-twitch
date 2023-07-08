import React from "react";

interface INavButtonProps {
  link: string;
  text?: string;
  icon?: React.ReactNode;
}

export const NavButton = ({
  icon,
  link,
  text,
}: INavButtonProps): JSX.Element => {
  return (
    <a
      href={link}
      className="flex items-center text-lg font-bold hover:text-purple-300"
    >
      {text}
      {icon}
    </a>
  );
};
