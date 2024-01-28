import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    degreeCourseApplications: [],
    error: null,
}
const degreeCorseApplicationSlice = createSlice({
    name: 'degeeCourseApplication',
    initialState: initialState,
    reducers: {
        setDegreeCourseApplications: (state, action) => {
            console.log("zuzu ", action.payload)
            state.degreeCourseApplications = action.payload
                .map(degreeCourseApplication => ({ ...degreeCourseApplication }))
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})
export const { setDegreeCourseApplications, setError } = degreeCorseApplicationSlice.actions;
export default degreeCorseApplicationSlice.reducer;