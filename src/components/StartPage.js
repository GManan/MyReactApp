import React from 'react';
import { useSelector } from "react-redux";

const StartPage = () => {
    const username = useSelector((state) => state.auth.user);
    console.log("username ", username);
    return (
        <div id='StartPage'>
            <h1>welcome to homepage {username}</h1>
        </div>
    )
};

export default StartPage;
