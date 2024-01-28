import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const degreeCoursesService = {

    getDegreeCourses: async (token) => {
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
    },
    addDegreeCourse: async (payload, token) => {
        console.log("add degree course ", payload, token);
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
            console.log("newDC ", newDC.data);
            return newDC.data;
        } catch (error) {
            console.error("error fetching users ", error);
            return " ERREEEER"
        }
    },
    editDegreeCourse: async (payload, token) => {
        // console.log(" 42 payload  ", payload);
        // try {
        //     const filteredPayload = Object.fromEntries(
        //         Object.entries(payload).filter(([key, value]) => value !== "")
        //     );
        //     console.log(" 42 filteredPayload  ", filteredPayload);
        // const response =
        return await axios.put(`${API_URL}/degreeCourses/${payload.id}`,
            payload,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
        //     console.log(" 42 response ", response);
        // } catch (error) {
        //     console.error("error fetching users ", error);
        // }
    },
    deleteDegreeCourse: async (id, token) => {
        // console.log("in async user delete func with userid ", id);
        // console.log("token ", token);
        // try {
        return await axios.delete(`${API_URL}/degreeCourses/${id}`, {
            headers: {
                Authorization: token
            }
        })
        //     })
        //     console.log("response ", response);

        // } catch (error) {
        //     console.error(" error deleting user ", error);
        // }
    }
}
export default degreeCoursesService