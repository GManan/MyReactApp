import axios from "axios";
import config from "../config";

const API_URL = config.API_URL;
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