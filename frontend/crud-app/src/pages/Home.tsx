
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { FaUsers, FaBuilding } from 'react-icons/fa';
import './Home.css';
import useStats from '../hooks/useStats';

function Home() {
  const { stats, loading, error } = useStats();

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
        </Row>
      </div>

      {error && (
        <Alert variant="danger">{error}</Alert>
      )}

      <Row className="stats-cards mb-4">
        <Col md={6}>
          <Card className="stat-card">
            <Card.Body>
              <div className="stat-icon">
                <FaUsers />
              </div>
              <h3>Total Employees</h3>
              <p className="stat-number">
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  stats?.employeeCount ?? 0
                )}
              </p>
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
              <p className="stat-number">
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  stats?.departmentCount ?? 0
                )}
              </p>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>

    </Container>
  );
}

export default Home;