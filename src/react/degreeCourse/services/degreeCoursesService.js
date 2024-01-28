import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const degreeCoursesService = {

    getDegreeCourses: async (token) => {
        try {

            const degreeCourses = await axios.get(`${API_URL}/degreeCourses`, {
                headers: {
                    Authorization: token
                }
            })
            return degreeCourses;

        } catch (error) {
            console.error("error fetching degree courses  ", error);
        }
    },
    addDegreeCourse: async (payload, token) => {

        try {
            const newDC = await axios.post(`${API_URL}/degreeCourses`,
                {
                    "universityName": payload.universityName,
                    "universityShortName": payload.universityShortName,
                    "departmentName": payload.departmentName,
                    "departmentShortName": payload.departmentShortName,
                    "name": payload.name,
                    "shortName": payload.shortName
                },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                })

            return newDC.data;
        } catch (error) {
            console.error("error fetching users ", error);
            return " ERREEEER"
        }
    },
    editDegreeCourse: async (payload, token) => {
        return await axios.put(`${API_URL}/degreeCourses/${payload.id}`,
            payload,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
    },
    deleteDegreeCourse: async (id, token) => {

        return await axios.delete(`${API_URL}/degreeCourses/${id}`, {
            headers: {
                Authorization: token
            }
        })

    },
    addDegreeCourseApplication: async (payload, token) => {
        return await axios.post(`${API_URL}/degreeCourseApplications`,
            payload,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
    }
}
export default degreeCoursesService