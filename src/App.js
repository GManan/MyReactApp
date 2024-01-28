import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './react/LandingPage';
import Sidebar from './react/SideBar';
import StartPage from './react/StartPage';
import TopMenu from './react/TopMenu';
import DegreeCourseManagementPage from './react/degreeCourse/pages/DegreeCourseManagementPage';
import UserManagement from './react/user/pages/UserManagement';

export const useAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const token = useSelector((state) => state.auth.token);

  return { isLoggedIn, isAdmin, token }
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
