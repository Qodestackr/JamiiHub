import * as z from "zod";

const notificationTypeSchema = z.enum(["success", "error", "warning"]);

const notificationLabelSchema = z.enum(["Improvement", "Urgent", "New"]);

const themeSchema = z.enum(["light", "dark", "auto"]);

const notificationSoundSchema = z.enum(["default", "chime", "bell", "beep"]);

// Member schemas
export const memberSchema = z.object({
  id: z.string(),
  firstAndLastName: z.string(),
  email: z.string().email(),
  department: z.string(),
  phoneNumber: z.string(),
  avatar: z.string().url(),
  password: z.string(),
  aragonAddress: z.string(),
  paymentAddress: z.string()
});

// Notification schemas
export const notificationOptionsSchema = z.object({
  showNotification: z.boolean(),
  notificationType: notificationTypeSchema,
  title: z.string(),
  message: z.string(),
  label: notificationLabelSchema,
  clearNotificationTimeout: z.number(),
  onNotificationClick: z.function(
    // z.undefined(),
    // z.undefined(),
    // "onNotificationClick"
  ),
  onNotificationClose: z.function(
    // z.undefined(),
    // z.undefined(),
    // "onNotificationClose"
  ),
});

// Settings schemas
export const settingsSchema = z.object({
  language: z.string(),
  timeZone: z.string(),
  dateFormat: z.string(),
  theme: themeSchema,
  enableNotifications: z.boolean(),
  notificationSound: notificationSoundSchema,
  showSidebar: z.boolean(),
  compactMode: z.boolean(),
  fontSize: z.number(),
  showAvatars: z.boolean(),
});
