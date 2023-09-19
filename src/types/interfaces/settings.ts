type BackupOption = "midnight" | "weekly" | "monthly" | "custom";

type Theme = "light" | "dark" | "auto";

type NotificationSound = "default" | "chime" | "bell" | "beep" | "custom";

export interface ISettings {
  language: string;
  timeZone: string;
  dateFormat: string;
  theme: Theme;

  // Notification Settings
  enableNotifications: boolean;
  notificationSound: NotificationSound;
  setNotificationSound: (sound: NotificationSound) => void;
  fontSize: number;
  toggleSidebar: () => void;
  toggleCompactMode: () => void;
  setFontSize: (size: number) => void;
  toggleShowAvatars: () => void;
}
