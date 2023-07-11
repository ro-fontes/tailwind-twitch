"use client";
import React from "react";
import { HeaderComponent } from "./Header";
import { SideNavigation } from "./SideNavigation";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className="h-screen flex flex-col">
      <HeaderComponent />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideNavigation />
        <main className="w-full overflow-y-scroll">{children}</main>
      </div>
    </div>
  );
};
