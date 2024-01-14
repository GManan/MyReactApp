import { getUsers, addUser, setError, deleteUser, editUser } from "../Slices/userSlice";
import userService from "../../services/userService";
// import serializeData from
//  const serializeData =
export const getUsersAsync = () => async (dispatch) => {
    try {
        const response = await userService.getUsers();
        // const serializedData = serializeData(response);
        console.log("2 users ", response);
        console.log("2 users ", response.data);
        dispatch(getUsers(response.data));
    } catch (error) {
        dispatch(setError(error));
    }
}
export const addUserAsync = (userData) => async (dispatch) => {
    try {
        const response = await userService.addUser(userData);
        dispatch(addUser(response));
    } catch (error) {
        dispatch(setError(error));
    }
}
export const deleteUserAsync = (userData) => async (dispatch) => {
    try {
        const response = await userService.deleteUser(userData);
        console.log("response ", response)
        dispatch(deleteUser(userData));
    } catch (error) {
        dispatch(setError(error));
    }
}
export const editUserAsync = (userData) => async (dispatch) => {
    try {
        const response = userService.editUser(userData);
        console.log("edited user response ", response)
        dispatch(editUser(userData));
    } catch (error) {
        dispatch(setError(error));
    }
}