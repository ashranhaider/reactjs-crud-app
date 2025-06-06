import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../../services/departmentService";

function useDepartments2() {
    return useQuery({
        queryKey: ["departments"],
        queryFn: getDepartments
    });
}
export default useDepartments2;