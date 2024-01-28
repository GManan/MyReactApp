import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    if (!isLoggedIn) {
        return null;
    }

    return (
        <div bg="dark" variant="dark" className='sidebar'>
            {/* <Navbar> */}
            <div className="sidebar-content">
                <Link to="/" id='OpenStartPageButton'>Home</Link>
                {<Link id='OpenDegreeCourseManagementPageButton' to="/studiengang">Studiengang managment</Link>}
                {isAdmin && <Link id='OpenUserManagementPageButton' to="/user-management">User Management</Link>}
                {<Link id='OpenDegreeCourseApplicationManagementPageButton' to="/application">Application managment</Link>}
            </div>
            {/* </Navbar> */}
        </div>
    );
};

export default SideBar;
