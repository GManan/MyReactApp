import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditUserModal = ({ showProp, handleClose, userData, onSave }) => {

    // const [currentUser] = useState(userData);
    const [editedUser, setEditedUser] = useState(userData || {});
    useEffect(() => {
        // Update the editedUser state when userData changes
        console.log("user data ", userData);
        setEditedUser(userData || {});
        console.log("user data after ", userData);
        setEditedUser((prevUser) => ({
            userID: userData?.userID || '',
            firstName: userData?.firstName || '',
            lastName: userData?.lastName || '',
            isAdministrator: userData?.isAdministrator,
            ...(userData?.password !== '' && { password: userData?.password }),
        }));
    }, [userData]);

    const handleSave = () => {
        console.log("edited user ", editedUser);
        onSave(editedUser);
        handleClose();
        return editedUser;
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {
            setEditedUser((prevUser) => ({ ...prevUser, [name]: checked }));
        } else {
            setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
        };
    }
    return (
        <Modal show={showProp} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User:{editedUser.userID} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='UserManagementPageEditComponent'>
                    <Form.Group >
                        <Form.Label>User ID </Form.Label>
                        <Form.Control id='EditUserComponentEditUserID'
                            type="text"
                            placeholder="user ID"
                            name="user ID"
                            value={editedUser.userID}
                            readOnly
                        />
                        <Form.Label>First Name</Form.Label>
                        <Form.Control id='EditUserComponentEditFirstName'
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            value={editedUser.firstName}
                            onChange={handleChange}
                        />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control id='EditUserComponentEditLastName'
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            value={editedUser.lastName}
                            onChange={handleChange}
                        />
                        <Form.Label>Admin</Form.Label>
                        <Form.Check id='EditUserComponentEditIsAdministrator'
                            type="checkbox"
                            label="Is admin"
                            name="isAdministrator"
                            checked={editedUser.isAdministrator}
                            onChange={handleChange}
                        />
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='EditUserComponentEditPassword'
                            type="text"
                            placeholder="Password "
                            name="password"
                            // value={ }
                            onChange={handleChange}

                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button id='EditUserComponentSaveUserButton' variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditUserModal;
