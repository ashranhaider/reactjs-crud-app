import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDepartment } from "../../services/departmentService";
import { Department } from "../../models/Department";

function useAddDepartment() {
    const queryClient = useQueryClient();

    return useMutation({ mutationFn: (d: Department) => createDepartment(d),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["departments"] }); // Refresh the list
          }
    });
}
export default useAddDepartment;