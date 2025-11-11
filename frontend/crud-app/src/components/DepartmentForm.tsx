import { Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Department } from "../models/Department";
import { FaBuilding } from 'react-icons/fa';
import './EmployeeForm.css';

type DepartmentFormProps = {
	onSubmit: (data: { name: string }) => void;
	onCancel?: () => void;
	formSubmitting?: boolean;
	department?: Department | null;
};

function DepartmentForm({ onSubmit, onCancel, formSubmitting, department }: DepartmentFormProps) {
	const [name, setName] = useState<string>(department ? department.name : "");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ name });
	};

	return (
		<Container className="form-container">
			<Row className="justify-content-center">
				<Col md={6} lg={5}>
					<Card className="form-card">
						<Card.Body>
							<h2 className="form-title text-center mb-4">{department ? 'Edit Department' : 'Add Department'}</h2>
							<form onSubmit={handleSubmit}>
								<div className="form-group mb-4">
									<label htmlFor="dept-name" className="form-label">
										<FaBuilding className="me-2" />
										Department Name
									</label>
									<input
										id="dept-name"
										type="text"
										className="form-control"
										placeholder="Enter department name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>

								<div className="d-flex justify-content-center">
									<button type="submit" className="btn btn-primary me-2" disabled={formSubmitting}>
										{formSubmitting ? (
											<>
												<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden></span>
												Saving...
											</>
										) : (
											'Save'
										)}
									</button>

									{onCancel && (
										<button type="button" className="btn btn-secondary" onClick={onCancel}>
											Cancel
										</button>
									)}
								</div>
							</form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default DepartmentForm;
