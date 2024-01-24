import { configureStore } from '@reduxjs/toolkit';
// import { getUsersAsync } from './Actions/userActions';
import authSlice, { initializeAuthState } from './Slices/authSlice';
import userSlice from './Slices/userSlice';
import degreeCoursesSlice from './Slices/degreeCoursesSlice';

// Read values from localStorage
const loggedIn = Boolean(localStorage.getItem('loggedIn'));
const token = localStorage.getItem('token');

// Create the initial state
const initialState = {
    auth: {
        isLoggedIn: loggedIn,
        user: null,
        token: null,
        isAdmin: false,
        isAuthenticated: loggedIn,
        error: null,
    },
    users: {
        users: [],
        error: null
    }
};
export const store = configureStore({
    reducer: {
        auth: authSlice,
        users: userSlice,
        degreeCourses: degreeCoursesSlice,
    },
    preloadedState: initialState,

})
store.dispatch(initializeAuthState({ isLoggedIn: loggedIn, token }));
