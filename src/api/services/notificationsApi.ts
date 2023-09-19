import { axiosDefaultInstance } from "../axios";
import { useQuery, UseQueryOptions } from "react-query";

export interface Notification {
  // Define the properties of a notification
}

export const getNotifications = async (): Promise<Notification[]> => {
  const response = await axiosDefaultInstance.get<Notification[]>(
    "/notifications"
  );
  return response.data;
};

export const useNotificationsQuery = (
  options?: UseQueryOptions<Notification[]>
) => {
  return useQuery<Notification[]>("notifications", getNotifications, options);
};
