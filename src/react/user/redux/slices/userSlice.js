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
        setError: (state, action) => {
            state.error = action.payload;
        }

    }
})

export const { getUsers, setError } = userSlice.actions;
export default userSlice.reducer;
// export const { actions, reducer } = userSlice;