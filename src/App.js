import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './react/AppSceleton/LandingPage';
import Sidebar from './react/AppSceleton/SideBar';
import StartPage from './react/AppSceleton/StartPage';
import TopMenu from './react/AppSceleton/TopMenu';
import DegreeCourseManagementPage from './react/degreeCourse/pages/DegreeCourseManagementPage';
import DegreeCourseApplicationManagmentPage from './react/degreeCourseApplication/pages/DegreeCourseApplicationManagmentPage';
import UserManagement from './react/user/pages/UserManagement';

library.add(faCoffee, faAddressCard);

export const useAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const token = useSelector((state) => state.auth.token);

  return { isLoggedIn, isAdmin, token }
}

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
              <Route path="/application" element={isLoggedIn ? <DegreeCourseApplicationManagmentPage /> : <LandingPage />} />
            </Routes>
          </div>
        </div>
      </div >
    </Router >
  );
}

export default App;
