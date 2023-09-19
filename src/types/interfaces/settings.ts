type BackupOption = "midnight" | "weekly" | "monthly" | "custom";

type Theme = "light" | "dark" | "auto";

type NotificationSound = "default" | "chime" | "bell" | "beep" | "custom_sound_choices"; // point to notifs urls...

export interface ISettings {
  language: string;
  timeZone: string;
  dateFormat: string;
  theme: Theme;

  // Notification Settings
  enableNotifications: boolean;
  notificationSound: NotificationSound;
  setNotificationSound: (sound: NotificationSound) => void;

  // Backup Settings
  backupOption: BackupOption;
  backupFrequency?: string; // Only applicable if backupOption is "custom"
  setBackupOption: (option: BackupOption) => void;
  setCustomBackupFrequency: (frequency: string) => void;

  // User Interface Settings
  showSidebar: boolean;
  compactMode: boolean;
  fontSize: number;
  showAvatars: boolean;
  toggleSidebar: () => void;
  toggleCompactMode: () => void;
  setFontSize: (size: number) => void;
  toggleShowAvatars: () => void;
}
