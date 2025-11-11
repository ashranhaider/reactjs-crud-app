import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaExclamationTriangle, FaTimes, FaCheck } from 'react-icons/fa';
import './DeletePopup.css';

interface DeleteEmployeePopupProps {
    show: boolean;
    onHide: () => void;
    onConfirm: () => void;
    name: string;
}

const DeletePopup: React.FC<DeleteEmployeePopupProps> = ({
    show,
    onHide,
    onConfirm,
    name
}) => {
    return (
        <Modal show={show} onHide={onHide} centered className="delete-modal">
            <Modal.Header closeButton className="delete-modal-header">
                <Modal.Title>
                    <FaExclamationTriangle className="warning-icon me-2" />
                    Confirm Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="delete-modal-body">
                <div className="warning-message">
                    <p>Are you sure you want to delete <strong>{name}</strong>?</p>
                    <p className="text-muted">This action cannot be undone.</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="delete-modal-footer">
                <Button variant="secondary" onClick={onHide} className="cancel-btn">
                    <FaTimes className="me-2" />
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm} className="confirm-btn">
                    <FaCheck className="me-2" />
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeletePopup;