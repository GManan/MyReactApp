// components/LoginButton.js
import React from 'react';
import { Button } from 'react-bootstrap';

const LoginButton = ({ onLoginButtonClick }) => {
    const handleLoginBtnClick = () => {
        console.log("btn clicked")
        onLoginButtonClick();
    }

    return (
        <div>
            <Button variant="light" onClick={handleLoginBtnClick}>Login</Button>
        </div>
    );
};

export default LoginButton;
