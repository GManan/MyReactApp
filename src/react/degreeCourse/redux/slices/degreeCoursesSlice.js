import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    coursed: [],
    error: null,
}

const degreeCoursesSlice = createSlice({
    name: 'course',
    initialState: initialState,
    reducers: {
        getDegreeCourses: (state, action) => {
            console.log("in get users reducer in courseSlice,at this point need to have fetched data to put it in the store ");
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },

})

// export const { actions, reducer } = degreeCoursesSlice;
export const { getDegreeCourses, setError } = degreeCoursesSlice.actions;
export default degreeCoursesSlice.reducer;