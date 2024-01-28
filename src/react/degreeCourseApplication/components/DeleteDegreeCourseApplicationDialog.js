
import { Button, Modal } from 'react-bootstrap';

const DeleteDegreeCourseApplicationDialog = ({ showProp, handleClose, onDelete, dcAppData }) => {

    const handleDelete = () => {

        onDelete()
    }
    const handleCancel = () => {
        handleClose();
    }
    return (
        <div id={`DeleteDialogDegreeCourse${dcAppData.id}`} >
            <Modal show={showProp} >
                <Modal.Header>
                    <Modal.Title>Delete Course {dcAppData.id}?</Modal.Title>
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
export default DeleteDegreeCourseApplicationDialog;