"use client";
import React from "react";
import { MoreVertical } from "lucide-react";
import { BsTwitch } from "react-icons/bs";
import { NavButton } from "./NavButton";

export const NavTopGroup = (): JSX.Element => {
  return (
    <nav className="flex space-x-8">
      <NavButton link="#" icon={<BsTwitch size={30} />} />
      <NavButton text="Seguindo" link="#" />
      <NavButton text="Procurar" link="#" />
      <NavButton icon={<MoreVertical />} link="#" />
    </nav>
  );
};
