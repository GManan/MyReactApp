import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/authSlice';
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
