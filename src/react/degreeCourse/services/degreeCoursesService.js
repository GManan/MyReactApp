import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const token = `Bearer ${localStorage.getItem('token')}`

const degreeCoursesService = {

    getDegreeCourses: async () => {
        try {
            console.log(" in degreeCoursesService  with the token: ", token);
            const degreeCourses = await axios.get(`${API_URL}/degreeCourses`, {
                headers: {
                    Authorization: token
                }
            })
            return degreeCourses;

        } catch (error) {
            console.error("error fetching degree courses  ", error);
        }
    }
}
export default degreeCoursesService