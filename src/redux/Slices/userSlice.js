import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    error: null,
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            console.log("in set user reducer ", action.payload);
            state.users = action.payload
                .map(user => ({ ...user }))
            console.log("in set user reducer ", state.users);
            state.error = null;
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
            state.error = null;
        },
        editUser: (state, action) => {
            const updatedUser = action.payload;
            console.log("updatedUser ", updatedUser);
            state.users = state.users.map(user =>
                user.userID === updatedUser.userID ? updatedUser : user
            );
            state.error = null;
        },
        deleteUser: (state, action) => {
            console.log("payload", action.payload)
            state.users = state.users.filter(user => user.userID !== action.payload);
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }

    }
})

export const { getUsers, addUser, editUser, deleteUser, setError } = userSlice.actions;
export default userSlice.reducer;