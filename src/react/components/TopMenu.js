import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function TopMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                {/* Navbar.Toggle - Button to toggle the collapsed state */}
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

                {/* Navbar.Collapse - Container for navigation items */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Nav - Container for individual navigation items */}
                    <Nav className="me-auto">
                        {/* Navigation Links */}
                        <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                        <Nav.Link href="#ueber-uns">Über Uns</Nav.Link>
                        <Nav.Link href="#impressum">Impressum</Nav.Link>
                    </Nav>

                    {/* Nav - Container for additional items (e.g., login button) */}
                    <Nav>
                        <Button>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopMenu;
