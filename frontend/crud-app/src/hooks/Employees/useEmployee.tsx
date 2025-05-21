import { useEffect, useState } from "react";
import { Employee } from "../../models/Employee";
import { getEmployee } from "../../services/employeeService";

function useEmployee(id:number){
    const [employees, setEmployees] = useState<Employee>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const loadEmployees = async () => {
          try {
              const data = await getEmployee(id);
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
    
        loadEmployees();
      }, [id]);
    
      return { employees, loading, error };
}
export default useEmployee;
// This hook is used to manage the state and logic for a single employee.