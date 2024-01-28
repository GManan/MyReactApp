import { toast } from 'react-toastify';
import { getDegreeCourses, setError } from "../../redux/slices/degreeCoursesSlice";
import degreeCoursesService from "../../services/degreeCoursesService";

export const getDegreeCoursesAsync = (token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        const response = await degreeCoursesService.getDegreeCourses(authToken);


        dispatch(getDegreeCourses(response.data));
        return " Studiengang erfolgreich editiert";
    } catch (error) {

        dispatch(setError(error.data));
    }
}
export const addDegreeCourseAsync = (payload, token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        console.log("passing token ", authToken)
        await degreeCoursesService.addDegreeCourse(payload, authToken);
        toast.success('Studiengang erfolgreich erstellt');
        dispatch(getDegreeCoursesAsync(token));
    } catch (error) {
        toast.error("Studiengang könte nicht erstellt werden");
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
export const addDegreeCourseApplicationAsync = (payload, token) => async (dispatch) => {

    try {
        const authToken = 'Bearer ' + token;
        console.log("passing token ", authToken)
        await degreeCoursesService.addDegreeCourseApplication(payload, authToken);
        toast.success('Bewerbung erfolgreich erstellt');

    } catch (error) {
        toast.error("Studiergang könnte nicht erstellt werden");
        dispatch(setError(error.data));
    }
}