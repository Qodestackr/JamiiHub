import { axiosDefaultInstance } from "../axios";
import {
  useQuery,
  useMutation,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query";

export interface UserProfile {
  // Define the properties of the user profile
}

export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await axiosDefaultInstance.get<UserProfile>("/user/profile");
  return response.data;
};

export const useUserProfileQuery = (options?: UseQueryOptions<UserProfile>) => {
  return useQuery<UserProfile>("userProfile", getUserProfile, options);
};

export const editUserProfile = async (
  data: UserProfile
): Promise<UserProfile> => {
  const response = await axiosDefaultInstance.put<UserProfile>(
    "/user/profile",
    data
  );
  return response.data;
};

export const useEditUserProfileMutation = (
  options?: UseMutationOptions<UserProfile, any, UserProfile>
) => {
  return useMutation<UserProfile, any, UserProfile>(editUserProfile, options);
};
