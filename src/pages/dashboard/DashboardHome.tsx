import { Outlet, useLocation } from "react-router-dom";

import DashboardSidebar from "@/layouts/dashboard-layouts/sidebar/DashboardSidebar";
import DashboardNav from "@/layouts/dashboard-layouts/DashboardNav";


function upperCaseFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}


function DashboardHome() {
  const currentLocation = useLocation();
  const pathSegments = currentLocation.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  const dashboardSection =
    currentLocation.pathname === "/uc"
      ? currentLocation.pathname.toUpperCase()
      : upperCaseFirstLetter(lastSegment);


  return (
    <main className="grid lg:grid-cols-[2.5fr,9fr] gap-[3px] h-screen">
      <div className="bg-gray-100">
        <DashboardNav />
        <h3 className="text-2xl my-6">{dashboardSection}</h3>
        <div className="shadow-md rounded-md w-full">
          {
            currentLocation.pathname === "/dashboard" ? <h1 className="text-5xl text-slate-400 flex justify-center items-center p-10">Welcome Back</h1> : <Outlet />
          }

        </div>
      </div>

      <span className="bg-gray-800 text-white order-last lg:order-first">
        <DashboardSidebar />
      </span>
    </main>
  );
}

export default DashboardHome;
