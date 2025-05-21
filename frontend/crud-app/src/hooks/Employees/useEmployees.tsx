import { useEffect, useState } from "react";
import { Employee } from "../../models/Employee";
import { getEmployees } from "../../services/employeeService";

function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  
  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
      setError("");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err.message ||
        "Error loading employees"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return { employees, loading, error, refetchData:loadEmployees};
}

export default useEmployees;

