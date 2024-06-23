import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: '/src/mock',
});

// Optional: Add interceptors for request and response
axiosClient.interceptors.request.use(
    (config) => {
        // You can add headers or authentication tokens here
        // config.headers.Authorization = `Bearer YOUR_TOKEN_HERE`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        // Handle response data here
        return response;
    },
    (error) => {
        // Handle errors here
        return Promise.reject(error);
    }
);
