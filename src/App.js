import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import TopMenu from './components/TopMenu';
import LandingPage from './pages/LandingPage';
import StartPage from './pages/StartPage';
import Sidebar from './components/SideBar';
import UserManagement from './pages/UserManagement';
// import Sidebar from './components/SideMenu/SideMenu';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const state = useSelector((state) => state.auth);
  console.log("isLoggedIn ", isLoggedIn);
  console.log("state ", state);
  return (
    <Router>
      <div className="App " >
        <TopMenu />
        <div >
          <Sidebar />
          <div>
            <Routes>
              <Route path="/" element={isLoggedIn ? <StartPage /> : <LandingPage />} />
              <Route path="/user-management" element={isLoggedIn ? <UserManagement /> : <LandingPage />} />
            </Routes>
          </div>
        </div>
      </div >
    </Router >
  );
}

export default App;
