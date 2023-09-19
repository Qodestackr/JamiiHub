type NotificationType = "success" | "error" | "warning";

type NotificationLabelType = "Improvement" | "Urgent" | "New";

export interface INotificationOptions<T extends NotificationLabelType> {
  showNotification: boolean;
  notificationType: NotificationType;
  title: string;
  message: string;
  label: T; // Label property of type T for the notification label
  clearNotificationTimeout: number; // in milliseconds
  onNotificationClick?: () => void;
  onNotificationClose?: () => void;
}

const CLEAR_NOTIFICATION_IN_MS = 5000;
// Example usage:
const notificationOptions: INotificationOptions<"Urgent"> = {
  showNotification: true,
  notificationType: "error",
  title: "Error",
  message: "An error occurred!",
  label: "Urgent",
  clearNotificationTimeout: CLEAR_NOTIFICATION_IN_MS,
  onNotificationClick: () => {
    console.log("Notification clicked!");
  },
  onNotificationClose: () => {
    console.log("Notification closed!");
  },
};
