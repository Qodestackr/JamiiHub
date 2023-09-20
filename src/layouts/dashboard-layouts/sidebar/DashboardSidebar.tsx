import React from "react";
import { Link } from "react-router-dom";

import {
  HomeIcon,
  Box as OrganizationIcon,
  Users as MembersIcon,
  CalendarCheck2 as EventIcon,
  Wallet,
  CreditCard as ContibutionIcon,
  Banknote as DepositIcon,
  LogOutIcon
} from "lucide-react";

const sidebarItems = [
  { route: "/dashboard/", name: "Home", icon: HomeIcon },
  { route: "/dashboard/payments", name: "Payments", icon: DepositIcon },
];

const adminItems = [
  {
    route: "/dashboard/organization",
    name: "Organization",
    icon: OrganizationIcon,
  },
  { route: "/dashboard/members", name: "Members", icon: MembersIcon },
  { route: "/dashboard/events", name: "Events", icon: EventIcon },
  { route: "/dashboard/wallet", name: "Wallet", icon: Wallet },
  { route: "/dashboard/contribution", name: "Contribution", icon: ContibutionIcon },
  { route: "/login", name: "Logout", icon: LogOutIcon }
];

export default function DashboardSidebar() {
  return (
    <aside className="bg-gray-800 text-white">
      <nav>
        <ul className="overflow-hidden flex flex-row gap-4 justify-between items-end md:items-start md:gap-2 md:flex-col">
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center hover:text-gray-300"
              >
                {React.createElement(item.icon, { size: 24 })}
                <span className="hidden lg:inline-block ml-2">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <li className="md:mt-8 md:mb-4 text-sm text-gray-400 uppercase hidden md:block">
            Main
          </li>
          {adminItems.map((item, index) => (
            <li key={index} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center hover:text-gray-300"
              >
                {React.createElement(item.icon, { size: 24 })}
                <span className="hidden lg:inline-block ml-2">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
