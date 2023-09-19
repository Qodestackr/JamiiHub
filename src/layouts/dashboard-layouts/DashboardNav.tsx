import {
  Bell,
  BellOff,
  Link,
  LogOut,
  Search,
  UserCircle,
  Home as LucidHome,
  SearchIcon,
} from "lucide-react";

import { Badge } from "@/core/components";

export default function DashboardNav() {
  const allowNotifications = false;
  const isAuthenticated = true;
  return (
    <div className="bg-primary py-4 flex justify-between items-center mb-2">
      <Badge
        variant={"outline"}
        className="ml-2 py-2 text-white bg-green-400 hover:bg-green-300
             hover:text-white hover:cursor-pointer"
      >
        Welcome Back
      </Badge>

      <div className="flex items-center">
        <button className="text-muted-foreground mx-3 hover:text-white">
          {allowNotifications ? <Bell /> : <BellOff />}
        </button>
        <button className="text-muted-foreground mx-3 hover:text-white">
          <UserCircle />
        </button>
      </div>
    </div>
  );
}
