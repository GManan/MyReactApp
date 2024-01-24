import degreeCoursesService from "../../services/degreeCoursesService";
import { getDegreeCourses, setError } from "../Slices/degreeCoursesSlice"

export const getDegreeCoursesAsync = () => async (dispatch) => {
    try {
        const response = await degreeCoursesService.getDegreeCourses();
        // const serializedData = serializeData(response);
        console.log("degree courses", response);
        console.log("degree courses ", response.data);
        dispatch(getDegreeCourses(response.data));
    } catch (error) {

        console.log("error ", error);
        dispatch(setError(error.data));

    }
}