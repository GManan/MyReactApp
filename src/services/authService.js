// authService.js
import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

const authService = {
    login: async (credentials) => {
        try {
            const { username, password } = credentials;

            // Base64 encode the username and password
            const basicAuthString = btoa(`${username}:${password}`);

            const response = await axios.get(`${API_URL}/authenticate`, {
                headers: {
                    Authorization: `Basic ${basicAuthString}`,
                },
                withCredentials: true,
            });
            // const authorizationHeader = response.headers.get('Authorization')
            // const token = authorizationHeader.split(" ")[1];
            // console.log("response!2222!", response);
            // console.log("authorizationHeader", authorizationHeader);
            // console.log("response!2222! data", response.data);
            // console.log("headers! data", response.headers);
            // console.log("  response.headers['authorization']", response.headers['authorization']);
            // console.log(" response.headers['Authorization']", response.headers['Authorization']);
            console.log(" response.headers.getAuthorization()", response.headers.getAuthorization());
            // console.log("Authorization header:", response.headers.get('Authorization'));
            // console.log("Content-Type header:", response.headers.get('Content-Type'));

            return { data: response.data, username: username, token: response.headers.getAuthorization().split(" ")[1] };
        } catch (error) {
            console.error('Authentication error', error);
            if (error.response && error.response.status === 401) {
                // Authentication failure
                throw new Error('Invalid credentials. Please try again.');
            } else {
                throw error; // Re-throw other errors
            }
        }
    },
};

export default authService;
