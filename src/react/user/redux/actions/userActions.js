import userService from "../../services/userService";
import { getUsers, setError } from "../slices/userSlice";

export const getUsersAsync = (token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        const response = await userService.getUsers(authToken);
        dispatch(getUsers(response.data));
    } catch (error) {

        dispatch(setError(error.data));
    }
}
export const addUserAsync = (userData, token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        await userService.addUser(userData, authToken);
        dispatch(getUsersAsync(token));
    } catch (error) {

        dispatch(setError(error.data));
    }
}
export const deleteUserAsync = (userData, token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        await userService.deleteUser(userData, authToken);
        dispatch(getUsersAsync(token));
    } catch (error) {
        dispatch(setError(error.data));
    }
}
export const editUserAsync = (userData, token) => async (dispatch) => {
    try {
        const authToken = 'Bearer ' + token;
        await userService.editUser(userData, authToken);
        dispatch(getUsersAsync(token));
    } catch (error) {
        dispatch(setError(error.data));
    }
}