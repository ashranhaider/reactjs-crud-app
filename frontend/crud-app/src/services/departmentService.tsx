import apiClient from "../common/apiClient";
import { Department } from "../models/Department";

export async function getDepartments(): Promise<Department[]> {

    const data = await apiClient.get<Department[]>("/departments");
    return data.data;
}
