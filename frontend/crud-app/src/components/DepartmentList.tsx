
import useDepartments2 from "../hooks/Departments/useDepartments2";
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
function DepartmentList() {

    const { data: departments, isLoading, error } = useDepartments2();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger" role="alert">{error.message}</div>;
    return (
        <>
            <Container className="home-container py-4">
                <div className="header-section mb-4">
                    <Row className="align-items-center">
                        <Col>
                            <h1 className="page-title">
                                <FaUsers className="me-2" />
                                Employee Management
                            </h1>
                        </Col>
                        <Col xs="auto">
                            <Link to="/adddepartment" className="btn btn-primary add-employee-btn">
                                <FaUserPlus className="me-2" />
                                Add Department
                            </Link>
                        </Col>
                    </Row>
                </div>
                <ul>
                    {
                        departments?.map((d) => (
                            <li key={d.id}>
                                {d.name}
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </>
    );
}
export default DepartmentList;