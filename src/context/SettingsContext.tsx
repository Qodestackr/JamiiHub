import React, { createContext, useContext, useState } from "react";
import { ISettings } from "../types/interfaces/settings";

// Create the SettingsContext
const SettingsContext = createContext<ISettings | undefined>(undefined);

// SettingsContext Provider component
export function SettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Implement your state and functions here based on the ISettings interface
  // For simplicity, let's just use a placeholder value for now
  const settings: ISettings = {
    language: "en",
    timeZone: "UTC",
    dateFormat: "MM/dd/yyyy",
    theme: "light",
    enableNotifications: true,
    notificationSound: "default",
    setNotificationSound: (sound) => {},
    backupOption: "midnight",
    setBackupOption: (option) => {},
    setCustomBackupFrequency: (frequency) => {},
    showSidebar: true,
    compactMode: false,
    fontSize: 16,
    showAvatars: true,
    toggleSidebar: () => {},
    toggleCompactMode: () => {},
    setFontSize: (size) => {},
    toggleShowAvatars: () => {},
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

// Hook to use the SettingsContext
export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContextProvider"
    );
  }
  return context;
}