import { axiosDefaultInstance } from "../axios";
import {
  useQuery,
  useMutation,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query";

export interface SalaryDetails {
  // Define the properties of salary details
}

export const getSalaryDetails = async (): Promise<SalaryDetails[]> => {
  const response = await axiosDefaultInstance.get<SalaryDetails[]>(
    "/salary-details"
  );
  return response.data;
};

export const useSalaryDetailsQuery = (
  options?: UseQueryOptions<SalaryDetails[]>
) => {
  return useQuery<SalaryDetails[]>("salaryDetails", getSalaryDetails, options);
};

export const createSalaryDetails = async (
  data: SalaryDetails
): Promise<SalaryDetails> => {
  const response = await axiosDefaultInstance.post<SalaryDetails>(
    "/salary-details",
    data
  );
  return response.data;
};

export const useCreateSalaryDetailsMutation = (
  options?: UseMutationOptions<SalaryDetails, any, SalaryDetails>
) => {
  return useMutation<SalaryDetails, any, SalaryDetails>(
    createSalaryDetails,
    options
  );
};

export const updateSalaryDetails = async (
  id: string,
  data: SalaryDetails
): Promise<SalaryDetails> => {
  const response = await axiosDefaultInstance.put<SalaryDetails>(
    `/salary-details/${id}`,
    data
  );
  return response.data;
};

export const useUpdateSalaryDetailsMutation = (
  options?: UseMutationOptions<
    SalaryDetails,
    any,
    { id: string; data: SalaryDetails }
  >
) => {
  return useMutation<SalaryDetails, any, { id: string; data: SalaryDetails }>(
    updateSalaryDetails as any, // ! TODO
    options
  );
};

export const deleteSalaryDetails = async (id: string): Promise<void> => {
  await axiosDefaultInstance.delete(`/salary-details/${id}`);
};

export const useDeleteSalaryDetailsMutation = (
  options?: UseMutationOptions<void, any, string>
) => {
  return useMutation<void, any, string>(deleteSalaryDetails, options);
};
