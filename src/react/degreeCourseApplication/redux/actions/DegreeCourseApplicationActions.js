import { toast } from 'react-toastify';
import degreeCoursesApplicationService from "../../services/degreeCoursesApplicationService";
import { setDegreeCourseApplications, setError } from "../slices/degreeCourseApplicationSlice";


export const getDegreeCourseApplicationsAsync = (token) => async (dispatch) => {
    try {

        const authToken = 'Bearer ' + token;
        const result = await degreeCoursesApplicationService.getDegreeCourseApplications(authToken);
        dispatch(setDegreeCourseApplications(result.data));
    } catch (error) {
        dispatch(setError(error.data))
    }


}

export const deleteDegreeCourseApplicationsAsync = (payload, token) => async (dispatch) => {
    const authToken = 'Bearer ' + token;
    degreeCoursesApplicationService.deleteDegreeCourseApplications(payload, authToken)
        .then(
            resp => {
                toast.success('Bewerbung erfolgreich gelöscht');
                dispatch(getDegreeCourseApplicationsAsync(token));
            })
        .catch(error => {
            toast.error("Bewerbung könnte nicht gelöscht werden");
            dispatch(setError(error));

        });

}