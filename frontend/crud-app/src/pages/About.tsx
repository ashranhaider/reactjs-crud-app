import { NavLink } from "react-router";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaDatabase, FaCode, FaTools } from 'react-icons/fa';
import './About.css';

function About() {
    return (
        <Container className="about-container py-5">
            <h1 className="text-center mb-5">Employee Management System</h1>
            
            <div className="text-center mb-5">
                <p className="lead">
                    A full-stack CRUD application built with React and .NET Core for managing employee information.
                </p>
            </div>

            <Row className="mb-5">
                <Col md={6} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon">
                                <FaUsers size={40} />
                            </div>
                            <Card.Title>Employee Management</Card.Title>
                            <Card.Text>
                                Create, read, update, and delete employee records with ease. 
                                Manage employee details including their name, position, and department.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon">
                                <FaDatabase size={40} />
                            </div>
                            <Card.Title>Department Integration</Card.Title>
                            <Card.Text>
                                Seamlessly organize employees by departments. 
                                View department details and manage employee assignments.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon">
                                <FaCode size={40} />
                            </div>
                            <Card.Title>Modern Tech Stack</Card.Title>
                            <Card.Text>
                                Built with React, TypeScript, and Bootstrap for the frontend.
                                Powered by .NET Core for a robust backend API.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon">
                                <FaTools size={40} />
                            </div>
                            <Card.Title>Features</Card.Title>
                            <Card.Text>
                                • Responsive design for all devices<br />
                                • Real-time data updates<br />
                                • Form validation<br />
                                • Error handling<br />
                                • Clean and intuitive UI
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="text-center mt-4">
                <NavLink to="/" className="btn btn-primary">
                    Back to Home
                </NavLink>
            </div>
        </Container>
    );
}

export default About;