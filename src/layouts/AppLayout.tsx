import React from "react";
import { Outlet } from "react-router-dom";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  // const appRoutes = useAppRoutes(routes);

  return (
    <div className="bg-light-background">
      <Outlet />
      {children}
    </div>
  );
}
