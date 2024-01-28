import axios from "axios";

export const dadJokeFetch = {
    getTheJoke: async () => {
        try {
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json',
                }
            });

            return response;
        } catch (error) {
            console.error("Error fetching dad joke", error);
            throw error;
        }
    }
};
