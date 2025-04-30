
import apiClient from "../common/apiClient";
import { Employee } from "../models/Employee";
import { addEmployeeViewModel } from "../viewModels/AddEmployeeVM";

export async function getEmployees(): Promise<Employee[]> {
  const response = await apiClient.get<Employee[]>("/employees");
  return response.data;
}

// You can also define other CRUD functions:
export async function createEmployee(employee: addEmployeeViewModel): Promise<Employee> {
  const response = await apiClient.post<Employee>("/employees", employee);
  return response.data;
}

// Similarly: updateEmployee, deleteEmployee, etc.
