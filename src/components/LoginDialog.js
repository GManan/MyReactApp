import React, { useState } from "react";
import { Modal, Form, Row, Col, Spinner } from "react-bootstrap";
// import personIcon from "path/to/personIcon";
// import shieldLock from "path/to/shieldLock";


const LoginDialog = ({ show, hide }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [pending, setPending] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here
        // You may dispatch actions to Redux or make API calls

        // For example:
        setPending(true);
        if (name === "example" && password === "password") {
            // Successful login
            setIsError(false);
            setPending(false);
        } else {
            // Failed login
            setIsError(true);
            setPending(false);
        }
    };
    const loginButton = <button onClick={handleLogin}>Login</button>;

    return (
        <Modal show={show} onHide={hide}>

            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                placeholder="User ID"
                                name="username"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        {/* <img src={shieldLock} alt="" title="Password" /> */}
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="Message">
                        <div className="d-flex align-items-center">
                            {loginButton}
                            {isError && (
                                <Form.Label style={{ color: "red" }}>
                                    Invalid user ID or password
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
