export interface Department {
  id: number;
  name: string;
}
export interface DepartmentContextType {
  selectedDepartment: Department | null;
  setSelectedDepartment: (department: Department) => void;
}