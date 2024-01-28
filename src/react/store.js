import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/redux/slices/authSlice';
import degreeCoursesSlice from './degreeCourse/redux/slices/degreeCoursesSlice';
import userSlice from './user/redux/slices/userSlice';

// Read values from localStorage
// const loggedIn = Boolean(localStorage.getItem('loggedIn'));
// const token = localStorage.getItem('token');
// const { loggedIn, isAdmin, token } = useAuth();
// Create the initial state
const initialState = {
    auth: {
        isLoggedIn: false,
        user: null,
        token: null,
        isAdmin: false,
        isAuthenticated: false,
        error: null,
    },
    users: {
        users: [],
        error: null
    },
    degreeCourses: {
        degreeCourses: [],
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
// store.dispatch(initializeAuthState({ isLoggedIn: loggedIn, token }));
// store.dispatch(initializeAuthState());
