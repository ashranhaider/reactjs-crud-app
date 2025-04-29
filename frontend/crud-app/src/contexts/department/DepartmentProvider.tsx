import { ReactNode, useState } from "react";
import { Department } from "../../models/Department";
import DepartmentContext from "./DepartmentContext";

export const DepartmentProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDepartment, setSelectedDepartment] =  useState<Department | null>(null);

  return (
    <DepartmentContext.Provider  value={{ selectedDepartment, setSelectedDepartment }} >
      {children}
    </DepartmentContext.Provider>
  );
};
