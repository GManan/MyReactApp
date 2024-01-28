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