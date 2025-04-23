
import apiClient from "../common/apiClient";
import { Employee } from "../models/Employee";

export async function fetchEmployees(): Promise<Employee[]> {
  const response = await apiClient.get<Employee[]>("/employees");
  return response.data;
}

// You can also define other CRUD functions:
export async function createEmployee(employee: Employee): Promise<Employee> {
  const response = await apiClient.post<Employee>("/employees", employee);
  return response.data;
}

// Similarly: updateEmployee, deleteEmployee, etc.
