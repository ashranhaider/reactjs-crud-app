
import apiClient from "../common/apiClient";
import { Employee } from "../models/Employee";
import { addEmployeeViewModel } from "../viewModels/AddEmployeeVM";
import { editEmployeeViewModel } from "../viewModels/editEmployeeViewModel";

export async function getEmployees(): Promise<Employee[]> {
  const response = await apiClient.get<Employee[]>("/employees");
  return response.data;
}
export async function getEmployee(id: number): Promise<Employee> {
  const response = await apiClient.get<Employee>(`/employees/${id}`);
  return response.data;
}
// You can also define other CRUD functions:
export async function createEmployee(employee: addEmployeeViewModel): Promise<Employee> {
  const response = await apiClient.post<Employee>("/employees", employee);
  return response.data;
}
export async function updateEmployee(employee: editEmployeeViewModel): Promise<Employee> {
  const response = await apiClient.put<Employee>(`/employees/${employee.id}`, employee);
  return response.data;
}
export async function deleteEmployee(id: number): Promise<void> {
  await apiClient.delete(`/employees/${id}`);
}
