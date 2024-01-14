import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    if (!isLoggedIn) {
        return null;
    }

    return (
        <div >
            <Navbar bg="dark" variant="dark" className="side-menu" style={{ height: '100vh', width: '120px', position: 'fixed', left: 0, top: 0 }}>
                <Nav className="flex-column">
                    <Link to="/" id='OpenStartPageButton'>Home</Link>
                    {isAdmin && <Link id='OpenUserManagementPageButton' to="/user-management">User Management</Link>}
                </Nav>
            </Navbar>
        </div>
    );
};

export default SideBar;
