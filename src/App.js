import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import TopMenu from './components/TopMenu';
import LandingPage from './pages/LandingPage';
import StartPage from './pages/StartPage';
import Sidebar from './components/SideBar';
import UserManagement from './pages/UserManagement';
import DegreeCourseManagementPage from './pages/DegreeCourseManagementPage';
// import Sidebar from './components/SideMenu/SideMenu';

export const useAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return { isLoggedIn, isAdmin }
}

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const state = useSelector((state) => state.auth);
  console.log("isLoggedIn ", isLoggedIn);
  console.log("state ", state);
  return (
    <Router>
      <div className="App" >
        <div>
          <TopMenu className='topbar' />
        </div>
        <div className='MainContent'>
          <div >
            <Sidebar />
          </div>
          <div className='content'>
            <Routes>
              <Route path="/" element={isLoggedIn ? <StartPage /> : <LandingPage />} />
              <Route path="/user-management" element={isLoggedIn ? <UserManagement /> : <LandingPage />} />
              <Route path="/studiengang" element={isLoggedIn ? <DegreeCourseManagementPage /> : <LandingPage />} />
            </Routes>
          </div>
        </div>
      </div >
    </Router >
  );
}

export default App;
