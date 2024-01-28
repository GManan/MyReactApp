import React, { useEffect, useState } from 'react';
import { Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../auth/redux/slices/authSlice';

const LoginDialog = ({ show, hide }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [pending, setPending] = useState(false);

    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        if (user) {
            // If login was successful, close the modal and navigate
            setPending(false);
        }
    }, [user]);
    const handleLogin = async (e) => {
        e.preventDefault();
        setPending(true);

        try {


            await dispatch(loginUser({ username: name, password: password }));

            hide();
        } catch (error) {
            setIsError(true);
            setPending(false);
        }
    };
    const loginButton = <button className='btn btn-primary' style={{ margin: '10px' }} id="PerformLoginButton" onClick={handleLogin}>Login</button>;

    return (
        <Modal id="LoginDialog" show={show} onHide={hide}>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row}  >
                        <Col sm={9}>
                            <Form.Control style={{ margin: '10px' }} id="LoginDialogUserIDText"
                                type="text"
                                placeholder="User ID"
                                name="username"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Col sm={9}>
                            <Form.Control style={{ margin: '10px' }} id="LoginDialogPasswordText"
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
