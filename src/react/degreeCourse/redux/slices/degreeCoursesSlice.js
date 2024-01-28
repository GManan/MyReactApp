import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    degreeCourses: [],
    error: null,
}

const degreeCoursesSlice = createSlice({
    name: 'degreeCourse',
    initialState: initialState,
    reducers: {
        getDegreeCourses: (state, action) => {
            console.log("in get degree course reducer in courseSlice,at this point need to have fetched the data to put it in the store ");
            state.degreeCourses = action.payload.map(degreeCourse => ({ ...degreeCourse }))
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }

})

export const { getDegreeCourses, setError } = degreeCoursesSlice.actions;
export default degreeCoursesSlice.reducer;