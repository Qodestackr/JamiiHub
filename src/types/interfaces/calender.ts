export interface ICalendarOptions {
  timeZone: string; // Time zone for the calendar
  showWeekends: boolean;
  showHolidays: boolean;
  showEvents: boolean;
  defaultView: "month" | "week" | "day"; // Default view for the calendar (e.g., month, week, day)
  minDate: Date; // Minimum date allowed in the calendar
  maxDate: Date; // Maximum date allowed in the calendar
  eventColor: string; // Default color for events in the calendar
  holidays: Date[]; // Array of dates representing holidays
  events: ICalendarEvent[]; // Array of events to be displayed in the calendar
}

type locationOptions =
  | "ONLINE"
  | "PHYSICAL"
  | "HYBRID"
  | "REMOTE"
  | "CUSTOM"
  | "OTHER";

export interface ICalendarEvent {
  eventId: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: locationOptions;
  color?: string; // overriding the default eventColor
  recurring?: boolean;
  recurrencePattern?: string; // (e.g., daily, weekly, monthly)
  recurrenceEndDate?: Date; // End date for recurring events
}
