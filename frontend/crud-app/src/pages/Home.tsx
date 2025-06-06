import { Link } from "react-router";
import EmployeeList from "../components/EmployeeList";
import { DepartmentProvider } from "../contexts/department/DepartmentProvider";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserPlus, FaUsers, FaBuilding } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <Container className="home-container py-4">
      <div className="header-section mb-4">
        <Row className="align-items-center">
          <Col>
            <h1 className="page-title">
              <FaUsers className="me-2" />
              Employee Management
            </h1>
            <p className="text-muted mt-2">Manage your organization's employees efficiently</p>
          </Col>
          <Col xs="auto">
            <Link to="/addemployee" className="btn btn-primary add-employee-btn">
              <FaUserPlus className="me-2" />
              Add Employee
            </Link>
          </Col>
        </Row>
      </div>

      <Row className="stats-cards mb-4">
        <Col md={6}>
          <Card className="stat-card">
            <Card.Body>
              <div className="stat-icon">
                <FaUsers />
              </div>
              <h3>Total Employees</h3>
              <p className="stat-number">25</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="stat-card">
            <Card.Body>
              <div className="stat-icon">
                <FaBuilding />
              </div>
              <h3>Departments</h3>
              <p className="stat-number">5</p>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>

      {/* all code above is useless and contributes to jut make it look pretty
      and is geneerated by AI */}
      
      <DepartmentProvider>
        <EmployeeList />
      </DepartmentProvider>
    </Container>
  );
}

export default Home;