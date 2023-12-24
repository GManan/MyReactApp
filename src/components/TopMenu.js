import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LoginBtn from './LoginBtn';
import LoginDialog from './LoginDialog';
import { useSelector } from 'react-redux'
import LogoutButton from './LogoutBtn';

function TopMenu() {
    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
    console.log("in top menu")
    const handleLoginBtnClick = () => {
        console.log("btn clicked in top menu");
        setLoginDialogOpen(true);
    };
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleLoginDialogClose = () => {
        setLoginDialogOpen(false); // Close the login dialog
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/">
                    <img
                        src='/logo.png'
                        width="90"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                        <Nav.Link href="#ueber-uns">Über Uns</Nav.Link>
                        <Nav.Link href="#impressum">Impressum</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Nav>
                    {
                        isLoggedIn ? <LogoutButton></LogoutButton>
                            : <LoginBtn onLoginButtonClick={handleLoginBtnClick} />
                    }
                </Nav>
            </Container>

            {/* Render the LoginDialog based on the state */}
            {isLoginDialogOpen && (
                <LoginDialog show={isLoginDialogOpen} hide={handleLoginDialogClose} />
            )}
        </Navbar>
    );
}

export default TopMenu;
