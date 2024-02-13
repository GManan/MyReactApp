import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL + '/authenticate';

function decodeJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = JSON.parse(atob(base64));
    return jsonPayload;
}
const authService = {
    login: async (credentials) => {
        try {
            const { username, password } = credentials;
            const basicAuthString = btoa(`${username}:${password}`);

            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Basic ${basicAuthString}`,
                }
            });
            const token = response.headers.get('Authorization').split(" ")[1]
            const decodedToken = decodeJWT(token);


            return {
                data: response.data,
                user: decodedToken.userID,
                token: token,
                isAdmin: decodedToken.isAdministrator,
            };
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
