import { useEffect, useState } from "react";
import { getDepartments } from "../../services/departmentService";
import { Department } from "../../models/Department";

function useDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const data = await getDepartments();
      setDepartments(data);
      setError("");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || err.message || "Error loading departments"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return { departments, loading, error, refetch: fetchDepartments };
}

export default useDepartments;
