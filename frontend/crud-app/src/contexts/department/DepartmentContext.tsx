// src/contexts/department/DepartmentContext.tsx
import { createContext } from "react";
import { DepartmentContextType } from "../../models/Department";

const DepartmentContext = createContext<DepartmentContextType | undefined>(
  undefined
);

export default DepartmentContext;
