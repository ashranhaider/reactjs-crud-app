import { Form } from "react-bootstrap";
import { Department } from "../models/Department";
import useDepartment from "../hooks/Departments/useDepartments";
import { useState } from "react";
import { Employee } from "../models/Employee";

type AddEmployeeFormProps = {
    onSubmit: (formProps: {
        name: string;
        position: string;
        departmentId: number;
    },
    ) => void,
    formSubmitting?: boolean;
    employee?: Employee;
};
function EmployeeForm({ onSubmit, formSubmitting, employee }: AddEmployeeFormProps) {

    const { departments, loading, error } = useDepartment();
    const [name, setName] = useState(employee ? employee.fullName : "");
    const [position, setPosition] = useState(employee ? employee.position : "");
    const [departmentId, setDepartmentId] = useState<number>(employee ? employee.departmentId : 0);

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
export default EmployeeForm;