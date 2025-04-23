import { Department } from "./Department";

export interface Employee {
  id: number;
  fullName: string;
  position: string;
  departmentId: number;
  department: Department;
}
