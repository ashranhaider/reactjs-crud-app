import apiClient from "../common/apiClient";
import { Department } from "../models/Department";

export async function getDepartments(): Promise<Department[]> {

    const response = await apiClient.get<Department[]>("/departments");
    return response.data;
}

export async function getDepartment(id: number): Promise<Department> {
    const response = await apiClient.get<Department>(`/departments/${id}`);
    return response.data;
}

export async function createDepartment(department: Department): Promise<Department> {
    const response = await apiClient.post<Department>("/departments", department);
    return response.data;
}