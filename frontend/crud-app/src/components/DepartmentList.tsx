import { Link } from "react-router";
import useDepartments from "../hooks/Departments/useDepartment";
import LoadingSkeleton from "./LoadingSkeleton";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Department } from "../models/Department";
import { useState } from "react";
import DeletePopup from "./DeletePopup";
import { deleteDepartment } from "../services/departmentService";

function DepartmentList() {

    const { departments, refetchDepartments, loading, error } = useDepartments();
    const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);

    if (loading) return <LoadingSkeleton />;
    if (error) return <div className="alert alert-danger" role="alert">{error}</div>;

    const handleDeleteDepartment = async () => {
        if (!selectedDepartment) return;
        try {
            await deleteDepartment(selectedDepartment.id);
            await refetchDepartments();
        } catch (error) {
            console.error("Failed to delete Department:", error);
        } finally {
            setSelectedDepartment(null);
            setShowDeleteDialog(false);
        }
    };

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped employee-table mb-0">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Department Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((dep, index) => (
                            <tr key={dep.id}>
                                <td scope="row">{index + 1}</td>
                                <td>{dep.name}</td>

                                <td>
                                    <Link
                                        to={`/edit-department/${dep.id}`}
                                        className="btn btn-primary me-2"
                                    >
                                        <FaEdit className="me-1" />
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            setSelectedDepartment(dep);
                                            setShowDeleteDialog(true);
                                        }}
                                    >
                                        <FaTrash className="me-1" />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedDepartment && (
                <DeletePopup
                    name={selectedDepartment.name}
                    show={showDeleteDialog}
                    onConfirm={handleDeleteDepartment}
                    onHide={() => setShowDeleteDialog(false)}
                />
            )}
        </>

    );
}
export default DepartmentList;