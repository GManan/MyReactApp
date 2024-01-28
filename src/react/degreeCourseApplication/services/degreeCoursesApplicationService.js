import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const degreeCoursesApplicationService = {

    getDegreeCourseApplications: async (token) => {
        return await axios.get(`${API_URL}/degreeCourseApplications`, {
            headers: {
                Authorization: token
            }
        })
    },
    deleteDegreeCourseApplications: async (id, token) => {

        return await axios.delete(`${API_URL}/degreeCourseApplications/${id}`, {
            headers: {
                Authorization: token
            }
        })

    }
}
export default degreeCoursesApplicationService