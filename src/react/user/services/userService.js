import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;


export const userService = {
    getUsers: async (token) => {
        try {
            const userArr = await
                axios.get(`${API_URL}/users`, {
                    headers: {
                        Authorization: token
                    }
                })

            return userArr;
        } catch (error) {
            console.error("error fetching users ", error);
        }
    },
    addUser: async (userData, token) => {

        try {
            const newUser = await axios.post(`${API_URL}/users`,
                {
                    userID: userData.userID,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    isAdministrator: userData.isAdministrator,
                    password: userData.password
                },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                })

            return newUser.data;
        } catch (error) {
            console.error("error fetching users ", error);
        }
    },
    editUser: async (userData, token) => {

        try {

            const editedUser = await axios.put(`${API_URL}/users/${userData.userID}`,
                {
                    userID: userData.userID,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    isAdministrator: userData.isAdministrator,
                    password: userData.password,
                },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                })

            return editedUser.response;
        } catch (error) {
            console.error("error fetching users ", error);
        }
    },

    deleteUser: async (userID, token) => {


        try {
            const response = await axios.delete(`${API_URL}/users/${userID}`, {
                headers: {
                    Authorization: token
                }
            })

            // return userID;
        } catch (error) {
            console.error(" error deleting user ", error);
        }
    }
}
export default userService;