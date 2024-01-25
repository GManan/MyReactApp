import { getDegreeCourses, setError } from "../../redux/slices/degreeCoursesSlice";
import degreeCoursesService from "../../services/degreeCoursesService";

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