import { axiosDefaultInstance } from "../axios";
import {
  useQuery,
  useMutation,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query";

export interface Employee {
  // Define the properties of an employee
}

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axiosDefaultInstance.get<Employee[]>("/employees");
  return response.data;
};

export const useEmployeesQuery = (options?: UseQueryOptions<Employee[]>) => {
  return useQuery<Employee[]>("employees", getEmployees, options);
};

export const createEmployee = async (data: Employee): Promise<Employee> => {
  const response = await axiosDefaultInstance.post<Employee>(
    "/employees",
    data
  );
  return response.data;
};

export const useCreateEmployeeMutation = (
  options?: UseMutationOptions<Employee, any, Employee>
) => {
  return useMutation<Employee, any, Employee>(createEmployee, options);
};

export const updateEmployee = async (
  id: string,
  data: Employee
): Promise<Employee> => {
  const response = await axiosDefaultInstance.put<Employee>(
    `/employees/${id}`,
    data
  );
  return response.data;
};

export const useUpdateEmployeeMutation = (
  options?: UseMutationOptions<Employee, any, { id: string; data: Employee }>
) => {
  return useMutation<Employee, any, { id: string; data: Employee }>(
    updateEmployee as any, // !TODO
    options
  );
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await axiosDefaultInstance.delete(`/employees/${id}`);
};

export const useDeleteEmployeeMutation = (
  options?: UseMutationOptions<void, any, string>
) => {
  return useMutation<void, any, string>(deleteEmployee, options);
};
