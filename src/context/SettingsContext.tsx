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
  const settings: ISettings = {
    language: "en",
    timeZone: "UTC",
    dateFormat: "MM/dd/yyyy",
    theme: "light",
    enableNotifications: true,
    notificationSound: "default",
    setNotificationSound: (sound) => { },
    fontSize: 16,
    toggleSidebar: () => { },
    toggleCompactMode: () => { },
    setFontSize: (size) => { },
    toggleShowAvatars: () => { },
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContextProvider"
    );
  }
  return context;
}