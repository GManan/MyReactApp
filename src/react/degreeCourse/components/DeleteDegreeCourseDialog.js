
import { Button, Modal } from 'react-bootstrap';

const DeleteDCConfirmationDialog = ({ showProp, handleClose, onDelete, dcData }) => {

    const handleDelete = () => {
        console.log("delete ", dcData);
        onDelete()
    }
    const handleCancel = () => {
        handleClose();
    }
    return (
        <div id={`DeleteDialogDegreeCourse${dcData.id}`} >
            <Modal show={showProp} >
                <Modal.Header>
                    <Modal.Title>Delete Course {dcData.id}?</Modal.Title>
                </Modal.Header>

                <Modal.Footer >
                    <Button id='DeleteDialogCancelButton' variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button id='DeleteDialogConfirmButton' variant="primary" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};
export default DeleteDCConfirmationDialog;