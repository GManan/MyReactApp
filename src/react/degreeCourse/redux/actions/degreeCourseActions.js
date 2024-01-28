import { toast } from 'react-toastify';
import { getDegreeCourses, setError } from "../../redux/slices/degreeCoursesSlice";
import degreeCoursesService from "../../services/degreeCoursesService";

export const getDegreeCoursesAsync = (token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        const response = await degreeCoursesService.getDegreeCourses(authToken);
        console.log("degree courses", response);
        console.log("degree courses .data ", response.data);
        dispatch(getDegreeCourses(response.data));
        return " Studiengang erfolgreich editiert";
    } catch (error) {
        console.log("error ", error);
        dispatch(setError(error.data));
    }
}
export const addDegreeCourseAsync = (payload, token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        console.log("passing token ", authToken)
        await degreeCoursesService.addDegreeCourse(payload, authToken);
        dispatch(getDegreeCoursesAsync(token));
    } catch (error) {
        dispatch(setError(error.data));
    }
}
export const editDegreeCoursesAsync = (payload, token) => async (dispatch) => {
    const authToken = 'Bearer ' + token;
    degreeCoursesService.editDegreeCourse(payload, authToken)
        .then(resp => {
            console.log("Studiengang erfolgreich geändert", resp)
            toast.success(' Studiengang erfolgreich geändert');
            dispatch(getDegreeCoursesAsync(token))
        })
        .catch(error => {
            console.error("43 response error", error.data);
            toast.error("könnte den studiergang nicht ändern");
            dispatch(setError(error));
        });
}
export const deleteDegreeCourseAsync = (payload, token) => async (dispatch) => {
    const authToken = 'Bearer ' + token;
    degreeCoursesService.deleteDegreeCourse(payload, authToken)
        .then(
            resp => {
                toast.success('Studiengang erfolgreich gelöscht');
                dispatch(getDegreeCoursesAsync(token));
            })
        .catch(error => {
            toast.error("Studiergang könnte nicht gelöscht werden");
            dispatch(setError(error));

        });

}