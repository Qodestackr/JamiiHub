import React, { createContext, useContext, useState } from "react";

type NotificationType = "success" | "error" | "warning";
type NotificationLabelType = "Improvement" | "Urgent" | "New";

interface INotificationOptions<T extends NotificationLabelType> {
  showNotification: boolean;
  notificationType: NotificationType;
  title: string;
  message: string;
  label: T;
  clearNotificationTimeout: number; // duration in milliseconds
  onNotificationClick?: () => void;
  onNotificationClose?: () => void;
}

const NotificationsContext = createContext<
  INotificationOptions<NotificationLabelType> | undefined
>(undefined);

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

  return (
    <NotificationsContext.Provider value={notificationOptions}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotificationsContext() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotificationsContext must be used within a NotificationsContextProvider"
    );
  }
  return context;
}
