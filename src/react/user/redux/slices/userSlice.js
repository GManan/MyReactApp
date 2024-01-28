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

            state.users = action.payload
                .map(user => ({ ...user }))

            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const { getUsers, setError } = userSlice.actions;
export default userSlice.reducer;