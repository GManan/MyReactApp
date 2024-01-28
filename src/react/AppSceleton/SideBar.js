import { faBook, faClipboard, faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='sidebar'>
            <div className="sidebar-content">
                <Link to="/" id='OpenStartPageButton' className="icon-link"><FontAwesomeIcon icon={faHome} size="2x" /></Link>
                {<Link to="/studiengang" id='OpenDegreeCourseManagementPageButton' className="icon-link"><FontAwesomeIcon icon={faBook} size="2x" /></Link>}
                {isAdmin && <Link to="/user-management" id='OpenUserManagementPageButton' className="icon-link"><FontAwesomeIcon icon={faUsers} size="2x" /></Link>}
                {<Link to="/application" id='OpenDegreeCourseApplicationManagementPageButton' className="icon-link"><FontAwesomeIcon icon={faClipboard} size="2x" /></Link>}
            </div>
        </div>
    );
};

export default SideBar;
