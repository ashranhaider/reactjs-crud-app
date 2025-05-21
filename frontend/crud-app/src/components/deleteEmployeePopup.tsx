import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface DeleteEmployeePopupProps {
    show: boolean;
    onHide: () => void;
    onConfirm: () => void;
    employeeName: string;
}

const DeleteEmployeePopup: React.FC<DeleteEmployeePopupProps> = ({
    show,
    onHide,
    onConfirm,
    employeeName
}) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete {employeeName}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    No
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteEmployeePopup;