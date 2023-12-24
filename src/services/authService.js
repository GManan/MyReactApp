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
            return { data: response.data, username: username, token: response.headers.getAuthorization().split(" ")[1] };
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Invalid credentials. Please try again.');
            } else {
                throw error;
            }
        }
    },
};

export default authService;
