import axios from "axios";
import config from "../config";


const API_URL = config.API_URL;
const token = `Bearer ${localStorage.getItem('token')}`
const userService = {
    getUsers: async () => {
        console.log("toker", token);
        try {
            const userArr = await axios.get(`${API_URL}/users`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("users ", userArr);
            return userArr;
        } catch (error) {
            console.error("error fetching users ", error);
        }
    },
    addUser: async (userData) => {
        console.log("added User ", userData);
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
            console.log("users ", newUser.data);
            return newUser.data;
        } catch (error) {
            console.error("error fetching users ", error);
        }
    },
    editUser: async (userData) => {
        console.log("edit user  ", userData);
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
            console.log("users ", editedUser);
            return editedUser.response;
        } catch (error) {
            console.error("error fetching users ", error);
        }
    },

    deleteUser: async (userID) => {
        console.log("in async user delete func with userid ", userID);
        try {
            const response = await axios.delete(`${API_URL}/users/${userID}`, {
                headers: {
                    Authorization: token
                }
            })
            console.log("response ", response);
            return userID;
        } catch (error) {
            console.error(" error deleting user ", error);
        }
    }
}
export default userService;