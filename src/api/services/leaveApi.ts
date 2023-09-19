import { axiosDefaultInstance } from "../axios";
import {
  useQuery,
  useMutation,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query";

export interface LeaveRequest {
  // Define the properties of a leave request
}

export const getLeaveRequests = async (): Promise<LeaveRequest[]> => {
  const response = await axiosDefaultInstance.get<LeaveRequest[]>(
    "/leave-requests"
  );
  return response.data;
};

export const useLeaveRequestsQuery = (
  options?: UseQueryOptions<LeaveRequest[]>
) => {
  return useQuery<LeaveRequest[]>("leaveRequests", getLeaveRequests, options);
};

export const createLeaveRequest = async (
  data: LeaveRequest
): Promise<LeaveRequest> => {
  const response = await axiosDefaultInstance.post<LeaveRequest>(
    "/leave-requests",
    data
  );
  return response.data;
};

export const useCreateLeaveRequestMutation = (
  options?: UseMutationOptions<LeaveRequest, any, LeaveRequest>
) => {
  return useMutation<LeaveRequest, any, LeaveRequest>(
    createLeaveRequest,
    options
  );
};

export const updateLeaveRequest = async (
  id: string,
  data: LeaveRequest
): Promise<LeaveRequest> => {
  const response = await axiosDefaultInstance.put<LeaveRequest>(
    `/leave-requests/${id}`,
    data
  );
  return response.data;
};

export const useUpdateLeaveRequestMutation = (
  options?: UseMutationOptions<
    LeaveRequest,
    any,
    { id: string; data: LeaveRequest }
  >
) => {
  return useMutation<LeaveRequest, any, { id: string; data: LeaveRequest }>(
    updateLeaveRequest as any, // !TODO
    options
  );
};

export const deleteLeaveRequest = async (id: string): Promise<void> => {
  await axiosDefaultInstance.delete(`/leave-requests/${id}`);
};

export const useDeleteLeaveRequestMutation = (
  options?: UseMutationOptions<void, any, string>
) => {
  return useMutation<void, any, string>(deleteLeaveRequest, options);
};
