// LoginDialog.js
import React, { useState } from 'react';
import { Modal, Form, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/Slices/authSlice';

const LoginDialog = ({ show, hide }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [pending, setPending] = useState(false);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const user = useSelector((state) => state.auth.user);
    const handleLogin = async (e) => {
        e.preventDefault();
        setPending(true);

        try {

            console.log("user before login user ", user);
            await dispatch(loginUser({ username: name, password: password }));
            console.log("user after login user ", user);
            console.log("success");
            // If login was successful, close the modal and navigate
            setPending(false);
            hide(); // Close the modal
        } catch (error) {
            console.log("user in catch block ", user);
            console.log(" catching from login dialog");
            console.log("catching from login dialog", error.message); // Log the error message
            setIsError(true);
            setPending(false);
        }
    };
    const loginButton = <button id="PerformLoginButton" onClick={handleLogin}>Login</button>;

    return (
        <Modal id="LoginDialog" show={show} onHide={hide}>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} id="LoginDialogUserIDText" >
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="User ID"
                                name="username"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="LoginDialogPasswordText">
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="Message">
                        <div className="d-flex align-items-center">
                            {loginButton}
                            {isError && (
                                <Form.Label style={{ color: 'red' }}>
                                    {error || 'Invalid user ID or password'}
                                </Form.Label>
                            )}
                            {pending && <Spinner animation="border" variant="primary" />}
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginDialog;
