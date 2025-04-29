import { Button, Modal } from "react-bootstrap";
import { useDepartment } from "../contexts/department/DepartmentHook";

interface DepartmentDetailsModalProps {
  show: boolean;
  onClose: () => void;
}
const DepartmentModal = ({ show, onClose }: DepartmentDetailsModalProps) => {
  const { selectedDepartment } = useDepartment();

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Department Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedDepartment ? (
          <>
            <h5>Department Details</h5>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Department ID</th>
                  <td>{selectedDepartment.id}</td>
                </tr>
                <tr>
                  <th>Department Name</th>
                  <td>{selectedDepartment.name}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <p>No department selected.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DepartmentModal;