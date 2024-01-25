import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/redux/slices/authSlice';
const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleLogoutBtnClick = () => {
        dispatch(logout());
    }

    return (
        <div id='LogoutButton'>
            <Button variant="light" onClick={handleLogoutBtnClick}>Logout</Button>
        </div>
    );
};

export default LogoutButton;
