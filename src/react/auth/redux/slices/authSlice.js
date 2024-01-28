import { createSlice } from '@reduxjs/toolkit';
import authService from '../../services/authService';

const initialState = {
    isLoggedIn: false,
    user: null,
    isAuthenticated: false,
    isAdmin: false,
    token: null,
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setInitialState: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.isAdmin = false;
            state.isAuthenticated = false;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            const { token, user, isAdmin } = action.payload;
            state.isLoggedIn = true;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
            state.isAdmin = isAdmin;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
            state.isAdmin = false;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
});

// export const initializeAuthState = (payload) => (dispatch) => {
//     if (payload?.isLoggedIn === true) {

//         return dispatch(loginSuccess(payload));
//     } else {
//         return dispatch(setInitialState(payload))
//     }
// };
// Exporting actions
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Async action creator using Redux Thunk
// createing this here cz it is just 1 action, later should maybe bring it to its own autActions.js file
export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await authService.login(credentials);
        dispatch(loginSuccess(response));
    } catch (error) {
        dispatch(loginFailure(error.message || 'Login failed'));
        return Promise.reject(error);
    }
};

export default authSlice.reducer;
