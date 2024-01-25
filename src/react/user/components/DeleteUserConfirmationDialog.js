
import { Button, Modal } from 'react-bootstrap';

const DeleteUserConfirmationDialog = ({ onDelete, showProp, handleClose, userData }) => {

    const dialogId = `DeleteDialogUser${userData.userID}`;

    const handleDelete = () => {
        console.log("delete ", userData);
        onDelete()
    }
    const handleCancel = () => {
        handleClose();
    }
    return (
        <div id={`UserItemDeleteButton${userData.userID}`} >

            <Modal show={showProp} >
                <Modal.Header closeButton>
                    <Modal.Title>Delete {userData.userID}?</Modal.Title>
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
export default DeleteUserConfirmationDialog;