
import { Button, Modal } from 'react-bootstrap';

const DeleteUserConfirmationDialog = ({ onDelete, showProp, handleClose, userData }) => {

    const handleDelete = () => {

        onDelete()
    }
    const handleCancel = () => {
        handleClose();
    }
    return (
        <div id={`DeleteDialogUser${userData.userID}`} >

            <Modal show={showProp} >
                <Modal.Header closeButton>
                    <Modal.Title>Delete {userData.userID}?</Modal.Title>
                </Modal.Header>

                <Modal.Footer >
                    <Button id='DeleteDialogCancelButton' variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button id='DeleteDialogConfirmButton' className="btn btn-success" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};
export default DeleteUserConfirmationDialog;