import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddUserModal = ({ showProp, handleClose, onSave }) => {

    const [newUser, setNewUser] = useState({});
    const [fieldValidity, setFieldValidity] = useState({
        userID: false,
        password: false,
    });
    useEffect(() => {
        setFieldValidity({
            userID: false,
            password: false,
        });
    }, [showProp]);

    const handleSave = () => {
        console.log("edited user ", newUser);
        if (isFormValid()) {
            onSave(newUser);
            handleClose();
            return newUser;
        }
    };
    const isFormValid = () => {
        return Object.values(fieldValidity).every((valid) => valid);
    };
    const handleChange = (e) => {
        if (e) {
            console.log(" e.target ", e.target)
            const { name, value, type, checked } = e.target;
            if (type === 'checkbox') {
                setNewUser((prevUser) => ({ ...prevUser, [name]: checked }));
            } else {
                setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
            };
            setFieldValidity((prevValidity) => ({
                ...prevValidity,
                [name]: type === 'checkbox' || value.trim() !== '',
            }));
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
                            className={fieldValidity.userID ? '' : 'invalid'}

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
                            className={fieldValidity.password ? '' : 'invalid'}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button id='CreateUserComponentCreateUserButton' variant="primary" onClick={handleSave} disabled={!isFormValid()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddUserModal;
