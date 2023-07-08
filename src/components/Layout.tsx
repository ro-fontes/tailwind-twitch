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
      <div className="flex flex-1">
        <SideNavigation />
        <main className="w-full h-80">{children}</main>
      </div>
    </div>
  );
};
