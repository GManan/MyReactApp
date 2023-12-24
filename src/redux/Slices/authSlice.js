import { createSlice } from '@reduxjs/toolkit';
import authService from '../../services/authService';  // Adjust the path accordingly

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
        isAuthenticated: false,
        token: null,
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log("action ", action)
            state.isLoggedIn = true;
            state.user = action.payload.username;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = null;
        },
    },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// Async action creator using Redux Thunk
export const loginUser = (credentials) => async (dispatch) => {
    try {
        const response = await authService.login(credentials);

        // console.log("respons header", response.headers);
        // console.log("respons ", response.headers);
        // console.log("respons.data ", response.data);
        // response.username = credentials.name;
        dispatch(loginSuccess(response));
    } catch (error) {
        console.log("catching error ", error);
        dispatch(loginFailure(error.message || 'Login failed'));
        return Promise.reject(error);
    }
};

export default authSlice.reducer;
