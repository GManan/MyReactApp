import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../App';
import { getDegreeCoursesAsync } from '../redux/actions/degreeCourseActions';

const DegreeCourseManagementPage = () => {
    const { isLoggedIn, isAdmin } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn && isAdmin) {
            // Dispatch the action to fetch Studiengänge when the component mounts
            dispatch(getDegreeCoursesAsync());
        } else {
            // If not logged in or not an admin, navigate to the home page
            navigate('/');
        }
    }, []);

    return (
        <div id='DegreeCourseManagementPageListComponent'>
            <h1> Studeingang liste</h1>
        </div>
    )
}
export default DegreeCourseManagementPage;