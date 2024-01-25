import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginBtn from './auth/components/LoginBtn';
import LoginDialog from './auth/components/LoginDialog';
import LogoutButton from './auth/components/LogoutBtn';

function TopMenu() {
    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

    const handleLoginBtnClick = () => {
        setLoginDialogOpen(true);
    };

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleLoginDialogClose = () => {
        setLoginDialogOpen(false);
    };

    return (
        <Navbar bg="light" expand="lg" className="TopMenu">
            <Container >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="/logo.png"
                        width="90"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/kontakt">
                            Kontakt
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ueber-uns">
                            Über Uns
                        </Nav.Link>
                        <Nav.Link as={Link} to="/impressum">
                            Impressum
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {isLoggedIn ? (
                        <LogoutButton />
                    ) : (
                        <LoginBtn onLoginButtonClick={handleLoginBtnClick} />
                    )}
                </Nav>
            </Container>

            {isLoginDialogOpen && (
                <LoginDialog show={isLoginDialogOpen} hide={handleLoginDialogClose} />
            )}
        </Navbar>
    );
}

export default TopMenu;
