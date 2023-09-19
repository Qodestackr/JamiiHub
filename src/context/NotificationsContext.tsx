import React, { createContext, useContext, useState } from "react";

// Define the NotificationType and NotificationLabelType types
type NotificationType = "success" | "error" | "warning";
type NotificationLabelType = "Improvement" | "Urgent" | "New";

// Define the shape of the notification options
interface INotificationOptions<T extends NotificationLabelType> {
  showNotification: boolean;
  notificationType: NotificationType;
  title: string;
  message: string;
  label: T; // Add a label property of type T for the notification label
  clearNotificationTimeout: number; // Use number to specify duration in milliseconds
  onNotificationClick?: () => void; // Function to handle click on the notification
  onNotificationClose?: () => void; // Function to handle close of the notification
}

// Create the NotificationsContext
const NotificationsContext = createContext<
  INotificationOptions<NotificationLabelType> | undefined
>(undefined);

// NotificationsContext Provider component
export function NotificationsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notificationOptions, setNotificationOptions] = useState<
    INotificationOptions<NotificationLabelType> | undefined
  >(undefined);

  const clearNotification = () => {
    setNotificationOptions(undefined);
  };

  // Other functions to handle notification actions can be added here

  return (
    <NotificationsContext.Provider value={notificationOptions}>
      {children}
      {/* Render the notification component here using the notificationOptions */}
    </NotificationsContext.Provider>
  );
}

// Hook to use the NotificationsContext
export function useNotificationsContext() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotificationsContext must be used within a NotificationsContextProvider"
    );
  }
  return context;
}
