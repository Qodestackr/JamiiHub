import * as z from "zod";

// Define common schemas
const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const notificationTypeSchema = z.enum(["success", "error", "warning"]);

const notificationLabelSchema = z.enum(["Improvement", "Urgent", "New"]);

const backupOptionSchema = z.enum(["midnight", "weekly", "monthly", "custom"]);

const themeSchema = z.enum(["light", "dark", "auto"]);

const notificationSoundSchema = z.enum(["default", "chime", "bell", "beep"]);

const fileTypeSchema = z.enum(["pdf", "docx", "csv", "txt", "png", "jpeg"]);

// Employee schemas
export const employeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  department: z.string(),
  position: z.string(),
  dateOfBirth: z.date(),
  gender: z.enum(["male", "female", "other"]),
  nationality: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  avatar: z.string().url(),
  emergencyContact: z.object({
    name: z.string(),
    relationship: z.string(),
    phoneNumber: z.string(),
  }),
});

// Leave schemas
export const leaveRequestTypeSchema = z.enum([
  "LEAVE_DAYS",
  "SICK_LEAVE",
  "MATERNITY_LEAVE",
  "PATERNITY_LEAVE",
]);

export const leaveRequestSchema = z.object({
  leaveRequestId: z.string(),
  employeeId: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  type: leaveRequestTypeSchema,
  status: z.enum(["pending", "approved", "rejected"]),
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

// Payroll schemas
export const allowanceTypeSchema = z.object({
  name: z.string(),
  amount: z.number(),
});

export const deductionTypeSchema = z.object({
  name: z.string(),
  amount: z.number(),
});

export const salaryDetailsSchema = z.object({
  employeeId: z.string(),
  baseSalary: z.number(),
  allowances: z.array(allowanceTypeSchema),
  deductions: z.array(deductionTypeSchema),
  netSalary: z.number(),
});

// Settings schemas
export const settingsSchema = z.object({
  language: z.string(),
  timeZone: z.string(),
  dateFormat: z.string(),
  theme: themeSchema,
  enableNotifications: z.boolean(),
  notificationSound: notificationSoundSchema,
  backupOption: backupOptionSchema,
  backupFrequency: z.string().optional(),
  showSidebar: z.boolean(),
  compactMode: z.boolean(),
  fontSize: z.number(),
  showAvatars: z.boolean(),
});
