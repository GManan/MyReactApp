import React from 'react';
import { Button } from 'react-bootstrap';

const LoginButton = ({ onLoginButtonClick }) => {
    const handleLoginBtnClick = () => {
        console.log("btn clicked")
        onLoginButtonClick();
    }

    return (
        <div id='OpenLoginDialogButton'>
            <Button className='btn btn-primary' onClick={handleLoginBtnClick}>Login</Button>
        </div>
    );
};

export default LoginButton;
