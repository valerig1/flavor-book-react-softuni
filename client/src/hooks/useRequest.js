import UserContext from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030';

export default function useRequest() {       
    const request = async (url, method, data, accessToken) => {
        let options = {};

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }

        if (accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': accessToken 
            }
        }

        const response = await fetch(`${baseUrl}${url}`, options);

        if (!response.ok) {
            throw response.statusText;
        }

        if (response.status === 204) {
            return {}
        }

        const result = await response.json();

        return result;
    }

    return {
        request,
    }
}