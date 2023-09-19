import React, { createContext, useContext, useState } from "react";

// Define interfaces and types for administrative data
export interface User {
  userId: string;
  username: string;
  role: string;
  // Add other user-related properties here
}

export interface Permission {
  name: string;
  description: string;
  // Add other permission-related properties here
}

export interface AdminData {
  users: User[];
  permissions: Permission[];
  // Add other administrative data properties here
}

// Define the shape of the AdminContext data and actions
interface AdminContextData {
  adminData: AdminData;
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  addPermission: (permission: Permission) => void;
  removePermission: (permissionName: string) => void;
  // Add other administrative actions here
}

// Create the AdminContext
const AdminContext = createContext<AdminContextData | undefined>(undefined);

// AdminContext Provider component
export function AdminContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [adminData, setAdminData] = useState<AdminData>({
    users: [], // Initialize with an empty array of users
    permissions: [], // Initialize with an empty array of permissions
    // Add other initial administrative data here
  });

  // Function to add a new user
  const addUser = (user: User) => {
    setAdminData((prevData) => ({
      ...prevData,
      users: [...prevData.users, user],
    }));
  };

  // Function to remove a user by userId
  const removeUser = (userId: string) => {
    setAdminData((prevData) => ({
      ...prevData,
      users: prevData.users.filter((user) => user.userId !== userId),
    }));
  };

  // Function to add a new permission
  const addPermission = (permission: Permission) => {
    setAdminData((prevData) => ({
      ...prevData,
      permissions: [...prevData.permissions, permission],
    }));
  };

  // Function to remove a permission by permissionName
  const removePermission = (permissionName: string) => {
    setAdminData((prevData) => ({
      ...prevData,
      permissions: prevData.permissions.filter(
        (permission) => permission.name !== permissionName
      ),
    }));
  };

  // Other administrative actions can be added here

  const adminContextValue: AdminContextData = {
    adminData,
    addUser,
    removeUser,
    addPermission,
    removePermission,
    // Add other administrative actions here
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      {children}
    </AdminContext.Provider>
  );
}

// Hook to use the AdminContext
export function useAdminContext() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error(
      "useAdminContext must be used within an AdminContextProvider"
    );
  }
  return context;
}
