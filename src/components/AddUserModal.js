import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddUserModal = ({ showProp, handleClose, onSave }) => {

    const [newUser, setNewUser] = useState({});
    useEffect(() => {

    }, [showProp]);

    const handleSave = () => {
        console.log("edited user ", newUser);
        onSave(newUser);
        handleClose();
        return newUser;
    };

    const handleChange = (e) => {
        if (e) {

            const { name, value, type, checked } = e.target;
            if (type === 'checkbox') {
                setNewUser((prevUser) => ({ ...prevUser, [name]: checked }));
            } else {
                setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
            };
        }
    };

    return (
        <Modal show={showProp} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New User </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id='UserManagementPageCreateComponent'>
                    <Form.Group>
                        <Form.Label>User</Form.Label>
                        <Form.Control id='CreateUserComponentEditUserID'
                            type="text"
                            placeholder="user ID"
                            name="userID"
                            onChange={handleChange}
                            required
                        />
                        <Form.Label>First Name</Form.Label>
                        <Form.Control id='CreateUserComponentEditFirstName'
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            onChange={handleChange}
                        />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control id='CreateUserComponentEditLastName'
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            onChange={handleChange}
                        />
                        <Form.Label>Auth</Form.Label>
                        <Form.Check id='CreateUserComponentEditIsAdministrator'
                            type="checkbox"
                            label="Is admin"
                            name="isAdministrator"
                            onChange={handleChange}
                        />
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='CreateUserComponentEditPassword'
                            type="text"
                            placeholder="Password "
                            name="password"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button id='CreateUserComponentCreateUserButton' variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddUserModal;
