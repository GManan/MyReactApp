import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/redux/slices/authSlice';
import degreeCoursesSlice from './degreeCourse/redux/slices/degreeCoursesSlice';
import degreeCourseApplicationSlice from './degreeCourseApplication/redux/slices/degreeCourseApplicationSlice';
import userSlice from './user/redux/slices/userSlice';

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
        degreeCourseApplication: degreeCourseApplicationSlice,
    },
    preloadedState: initialState,

})

