import useDepartments from "../hooks/Departments/useDepartments";
import LoadingSkeleton from "./LoadingSkeleton";

function DepartmentList() {
    
    const { departments, loading, error } = useDepartments();
    
    if (loading) return <LoadingSkeleton />;
    if (error) return <div className="alert alert-danger" role="alert">{error}</div>;

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
                                    {/* <Link
                                        to={`/editemployee/${dep.id}`}
                                        className="btn btn-primary me-2"
                                    >
                                        <FaEdit className="me-1" />
                                        Edit
                                    </Link> */}

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>

    );
}
export default DepartmentList;