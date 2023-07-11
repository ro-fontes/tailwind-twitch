"use client";
import React from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { HeaderComponent } from "./Header";
import { SideNavigation } from "./SideNavigation";

interface ILayoutProps {
  children: React.ReactNode;
  hasScroll: boolean;
}

export const Layout = ({ children, hasScroll }: ILayoutProps): JSX.Element => {
  return (
    <div className="h-screen flex flex-col">
      <HeaderComponent />
      <div className="flex h-[calc(100vh-3.5rem)]">
        <SideNavigation />
        {hasScroll ? (
          <SimpleBarReact
            className="max-h-full max-w-full"
            style={{ maxHeight: "100%", width: "100%" }}
          >
            <main>{children}</main>
          </SimpleBarReact>
        ) : (
          <main className="w-full">{children}</main>
        )}
      </div>
    </div>
  );
};
