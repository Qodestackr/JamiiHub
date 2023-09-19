import React from "react";
import {
  Home as LucidHome,
  Search,
  Bell,
  BellOff,
  UserCircle,
  LogOut,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Badge } from "@/core/components";
import DashboardSidebar from "@/layouts/dashboard-layouts/sidebar/DashboardSidebar";
import DashboardNav from "@/layouts/dashboard-layouts/DashboardNav";

function DashboardHome() {
  const isAuthenticated = true;
  const allowNotifications = false;

  return (
    <main className="grid lg:grid-cols-[2.5fr,9fr] gap-1 h-screen">
      <div className="bg-gray-100">
        <DashboardNav />
        <h3 className="text-2xl">Welcome Back</h3>
        {/* Cannot remove the Outlet yet I need render some defaults... Show the way */}
        <div className="shadow-md rounded-md w-full">
          <Outlet />
        </div>
      </div>

      <span className="bg-gray-800 text-white order-last lg:order-first">
        <DashboardSidebar />
      </span>
    </main>
  );
}

export default DashboardHome;
