import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
interface ConfirmModal {
    toggleModal: boolean;
    prHandleConfirm: (isConfirm: boolean) => void;
    textContent?: string
}
const ConfirmModal: React.FC<ConfirmModal> = props => {
    const {toggleModal, textContent, prHandleConfirm} = props;
    const handleConfirm = (isConfirm: boolean) => {
        prHandleConfirm(isConfirm);
    }
    return (
        <Modal show={toggleModal}>
            <Modal.Body>
                {
                    textContent ? textContent : `Do you want to remove the post?`
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleConfirm(false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => handleConfirm(true)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal;