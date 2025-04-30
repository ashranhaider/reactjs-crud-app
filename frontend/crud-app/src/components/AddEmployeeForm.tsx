import { Form } from "react-bootstrap";
import { Department } from "../models/Department";
import useDepartment from "../hooks/Departments/useDepartment";
import { useState } from "react";

type AddEmployeeFormProps = {
    onSubmit: (employeeData: {
        name: string;
        position: string;
        departmentId: number;
    },
    ) => void,
    formSubmitting?: boolean;
};
function AddEmployeeForm({ onSubmit, formSubmitting }: AddEmployeeFormProps) {

    const { departments, loading, error } = useDepartment();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [departmentId, setDepartmentId] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, position, departmentId });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Full Name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">Position</label>
                    <input type="text" className="form-control" id="position" placeholder="Enter Position"
                        value={position} onChange={(e) => setPosition(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Department" className="form-label">Department</label>
                    {loading && <p>Loading...</p>}
                    {error ? <p>{error}</p>
                        :
                        <Form.Select aria-label="Select Department"
                            value={departmentId}
                            onChange={(e) => setDepartmentId(parseInt(e.target.value))}>
                            <option>Open this select menu</option>
                            {departments.map((d: Department) => { return <option key={d.id} value={d.id}>{d.name}</option> })}
                        </Form.Select>}

                </div>
                <button disabled={formSubmitting} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}
export default AddEmployeeForm;