import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import LandingPage from './components/LandingPage';
import StartPage from './components/StartPage';
import './App.css';
import { useSelector } from "react-redux";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const handleLogin = (user) => {
  //   setUsername(user.username);
  //   setLoggedIn(true);
  // };

  return (
    <div className="App">
      <TopMenu />
      {/* {isAuthenticated ?  : <LandingPage></LandingPage>} */}
      {!isAuthenticated && <LandingPage />}
      {isAuthenticated && <StartPage />}
    </div>
  );
}

export default App;
