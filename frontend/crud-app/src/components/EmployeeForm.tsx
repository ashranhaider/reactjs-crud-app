import { Form, Card, Container, Row, Col } from "react-bootstrap";
import { Department } from "../models/Department";
import useDepartment from "../hooks/Departments/useDepartments";
import { useState } from "react";
import { Employee } from "../models/Employee";
import { FaUser, FaBriefcase, FaBuilding } from 'react-icons/fa';
import './EmployeeForm.css';

type AddEmployeeFormProps = {
    onSubmit: (formProps: {
        name: string;
        position: string;
        departmentId: number;
    }) => void,
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
        <Container className="form-container">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="form-card">
                        <Card.Body>
                            <h2 className="form-title text-center mb-4">
                                {employee ? 'Edit Employee' : 'Add New Employee'}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="name" className="form-label">
                                        <FaUser className="me-2" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Full Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="position" className="form-label">
                                        <FaBriefcase className="me-2" />
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="position"
                                        placeholder="Enter Position"
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="department" className="form-label">
                                        <FaBuilding className="me-2" />
                                        Department
                                    </label>
                                    {loading ? (
                                        <div className="loading-spinner">
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : error ? (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    ) : (
                                        <Form.Select
                                            id="department"
                                            aria-label="Select Department"
                                            value={departmentId}
                                            onChange={(e) => setDepartmentId(parseInt(e.target.value))}
                                            required
                                        >
                                            <option value="">Select a department</option>
                                            {departments.map((d: Department) => (
                                                <option key={d.id} value={d.id}>
                                                    {d.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    )}
                                </div>

                                <div className="text-center">
                                    <button
                                        disabled={formSubmitting}
                                        type="submit"
                                        className="btn btn-primary submit-btn"
                                    >
                                        {formSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Submitting...
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EmployeeForm;