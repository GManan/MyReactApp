import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import LandingPage from './components/LandingPage';
import StartPage from './components/StartPage';
import './App.css';
import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <TopMenu />
      {!isLoggedIn && <LandingPage />}
      {isLoggedIn && <StartPage />}
    </div>
  );
}

export default App;
